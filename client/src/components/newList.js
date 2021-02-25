import React, { Component } from "react";
import ListDataService from '../services/lists.services'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class NewList extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveList = this.saveList.bind(this);
        this.newList = this.newList.bind(this);

        this.state = {
            controlId:null,
            title: "",
            description: "",
            published: false,

            submitted: false
        };
    };

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveList() {
        var data = {
            title: this.state.title,
            description: this.state.description
        };

        ListDataService.create(data)
        .then(response => {
            this.setState({
            controlId: response.data.id,
            title: response.data.title,
            description: response.data.description,
            published: response.data,

            submitted: true
        });
        console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    newList() {
        this.setState({
            controlId: null,
            title: "",
            description: "",
            published: false,

            submitted: true
        })
    }

    render() {
        return (
            <div className="submitForm">
                {this.state.submitted ? (
                    <div>
                        <h4>You have successfully created a new list!</h4>
                        <Button variant="primary" type="submit" onClick={this.newList}>Add</Button>
                    </div>
                ) : (
                    <div>
                        <Form className="submitList">
                            <Form.Group controlId="listTitle">
                                <Form.Label>List Title</Form.Label>
                                <Form.Control 
                                type="text"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                placeholder="ex: List #1"
                                />
                            </Form.Group>

                            <Form.Group controlId="listDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                type="text"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                placeholder="enter a description"
                                />
                            </Form.Group>

                            <Button onClick={this.saveList} variant="primary" type="submit">
                            Submit
                            </Button>

                        </Form>
                    </div>
                )}
            </div>

        )
    }
};
