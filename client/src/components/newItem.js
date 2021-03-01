import React, { Component } from "react";
import './newItem.css';
import ItemDataService from '../services/item.services';
import Accordion from 'react-bootstrap/Accordion';
import Card from  'react-bootstrap/Card';
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

    render() {
        return (

            <div className="newItemBody">

                <Accordion id="accordBody">
                    <Card>
                    <Card.Header id="accordHead">
                    <Accordion.Toggle id="accordButton" as={Button} variant="" eventKey="0">
                        Add Item!
                    </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body id="">

                        <Form className="submitList">
                            <Form.Group controlId="itemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control 
                                type="text"
                                required
                                value={this.state.itemName}
                                onChange={this.onChangeItemName}
                                placeholder="ex: Broccoli"
                                />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Store Type</Form.Label>
                                <Form.Control
                                required
                                as="select"
                                value={this.state.storeType}
                                onChange={this.onChangeStoreType}
                                as="select" 
                                defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Dry</option>
                                <option>Cold</option>
                                <option>Frozen</option>
                                </Form.Control>
                    
                                <Form.Label>Food Group</Form.Label>
                                <Form.Control
                                required
                                value={this.state.foodGroup}
                                onChange={this.onChangeFoodGroup}
                                as="select" 
                                defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Vegetable</option>
                                <option>Fruit</option>
                                <option>Proteins</option>
                                <option>Dairy</option>
                                <option>Grains</option>
                                </Form.Control>
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
                        </Card.Body>
                        </Accordion.Collapse>

                    </Card>
                </Accordion>

            </div>

        )
    }
};
