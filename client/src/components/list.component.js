import React, { Component } from "react";
import ListDataService from '../services/lists.services';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


export default class List extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getList = this.getList.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateList = this.updateList.bind(this);
        this.deleteList = this.deleteList.bind(this);

        this.state = {
            currentList: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getList(this.props.match.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function(prevState) {
            return {
                currentList: {
                    ...prevState.currentList,
                    title: title
                }
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentList: {
                ...prevState.currentList,
                description: description
            }
        }));
    }

    getList(id) {
        ListDataService.get(id)
        .then(response => {
            this.setState({
                currentList: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updatePublished(status) {
        var data = {
            id: this.state.currentList.id,
            title: this.state.currentList.title,
            description: this.state.currentList.description,
            published: status
        };

        ListDataService.update(this.state.currentList.id, data)
        .then(response => {
            this.setState(prevState => ({
                currentList: {
                    ...prevState.currentList,
                    published: status
                }
            }));
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateList() {
        ListDataService.update(
            this.state.currentList.id,
            this.state.currentList
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The list was update successfully!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteList() {
        ListDataService.delete(this.state.currentList.id)
        .then(response => {
            console.log(response.data);
            this.props.history.push("/lists")
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { currentList } = this.state;

        return (

            <div>
                {currentList ? (
                    <div className="editForm">
                        <h2>{"Lets make some changes to " + currentList.title + " !"}</h2>
                            <Form>
                            <InputGroup className="mb-3">
                            <Form.Label>List Title</Form.Label>
                                <FormControl
                                type="text"
                                placeholder="New Title"
                                id="title"
                                value={currentList.title}
                                onChange={this.onChangeTitle}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                            <Form.Label>List Description</Form.Label>
                                <FormControl
                                type="text"
                                placeholder="New Description"
                                id="description"
                                value={currentList.description}
                                onChange={this.onChangeDescription}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <label htmlFor="status">Status:</label>
                                {currentList.published ? "Published" : "Pending"}
                            </InputGroup>
                            </Form>

                            {currentList.published ? (
                                <Button onClick={() => this.updatePublished(false)}>
                                    UnPublish
                                </Button>
                            ) : (
                                <Button onClick={() => this.updatePublished(true)}>
                                    Publish
                                </Button>
                            )}

                            <Button onClick={this.deleteList}>
                            <Link to={"/analytics"}>
                                Delete
                            </Link>
                            </Button>

                            <Button onClick={this.updateList}>
                                Update
                            </Button>

                            <Button variant="primary">
                            <Link to={"/analytics"}>
                                Back
                            </Link>
                            </Button>
                            <p>{this.state.message}</p>
                        </div>
                        ) : (
                        <div>
                            <p>Please select a list...</p>
                        </div>
                )}
            </div>
        );
    }
}