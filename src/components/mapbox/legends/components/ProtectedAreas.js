import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";

let checked = true;
class ProtectedAreas extends Component {

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
                    <input type="checkbox" name="check1" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA ANPs-nacionales-afectadas')} />
                    <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                        <FormattedMessage id="legend3.title1" defaultMessage="NPA (national)">
                        {(txt) => (txt)}
                        </FormattedMessage>
                        <span className={this.state.arrowClass} onClick={this.toggle}></span>
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="check2" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA ANPS-departamentales-afectadas')} />
                    <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                        <FormattedMessage id="legend3.title2" defaultMessage="NPA (departamental)">
                        {(txt) => (txt)}
                        </FormattedMessage>
                        <span className={this.state.arrowClass} onClick={this.toggle}></span>
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="check3" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA bosques-afectados')} />
                    <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                        <FormattedMessage id="legend3.title3" defaultMessage="Bosques Protectores (Ecuador)">
                        {(txt) => (txt)}
                        </FormattedMessage>
                        <span className={this.state.arrowClass} onClick={this.toggle}></span>
                    </label>
                </div>
                <Collapse isOpened={this.state.collapse}>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(165, 98%, 46%, 0.8)'}}></span><FormattedMessage id="legend3.legend3_1" defaultMessage="pressure: active mining inside">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(165, 97%, 30%, 0.5)'}}></span><FormattedMessage id="legend3.legend3_2" defaultMessage="pressure: dredges inside/in the limit">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(185, 79%, 24%, 0.5)'}}></span><FormattedMessage id="legend3.legend3_3" defaultMessage="threat: inactive mining within">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(187, 98%, 12%, 0.77)'}}></span><FormattedMessage id="legend3.legend3_4" defaultMessage="threat: mining in the limit/environment">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                    <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(0, 0%, 0%, 0.33)'}}></span><FormattedMessage id="legend3.legend3_5" defaultMessage="without known direct affectation">
                        {(txt) => (txt)}
                    </FormattedMessage>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ProtectedAreas;