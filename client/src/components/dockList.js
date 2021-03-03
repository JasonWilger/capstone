import React, { Component } from 'react';
import './dockList.css';
import ItemDataService from '../services/item.services';


export default class DockList extends Component {
    constructor(props) {
        super(props);
        this.retrieveItems = this.retrieveItems.bind(this);
        this.refreshContainer = this.refreshContainer.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);

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

    render() {
        const{ items, currentItem, currentIndex } = this.state;

        return(

            <div>
                <h1 id="listSectionTitle">lets take a look at that list again.</h1>

                <div className="addViewBodyDock">
                    <div id="viewList">
                    <h4 id="listTitle">Your Items:</h4>
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

                    </div>

                    <div id="displayInfoDock">
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
                            </div>
                        ) : (
                            <div>
                                <br />
                                <p>Click a list item to view the details!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        );
    }
}