import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { withUser } from '../../services/withUser';
import Modal from 'react-modal';


class LocationModal extends Component {
    constructor(props) {
        super(props);

        if(props.location) {
            const { title, address, zipcode, category } = props.location;
            this.state = {
                title: title,
                address: address,
                zipcode: zipcode,
                category: category,
                modalIsOpen: false
            };
        } else {
            this.state = {
                title: '',
                address: '',
                zipcode: '',
                category: '',
                modalIsOpen: false
            };
        }
    }
    
    openModal = () => {
        this.setState({modalIsOpen: true});
    };
     
    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleDropdownChange = (event) => {
        this.setState({category: event.target.value});
    };
    
    handleCreateLocation = (event) => {
        event.preventDefault();
        this.setState({
            modalIsOpen: false
        });

        let promise;

        const { title, address, zipcode, category } = this.state;
        const locationData = {
            title, address, zipcode, category
        };

        if (this.props.location) {
            promise = API.updateLocation({
                ...locationData,
                _id: this.props.location._id
            });
        } else {
            promise = API.createLocation({
                ...locationData,
                createdBy: this.props.user.username
            });
        }

        promise
        .then(res => {
            this.setState({
                locTitle: '',
                locAddress: '',
                locZipcode: '',
                locCategory: '',
            });  
        })
        .catch(err => {
            this.setState({
                status: err.message
            })
        });
    };

    render() {
        const { location } = this.props;
        const isEditing = !!location;
        return (
           <div>
                {isEditing ? <button type="button" className="btn btn-primary" onClick={this.openModal} style={{width: 80, float: "right", margin: 5}}>Edit</button> : <button type="button" className="btn btn-primary" onClick={this.openModal} style={{width: 140, margin: 20}}>Create Location</button>} 
                {/* Location Modal */}
                <Modal
                    className="modalOpen"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Event Modal"
                    ariaHideApp={true}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{isEditing ? "Edit Your Location" : "Create Location"}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <label htmlFor="title">Location</label>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Your Green Location"
                            />
                            <label htmlFor="address">Address</label>
                            <Input
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="address"
                                placeholder="100 Green Avenue"
                            />
                            <label htmlFor="zipcode">Zipcode</label>
                            <Input
                                value={this.state.zipcode}
                                onChange={this.handleInputChange}
                                name="zipcode"
                                placeholder="44113"
                            />
                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-control" value={this.state.category} onChange={this.handleDropdownChange}>
                                    <option disabled />
                                    <option value="Community">Green Community</option>
                                    <option value="Shop">Shop Green</option>
                                    <option value="Travel">Travel Green</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <FormBtn
                                disabled={!(this.state.title && this.state.address && this.state.zipcode && this.state.category)}
                                onClick={this.handleCreateLocation}
                            >
                                {isEditing ? "Save Changes" : "Submit Location"}
                            </FormBtn>
                        </div>
                    </div>
                </Modal>          
            </div>
        );
    }
}

export default withUser(LocationModal);
