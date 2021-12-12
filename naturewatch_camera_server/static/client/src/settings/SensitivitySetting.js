import React from 'react';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class SensitivitySetting extends React.Component {
    render() {
        return (
            <ToggleButtonGroup name="sensitivity" value={this.props.value} onChange={this.props.onValueChange}>
                <ToggleButton type="radio" value="less">Moins</ToggleButton>
                <ToggleButton type="radio" value="default">Moyenne</ToggleButton>
                <ToggleButton type="radio" value="more">Plus</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default SensitivitySetting;
