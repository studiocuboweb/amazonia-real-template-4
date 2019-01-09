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
                <input type="checkbox" className="mapbox_custom-checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA1 PONTOS_mineriailegal-pt-5owfra')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}} onClick={this.toggle}>
                <FormattedMessage id="legend1.title1" defaultMessage="sites of illegal mining">
                    {(txt) => (txt)}
                </FormattedMessage>
                <span id="seta" className={this.state.arrowClass} onClick={this.toggle}></span>
                </label>
                <Collapse isOpened={this.state.collapse}>
                <table style={{'marginTop':'-10px','marginLeft':'16px'}}>
                <tbody>
                <tr>
                    <td>
                        <label>
                            <FormattedMessage id="legend1.subtitle1_1" defaultMessage="exact location">
                            {(txt) => (txt)}
                            </FormattedMessage>
                        </label>
                        <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_circle-11_active2.svg')} alt='ico_circle-11_active2' title='ico_circle-11_active2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend1_1_1" defaultMessage="active">
                            {(txt) => (txt)}
                        </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_circle-11_inactive2.svg')} alt='ico_circle-11_inactive2' title='ico_circle-11_inactive2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend1_1_2" defaultMessage="inactive">
                            {(txt) => (txt)}
                        </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_circle-11_noinfo2.svg')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend1_1_3" defaultMessage="no info">
                            {(txt) => (txt)}
                        </FormattedMessage>
                        </div>
                    </td>
                    <td>
                        <label>
                            <FormattedMessage id="legend1.subtitle1_2" defaultMessage="approximate">
                                {(txt) => (txt)}
                            </FormattedMessage>
                        </label>
                        <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_circle-stroked-11_active2.svg')} alt='ico_circle-stroked-11_active2' title='ico_circle-stroked-11_active2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend1_2_1" defaultMessage="active">
                            {(txt) => (txt)}
                        </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_circle-stroked-11_inactive2.svg')} alt='ico_circle-stroked-11_inactive2' title='ico_circle-stroked-11_inactive2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend1_2_2" defaultMessage="inactive">
                            {(txt) => (txt)}
                        </FormattedMessage>
                        </div>
                        <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px'}}><img src={require('images/legend-icons/ico_circle-stroked-11_noinfo2.svg')} alt='ico_circle-11_noinfo2' title='ico_circle-11_noinfo2' style={{'margin':0,'padding':0}} /></span><FormattedMessage id="legend1.legend1_2_3" defaultMessage="no info">
                            {(txt) => (txt)}
                        </FormattedMessage>
                        </div>
                    </td>
                </tr>
                </tbody>
                </table>
                </Collapse>
            </div>
        )
    }
}

export default IlegalMining1;