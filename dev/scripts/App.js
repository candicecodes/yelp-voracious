import React, { Component } from 'react';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import Yelp from './Yelp';

class App extends Component {
    constructor() {
    super();
    this.state = {
        businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({businesses: businesses});
    });
    }

    render() {
        return (
        <div className="App">
            <h1>voracious</h1>
            <SearchBar searchYelp={this.searchYelp} />
            <BusinessList businesses={this.state.businesses} />
        </div>
        );
    }
}

// export default App;
ReactDOM.render(<App />, document.getElementById('root'));