import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";

let checked = true;
class IndigenousTerritories extends Component {

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
                <div>
                    <input type="checkbox" name="check1" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDATIs-afectadas')} />
                    <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                        <FormattedMessage id="legend4.title1" defaultMessage="Indigenous Territories">
                        {(txt) => (txt)}
                        </FormattedMessage>
                        <span className={this.state.arrowClass} onClick={this.toggle}></span>
                    </label>
                </div>
                <Collapse isOpened={this.state.collapse}>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'#f37859'}}></span><FormattedMessage id="legend4.legend4_1" defaultMessage="pressure: active mining inside">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(17, 99%, 67%, 0.8)'}}></span><FormattedMessage id="legend4.legend4_2" defaultMessage="pressure: dredges inside/at the limit">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(47, 98%, 59%, 0.8)'}}></span><FormattedMessage id="legend4.legend4_3" defaultMessage="threat: inactive mining within">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(52, 76%, 74%, 0.8)'}}></span><FormattedMessage id="legend4.legend4_4" defaultMessage="threat: mining in the limit/environment">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(0, 0%, 0%, 0.41)'}}></span><FormattedMessage id="legend4.legend4_5" defaultMessage="without known direct affectation">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default IndigenousTerritories;