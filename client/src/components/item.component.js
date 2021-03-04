import React, { Component } from "react";
import './item.component.css';
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
        this.onChangePrice = this.onChangePrice.bind(this);
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
                quantity: "",
                price: "",
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

    onChangePrice(e) {
        const price = e.target.value;

        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    price: price
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
            price: this.state.currentItem.price,
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
            <div className="backGround">

            <div id="updateBody">
                {currentItem ? (
                    <div className="editForm">

                        <h2>{"Lets make some changes to " + currentItem.itemName + " !"}</h2>
                            <Form className="updateForm">

                                <Form.Label id="FoLabel">Item Name</Form.Label>
                                <InputGroup className="inputGroup mb-3">
                                    <FormControl
                                    type="text"
                                    placeholder="New Name"
                                    id="itemName"
                                    value={currentItem.itemName}
                                    onChange={this.onChangeItemName}
                                    maxLength="25"
                                    />
                                </InputGroup>

                                <Form.Group className="inputGroup mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label id="FoLabel">Store Type</Form.Label>
                                    <Form.Control
                                    required
                                    as="select"
                                    value={this.state.storeType}
                                    onChange={this.onChangeStoreType}
                                    defaultValue="choose...">
                                    <option>choose...</option>
                                    <option>dry</option>
                                    <option>cold</option>
                                    <option>frozen</option>
                                    </Form.Control>
                                </Form.Group>
                        
                                <Form.Group className="inputGroup mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label id="FoLabel">Food Group</Form.Label>
                                    <Form.Control
                                    required
                                    value={this.state.foodGroup}
                                    onChange={this.onChangeFoodGroup}
                                    as="select" 
                                    defaultValue="choose...">
                                    <option>choose...</option>
                                    <option>vegetable</option>
                                    <option>fruit</option>
                                    <option>grains</option>
                                    <option>protein</option>
                                    <option>dairy</option>
                                    <option>spices</option>
                                    <option>oil</option>
                                    <option>condiments</option>
                                    <option>other</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Label id="FoLabel">Item Quantity</Form.Label>
                                <InputGroup className="inputGroup mb-3">
                                    <FormControl
                                    type="integer"
                                    placeholder="New quantity"
                                    id="quantity"
                                    value={currentItem.quantity}
                                    onChange={this.onChangeQuantity}
                                    />
                                </InputGroup>

                                <Form.Label id="FoLabel">Item Price</Form.Label>
                                <InputGroup className="inputGroup mb-3">
                                    <FormControl
                                    type="integer"
                                    placeholder="New price"
                                    id="price"
                                    value={currentItem.price}
                                    onChange={this.onChangePrice}
                                    />
                                </InputGroup>

                                <Form.Label id="FoLabel">Item Description</Form.Label>
                                <InputGroup className="inputGroup mb-3">
                                    <FormControl
                                    type="text"
                                    placeholder="New Description"
                                    id="description"
                                    value={currentItem.description}
                                    onChange={this.onChangeDescription}
                                    maxLength="25"
                                    />
                                </InputGroup>

                                <InputGroup className="inputGroup mb-3">
                                    <label id="FoLabel" htmlFor="status">Status: </label>
                                    {currentItem.published ? " Published to List 👍 " : " Not Published 👎"}
                                </InputGroup>

                            </Form>

                            <div className="buttons">
                                {currentItem.published ? (
                                    <Button id="upButton" onClick={() => this.updatePublished(false)}>
                                        Remove
                                    </Button>
                                ) : (
                                    <Button id="upButton" onClick={() => this.updatePublished(true)}>
                                        Publish
                                    </Button>
                                )}

                                <Button id="upButton" onClick={this.updateList}>
                                    Update
                                </Button>

                                <Button id="upButton" variant="danger" onClick={this.deleteItem}>
                                <Link id="upButton" to={"/yourList"}>
                                    Delete
                                </Link>
                                </Button>

                                <Button id="upButton">
                                <Link id="upButton" to={"/yourList"}>
                                    Back
                                </Link>
                                </Button>
                                <p>{this.state.message}</p>
                            </div>

                        </div>
                        ) : (
                    <div id="oops">
                        <p>Please go back to select an item...</p>
                        <Button variant="primary">
                        <Link id="upButton" to={"/yourList"}>
                            Back
                        </Link>
                        </Button>
                    </div>
                )}

            </div>
            </div>
        );
    }
}