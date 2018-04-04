import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { withUser } from '../../services/withUser';
import Modal from 'react-modal';

class EventModal extends Component {
    constructor(props) {
        super(props);
        
        if(props.event) {
            const { title, date, time, location, description } = props.event;

            this.state = {
                title: title,
                date: date, 
                time: time,
                location: location,
                description: description,
                status: null,
                modalIsOpen: false,
            };
        } else {
            this.state = {
                title: '',
                date: '',
                time: '',
                location: '',
                description: '',
                status: null,
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
    
    handleCreateEvent = event => {
        event.preventDefault();
        this.setState({
            modalIsOpen: false
        });

        let promise;

        const { title, time, data, location, description } = this.state;
        const eventData = {
            title, time, data, location, description
        };

        if (this.props.event) {
            promise = API.updateEvent({
                ...eventData,
                _id: this.props.event._id
            });
        } else {
            promise = API.createEvent({
                ...eventData,
                createdBy: this.props.user.username
            });
        }

        promise
        .then(res => {
            this.setState({
                title: '',
                date: '',
                time: '',
                location: '',
                description: '',
                status: 'Thank you for adding to your community! Your event has been saved.'
            });  
        })
        .catch(err => {
            this.setState({
                status: err.message
            })
        });
    };

    render() {
        const { status } = this.state;
        const { event } = this.props;
        const isEditing = !!event;
        return (
            <div>
                <button type="button" className="btn btn-primary" style={{ margin: 10 }} onClick={this.openModal}>
                    {isEditing ? "Edit" : "Create Event"}
                </button>
                {status && 
                    <div className="card">
                        <div className="card-body">
                            {status}
                        </div>
                    </div>
                }
                {/* Event Modal */}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Event Modal"
                    ariaHideApp={false}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Organize Your Community<br/>Add an Event</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <label htmlFor="title">Event</label>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Your Green Initiative"
                            />
                            <label htmlFor="date">Date</label>
                            <Input
                                value={this.state.date}
                                onChange={this.handleInputChange}
                                name="date"
                                type="date"
                            />
                            <label htmlFor="time">Time</label>
                            <Input
                                value={this.state.time}
                                onChange={this.handleInputChange}
                                name="time"
                                type="time"
                            />
                            <label htmlFor="location">Location</label>
                            <Input
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Your Neighborhood"
                            />
                            <label htmlFor="description">Description</label>
                            <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name="description"
                                placeholder="Optional: Add more details about your event"
                            />
                        </form>
                        </div>
                        <div className="modal-footer">
                            <FormBtn
                                // disabled={!(this.state.eventTitle && this.state.eventDate && this.state.eventTime && this.state.eventLocation)}
                                onClick={this.handleCreateEvent}
                            >
                                {isEditing ? "Save Changes" : "Submit Event"}
                            </FormBtn>
                        </div>
                    </div>
                </Modal>          
            </div>
        );
    }
}

export default withUser(EventModal);
