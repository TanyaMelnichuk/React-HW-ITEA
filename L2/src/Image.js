import React, { Component } from 'react';

class Image extends Component {

    state = {
      loaded: false
    };

    imageOnLoad = () => {
        this.setState({
            loaded: true
        })
    };

    render = () => {
        let {imageUrl} = this.props;
        let {loaded} = this.state;
        return(
            <div className={loaded ? 'loaded' : "loading"}>
                <div>Loading</div>
                <img src={ imageUrl } alt="" onLoad={this.imageOnLoad}/>
            </div>
        )
    };
}

export default Image;
