import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";

let checked = true;
class LegalMining extends Component {

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
            <input type="checkbox" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA4_MineracaoLegalZ4')} />
            <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                <FormattedMessage id="legend2.title1" defaultMessage="legal mining areas">
                {(txt) => (txt)}
                </FormattedMessage>
                <span className={this.state.arrowClass} onClick={this.toggle}></span>
            </label>
            <Collapse isOpened={this.state.collapse}>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'#05fad9'}}></span><FormattedMessage id="legend2.legend2_1" defaultMessage="under exploration">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'#021f55'}}></span><FormattedMessage id="legend2.legend2_2" defaultMessage="requested">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
                <div className='mapbox_control-panel_subtitle'><span style={{'width':'15px',height:'15px',backgroundColor:'hsla(198, 94%, 30%, 0.9)'}}></span><FormattedMessage id="legend2.legend2_3" defaultMessage="potential">
                    {(txt) => (txt)}
                </FormattedMessage>
                </div>
            </Collapse>
        </div>
        )
    }
}

export default LegalMining;