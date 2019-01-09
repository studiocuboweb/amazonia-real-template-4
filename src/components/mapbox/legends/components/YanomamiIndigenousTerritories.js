import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";

let checked = true;
class YanomamiIndigenousTerritories extends Component {

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
                    <input type="checkbox" className="mapbox_custom-checkbox-colored_2" name="check1" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA4- Yanomami_tis-afectadas')} />
                    <label style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'0.5rem'}} onClick={this.toggle}>
                        <FormattedMessage id="legend5.title1" defaultMessage="Indigenous Territories affected">
                        {(txt) => (txt)}
                        </FormattedMessage>
                    </label>
                </div>
            </div>
        )
    }
}

export default YanomamiIndigenousTerritories;