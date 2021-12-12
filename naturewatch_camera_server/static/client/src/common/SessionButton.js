import React from 'react';
import {Button} from 'react-bootstrap';

class SessionButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    renderText() {
        if (this.props.sessionStatus === this.props.type) {
            return (
                <span>{"Arrêter la capture (" + this.props.type + ")"}</span>
            );
        } else {
            return (
                <span>{"Démarrer la capture (" + this.props.type + ")"}</span>
            );
        }
    }

    handleClick() {
        this.props.onButtonClick(this.props.type);
    }

    render() {
        return(
            <Button
                size="lg"
                className="startsession"
                onClick={this.handleClick}
                active={
                    this.props.sessionStatus === this.props.type
                }
                disabled={
                    this.props.sessionStatus !== "inactive" && this.props.sessionStatus !== this.props.type
                }
            >
                {this.renderText()}
            </Button>
        )
    }
}

export default SessionButton;