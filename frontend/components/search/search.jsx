import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
            postResults: [],
            userResults: [],
            itemSelected: {},
            showItemSelected: false
        }

       
        this.getAutocompletedResults = this.getAutocompletedResults.bind(this)
    }

    update() {
        return (e) => {
            this.setState({ searchTerm: e.target.value})
        }
    }

    getAutocompletedResults(e) {
        this.setState({
            searchTerm: e.target.value
        }, () => {
            $.getJSON('/search_posts?q=' + this.state.searchTerm).then(res => {
                this.setState({ postResults: res.items })
            })
            $.getJSON('/search_users?q=' + this.state.searchTerm).then(res => {
                this.setState({ userResults: res.items })
            })
        })
    }

    render(){
        let postList = this.state.postResults.map((res, idx) => {
            return (
                <li key={idx} className="dropdown-li">
                    <h4>{res.title}</h4>
                </li>
            )
        })

        let userList = this.state.userResults.map((res, idx) => {
            let image = res.imageUrl ? res.imageUrl : "https://assets.tumblr.com/images/default_avatar/cone_open_128.png"
            return (
                <li key={idx} className="dropdown-li">
                    <h4>{res.username}</h4>
                    <img className="search-img" src={image} alt={res.username}/>
                </li>
            )
        })

        document.addEventListener("click", (e) => {
            let searchZone = document.getElementsByClassName(".search-bar-cont")[0]

            if (e.target !== searchZone) this.setState({ postResults: [], userResults: [], searchTerm: "" })
        })
        let postHeader = "";
        let userHeader = "";
        if (this.state.postResults.length > 0) postHeader = <li className="header-li">POSTS</li>
        if (this.state.userResults.length > 0) userHeader = <li className="header-li">USERS</li>

        return (
            <div className="search-bar-cont">
                <input className="nav-search-bar"
                    placeholder="Search Tumbly"
                    value={this.state.searchTerm}
                    onChange={this.getAutocompletedResults} />
                <ul className="results-dropdown">
                    {postHeader}
                    {postList}
                    {userHeader}
                    {userList}
                </ul>
            </div>
        )
    }
}

export default Search;