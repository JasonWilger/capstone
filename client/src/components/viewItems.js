import React, { Component } from 'react';
import './viewItems.css';
import ItemDataService from '../services/item.services';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';




export default class ViewItems extends Component {
    constructor(props) {
        super(props);
        this.retrieveItems = this.retrieveItems.bind(this);
        this.refreshContainer = this.refreshContainer.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.removeAllItems = this.removeAllItems.bind(this);

        this.state = {
            items: [],
            currentItem: null,
            currentIndex: -1,
            searchItem: ""
        };
    }

    componentDidMount() {
        this.retrieveItems();
    }

    retrieveItems() {
        ItemDataService.getAll()
        .then(response => {
            this.setState({
                items: response.data
            })
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    refreshContainer() {
        this.retrieveItems();
        this.setState({
            currentItem: null,
            currentIndex: -1
        });
    }

    setActiveItem(item, index) {
        this.setState({
            currentItem: item,
            currentIndex: index
        });
    }

    removeAllItems() {
        ItemDataService.deleteAll()
        .then(response => {
            console.log(response.data);
            this.refreshList();
        })
        .catch(e => {
            console.log(e);
        });

        window.location.reload(false);

    }

    render() {
        const{ items, currentItem, currentIndex } = this.state;

        return(

            <div className="addViewBody">
                <div id="viewList">
                    <h4 id="listTitle">Your current list items:</h4>

                    <ul id="listItems" className="list-group">
                        {items.length > 0 &&
                            this.state.items.map((item, index) => (
                                <li className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveItem(item, index)}
                                    key={index}
                                >
                                    {item.itemName}
                                </li>
                        ))}
                    </ul>

                    <Button variant="danger" onClick={this.removeAllItems}>
                        Clear List
                    </Button>
                </div>

                <div id="displayInfo" >
                    {currentItem ? (
                        <div id="ifSelected">
                            <h2>{currentItem.itemName}</h2>
                            <div>
                                <label>
                                    <h4>Store Type:</h4>
                                </label>{" "}
                                {currentItem.storeType}
                            </div>
                            <div>
                                <label>
                                    <h4>Food Group:</h4>
                                </label>{" "}
                                {currentItem.foodGroup}
                            </div>
                            <div>
                                <label>
                                    <h4>Quantity:</h4>
                                </label>{" "}
                                {currentItem.quantity}
                            </div>
                            <div>
                                <label>
                                    <h4>Price:</h4>
                                </label>{" $"}
                                {currentItem.price}
                            </div>
                            <div>
                                <label>
                                    <h4>Description:</h4>
                                </label>{" "}
                                {currentItem.description}
                            </div>
                            <div>
                                <label>
                                    <h4>Status: </h4>
                                </label>{" "}
                                {currentItem.published ? " Published to List 👍 " : " Not Published 👎"} 
                            </div>
                            
                            <Button variant="warning">
                                <Link id="editButton" to={"/items/" + currentItem.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                Edit
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Click a list item to view the details!</p>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}