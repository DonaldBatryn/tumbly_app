import React from 'react';


class Radar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = this.props.user.imageUrl ? this.props.user.imageUrl : "https://assets.tumblr.com/images/default_avatar/cone_open_128.png"
        return (
            <div className="radar-container">
                <h2 className="radar-header-text">Radar</h2>
                <div className="radar-info-container">
                    <div className="radar-left">
                        <img className="mini-image" src={this.props.user.imageUrl} alt={this.props.user.username}/>
                        <div className="mini-info">
                            <h4 className="mini-username">{this.props.user.username}</h4>
                            <h4 className="mini-tagline">Code is life...</h4>
                        </div>
                    </div>
                    <div className="radar-right">
                        <button><i className="fa fa-plus"></i></button>
                    </div>
                </div>
                <div className="radar-preview-image-cont">
                    <img className="radar-prev-img" src={image} alt={this.props.user.username}/>
                </div>
            </div>
        )
    }
}

export default Radar;