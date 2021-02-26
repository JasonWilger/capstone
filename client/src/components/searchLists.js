import React, { Component } from 'react';
import ListDataService from '../services/lists.services';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';




export default class SearchLists extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveLists = this.retrieveLists.bind(this);
        this.refreshContainer = this.refreshContainer.bind(this);
        this.setActiveList = this.setActiveList.bind(this);
        this.removeAllLists = this.removeAllLists.bind(this);
        this.handleSearchTitle = this.handleSearchTitle.bind(this);

        this.state = {
            lists: [],
            currentList: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveLists();
    }

    onChangeSearchTitle(e){
        const handleSearchTitle = e.target.value;

        this.setState({
            searchTitle: handleSearchTitle
        });
    }

    retrieveLists() {
        ListDataService.getAll()
        .then(response => {
            this.setState({
                lists: response.data
            })
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    refreshContainer() {
        this.retrieveLists();
        this.setState({
            currentList: null,
            currentIndex: -1
        });
    }

    setActiveList(list, index) {
        this.setState({
            currentList: list,
            currentIndex: index
        });
    }

    removeAllLists() {
        ListDataService.deleteAll()
        .then(response => {
            console.log(response.data);
            this.refreshList();
        })
        .catch(e => {
            console.log(e);
        });
    }

    handleSearchTitle() {
        ListDataService.findByTitle(this.state.searchTitle)
        .then(response => {
            this.setState({
                lists: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const{ searchTitle, lists, currentList, currentIndex } = this.state;

        return(

            <div className="list row">
                <div className="col-md-8">

                    <InputGroup className="mb-3">
                        <FormControl
                        type="text"
                        placeholder="search by title"
                        value={searchTitle}
                        onChange={() => this.onChangeSearchTitle}
                        />
                        <InputGroup.Append>
                        <Button variant="secondary" type="submit" onClick={() => this.handleSearchTitle}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <div className="col-md-6">
                        <h2>Your current lists:</h2>

                        <ul className="list-group">
                            {lists.length > 0 &&
                                 this.state.lists.map((list, index) => (
                                    <li className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                        }
                                        onClick={() => this.setActiveList(list, index)}
                                        key={index}
                                    >
                                        {list.title}
                                    </li>
                            ))}
                        </ul>

                        <Button variant="secondary" type="submit" onClick={() => this.removeAllLists}>
                            Delete all
                        </Button>
                    </div>

                    <div id="displayInfo" className="col-md-6">
                        {currentList ? (
                            <div>
                                <h2>List</h2>
                                <div>
                                    <label>
                                        <h4>Title:</h4>
                                    </label>{" "}
                                    {currentList.title}
                                </div>
                                <div>
                                    <label>
                                        <h4>Description:</h4>
                                    </label>{" "}
                                    {currentList.description}
                                </div>
                                <div>
                                    <label>
                                        <h4>Status:</h4>
                                    </label>{" "}
                                    {currentList.published ? "Published" : "pending"} 
                                </div>
                            </div>
                        ) : (
                            <div>
                                <br />
                                <p>Please select a list...</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        );
    }
}