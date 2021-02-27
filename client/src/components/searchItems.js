import React, { Component } from 'react';
import ItemDataService from '../services/item.services';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';




export default class SearchItems extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchItem = this.onChangeSearchItem.bind(this);
        this.retrieveItems = this.retrieveItems.bind(this);
        this.refreshContainer = this.refreshContainer.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
        this.removeAllItems = this.removeAllItems.bind(this);
        this.handleSearchItemName = this.handleSearchItemName.bind(this);

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

    onChangeSearchItem(e){
        const handleSearchItemName = e.target.value;

        this.setState({
            searchItem: handleSearchItemName
        });
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
    }

    handleSearchItemName() {
        ItemDataService.findByItemName(this.state.searchItem)
        .then(response => {
            this.setState({
                items: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const{ searchItem, items, currentItem, currentIndex } = this.state;

        return(

            <div className="list row">
                <div className="col-md-8">

                    <InputGroup className="mb-3">
                        <FormControl
                        type="text"
                        placeholder="search by title"
                        value={searchItem}
                        onChange={this.onChangeSearchItem}
                        />
                        <InputGroup.Append>
                        <Button variant="secondary" onClick={this.handleSearchItemName}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <div className="col-md-6">
                        <h2>Your current list:</h2>

                        <ul className="list-group">
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

                        <Button variant="secondary" onClick={this.removeAllItems}>
                            Delete all
                        </Button>
                    </div>

                    <div id="displayInfo" className="col-md-6">
                        {currentItem ? (
                            <div>
                                <h2>Item</h2>
                                <div>
                                    <label>
                                        <h4>Name:</h4>
                                    </label>{" "}
                                    {currentItem.itemName}
                                </div>
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
                                        <h4>Description:</h4>
                                    </label>{" "}
                                    {currentItem.description}
                                </div>
                                <div>
                                    <label>
                                        <h4>Status:</h4>
                                    </label>{" "}
                                    {currentItem.published ? "Published 👍 " : "Not Published 👎"} 
                                </div>
                                
                                <div>
                                    <Link to={"/items/" + currentItem.id}>
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <br />
                                <p>Please select an item...</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}