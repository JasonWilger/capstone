import React, { Component } from "react";
import ItemDataService from '../services/item.services';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeStoreType = this.onChangeStoreType.bind(this);
        this.onChangeFoodGroup = this.onChangeFoodGroup.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getItem = this.getItem.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            currentList: {
                id: null,
                itemName: "",
                storeType: "",
                foodGroup: "",
                quantity: null,
                description: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getItem(this.props.match.params.id);
    }

    onChangeItemName(e) {
        const itemName = e.target.value;

        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    itemName: itemName
                }
            };
        });
    }

    onChangeStoreType(e) {
        const storeType = e.target.value;

        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    storeType: storeType
                }
            };
        });
    }

    onChangeFoodGroup(e) {
        const foodGroup = e.target.value;

        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    foodGroup: foodGroup
                }
            };
        });
    }

    onChangeQuantity(e) {
        const quantity = e.target.value;

        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    quantity: quantity
                }
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentItem: {
                ...prevState.currentItem,
                description: description
            }
        }));
    }

    getItem(id) {
        ItemDataService.get(id)
        .then(response => {
            this.setState({
                currentItem: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updatePublished(status) {
        var data = {
            id: this.state.currentItem.id,
            itemName: this.state.currentItem.itemName,
            storeType: this.state.currentItem.storeType,
            foodGroup: this.state.currentItem.foodGroup,
            quantity: this.state.currentItem.quantity,
            description: this.state.currentItem.description,
            published: status
        };

        ItemDataService.update(this.state.currentItem.id, data)
        .then(response => {
            this.setState(prevState => ({
                currentItem: {
                    ...prevState.currentItem,
                    published: status
                }
            }));
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateItem() {
        ItemDataService.update(
            this.state.currentItem.id,
            this.state.currentItem
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The item was update successfully!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteItem() {
        ItemDataService.delete(this.state.currentItem.id)
        .then(response => {
            console.log(response.data);
            this.props.history.push("/items")
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { currentItem } = this.state;

        return (

            <div>
                {currentItem ? (
                    <div className="editForm">
                        <h2>{"Lets make some changes to " + currentItem.itemName + " !"}</h2>
                            <Form>
                            <InputGroup className="mb-3">
                            <Form.Label>Item Name</Form.Label>
                                <FormControl
                                type="text"
                                placeholder="New Name"
                                id="itemName"
                                value={currentItem.itemName}
                                onChange={this.onChangeItemName}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                            <Form.Label>Item Store Type</Form.Label>
                                <FormControl
                                type="text"
                                placeholder="New Name"
                                id="storeType"
                                value={currentItem.storeType}
                                onChange={this.onChangeStoreType}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                            <Form.Label>Item Food Group</Form.Label>
                                <FormControl
                                type="text"
                                placeholder="New Name"
                                id="foodGroup"
                                value={currentItem.foodGroup}
                                onChange={this.onChangeFoodGroup}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                            <Form.Label>Item Quantity</Form.Label>
                                <FormControl
                                type="integer"
                                placeholder="New quantity"
                                id="quantity"
                                value={currentItem.quantity}
                                onChange={this.onChangeQuantity}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                            <Form.Label>Item Description</Form.Label>
                                <FormControl
                                type="text"
                                placeholder="New Description"
                                id="description"
                                value={currentItem.description}
                                onChange={this.onChangeDescription}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <label htmlFor="status">Status:</label>
                                {currentItem.published ? "Published 👍 " : "Not Published 👎"}
                            </InputGroup>
                            </Form>

                            {currentItem.published ? (
                                <Button onClick={() => this.updatePublished(false)}>
                                    UnPublish
                                </Button>
                            ) : (
                                <Button onClick={() => this.updatePublished(true)}>
                                    Publish
                                </Button>
                            )}

                            <Button onClick={this.deleteList}>
                            <Link to={"/yourList"}>
                                Delete
                            </Link>
                            </Button>

                            <Button onClick={this.updateList}>
                                Update
                            </Button>

                            <Button variant="primary">
                            <Link to={"/yourList"}>
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