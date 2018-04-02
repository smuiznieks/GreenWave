import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { withUser } from '../../services/withUser';
import Modal from 'react-modal';

class EventModal extends Component {
    state = {
        eventTitle: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
        eventDescription: '',
        eventStatus: null,
        modalIsOpen: false
    };

    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal() {
        this.setState({modalIsOpen: true});
    };
     
    closeModal() {
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
            eventTitle: '',
            eventDate: '',
            eventTime: '',
            eventLocation: '',
            eventDescription: '',
            modalIsOpen: false
        });
        API.createEvent({
            title: this.state.eventTitle,
            time: this.state.eventTime,
            date: this.state.eventDate,
            location: this.state.eventLocation,
            description: this.state.eventDescription,
            createdBy: this.props.user.username
        })
        .then(res => {
            this.setState({
                eventStatus: 'Thank you for adding to your community! Your event has been saved.'
            });  
        })
        .catch(err => {
            this.setState({
                eventStatus: err.message
            })
        });
    };

    render() {
        const { eventStatus } = this.state;
        return (
            <div>
                <button type="button" className="btn btn-primary" style={{ margin: 10 }} onClick={this.openModal}>
                    Create Event
                </button>
                {eventStatus && 
                    <div className="card">
                        <div className="card-body">
                            {eventStatus}
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
                            <label htmlFor="eventTitle">Event</label>
                            <Input
                                value={this.state.eventTitle}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Your Green Initiative"
                            />
                            <label htmlFor="eventDate">Date</label>
                            <Input
                                value={this.state.eventDate}
                                onChange={this.handleInputChange}
                                name="date"
                                type="date"
                            />
                            <label htmlFor="eventTime">Time</label>
                            <Input
                                value={this.state.eventTime}
                                onChange={this.handleInputChange}
                                name="time"
                                type="time"
                            />
                            <label htmlFor="eventLocation">Location</label>
                            <Input
                                value={this.state.eventLocation}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Your Neighborhood"
                            />
                            <label htmlFor="eventDescription">Description</label>
                            <TextArea
                                value={this.state.eventDescription}
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
                                Submit Event
                            </FormBtn>
                        </div>
                    </div>
                </Modal>          
            </div>
        );
    }
}

export default withUser(EventModal);
