import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

let checked = true;
class IlegalMining1 extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }

    componentDidMount() {
        this.setState({collapse:this.props.defaultOpened});
        this.setState({arrowClass: 'fa fa-caret-down'})
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler = (name,event) => {
        if (!checked) {
            checked = true;
        } else {
            checked = false;
        }

        event.target.checked = checked;
        this.props._onChangeHandler(name,this.props.parentScope,checked)
    }

    render () {
        return (
            <div>
                <input type="checkbox" id="rios" className="mapbox_custom-checkbox-colored_1" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA2 RIOS_mineriailegal-ln-67gxaf')} />
                <label for="rios" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}}>
                    <FormattedMessage id="legend1.title2" defaultMessage="rivers with illegal mining">
                    {(txt) => (txt)}
                    </FormattedMessage>
                </label>
            </div>
        )
    }
}

export default IlegalMining1;