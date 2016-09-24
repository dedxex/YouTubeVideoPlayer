import React,{ Component } from 'react';
class SearchBar extends Component {
    //
    constructor(props) {
        super(props);
       this.state = { term : ""};
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearching(term);
    }
    render() { 
    return(
        <div className="container">
        <br/>
            <input type="text" onChange={event => this.onInputChange(event.target.value)}className="form-control" placeholder="Enter your search here" />
        <br/>
        </div>
    );
    }
}
export default SearchBar;