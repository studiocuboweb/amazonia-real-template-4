import React from 'react';
import { FormattedMessage } from "react-intl";
import Legend1 from './components/Legend1'

class LegendCollapse extends React.Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler(name,event,checked) {
        this.props.onVisibilityChange(name,checked,this.props.parentScope)
    }

    render() {
        const {legend} = this.props;
        return (
            <div key="1" className="input">
            {legend == 'legend1' &&
                <div>
                    <Legend1 key="legend3" defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            </div>
        );
      }

}

export default LegendCollapse