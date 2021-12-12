import React from 'react';

class CameraFeed extends React.Component {

    renderFeed(props) {
        const status = props.status;
        if (status === "active") {
            return this.activeFeed()
        } else if (status === "inactive") {
            return this.inactiveFeed()
        } else {
            return this.closingFeed(status)
        }
    }

    activeFeed() {
        return (
            <img src="/api/feed" alt="Flux de la caméra"/>
        );
    }

    inactiveFeed() {
        return (
           <div id="inactive-feed">
               <span onClick={this.props.onClick}><h2>Mise en pause de la prévisualisation <br/>afin d'économiser de l'énergie. Appuyer pour rafraîchir.</h2></span>
           </div>
        )
    }

    closingFeed(status) {
        return (
            <div id="closing-feed">
                <span><h2>Fin de la prévisualisation <br/>dans {status}</h2></span>
            </div>
        )
    }

    render() {
        return(
            <div className="feed">
                {this.renderFeed(this.props)}
            </div>
        );
    }
}

export default CameraFeed;
