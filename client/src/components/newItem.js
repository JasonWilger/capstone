import React, { Component } from "react";
import ItemDataService from '../services/item.services'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class NewItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeStoreType = this.onChangeStoreType.bind(this);
        this.onChangeFoodGroup = this.onChangeFoodGroup.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveItem = this.saveItem.bind(this);
        // this.newItem = this.newItem.bind(this);

        this.state = {
            controlId: null,
            itemName: "",
            storeType: "",
            foodGroup: "",
            quantity: null,
            description: "",
            published: false,

            submitted: false
        };
    };

    onChangeItemName(e) {
        this.setState({
            itemName: e.target.value
        });
    }

    onChangeStoreType(e) {
        this.setState({
            storeType: e.target.value
        });
    }

    onChangeFoodGroup(e) {
        this.setState({
            foodGroup: e.target.value
        });
    }

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveItem() {
        var data = {
            itemName: this.state.itemName,
            storeType: this.state.storeType,
            foodGroup: this.state.foodGroup,
            quantity: this.state.quantity,
            description: this.state.description
        };

        ItemDataService.create(data)
        .then(response => {
            this.setState({
            controlId: response.data.id,
            itemName: response.data.itemName,
            storeType: response.data.storeType,
            foodGroup: response.data.foodGroup,
            quantity: response.data.quantity,
            description: response.data.description,
            published: response.data,

            submitted: true
        });
        console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });

        window.location.reload(false);
    }

    // newItem() {
    //     this.setState({
    //         controlId: null,
    //         itemName: "",
    //         description: "",
    //         published: false,

    //         submitted: true
    //     })
    // }

    render() {
        return (
            // <div className="submitForm">
            //     {this.state.submitted ? (
            //         <div>
            //             <h2>You have successfully created a new list!</h2>
            //             <Button variant="primary" onClick={this.newList}>Add</Button>
            //         </div>
            //     ) : (
                    <div>
                        <Form className="submitList">
                            <Form.Group controlId="itemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control 
                                type="text"
                                required
                                value={this.state.itemName}
                                onChange={this.onChangeItemName}
                                placeholder="ex: List #1"
                                />
                            </Form.Group>

                            <Form.Group controlId="itemStoreType">
                                <Form.Label>Store Type</Form.Label>
                                <Form.Control 
                                type="text"
                                required
                                value={this.state.storeType}
                                onChange={this.onChangeStoreType}
                                placeholder="ex: List #1"
                                />
                            </Form.Group>

                            <Form.Group controlId="itemFoodGroup">
                                <Form.Label>Food Group</Form.Label>
                                <Form.Control 
                                type="text"
                                required
                                value={this.state.foodGroup}
                                onChange={this.onChangeFoodGroup}
                                placeholder="ex: List #1"
                                />
                            </Form.Group>

                            <Form.Group controlId="itemQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                type="integer"
                                required
                                value={this.state.quantity}
                                onChange={this.onChangeQuantity}
                                placeholder="ex: List #1"
                                />
                            </Form.Group>

                            <Form.Group controlId="itemDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                type="text"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                placeholder="enter a description"
                                />
                            </Form.Group>

                            <Button onClick={this.saveItem} variant="primary">
                                Submit
                            </Button>

                        </Form>
                    </div>
            //     )}
            // </div>
        )
    }
};
