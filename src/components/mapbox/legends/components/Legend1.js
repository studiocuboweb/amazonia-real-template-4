import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

const Div = styled.div`

    #menu {
        background: #fff;
        z-index: 1;
        border-radius: 3px;
        width: 135px;
        border: 1px solid rgba(0,0,0,0.4);
        font-family: 'Open Sans', sans-serif;
    }

    #menu a {
        font-size: 13px;
        color: #404040;
        display: block;
        margin: 0;
        padding: 0;
        padding: 10px;
        text-decoration: none;
        border-bottom: 1px solid rgba(0,0,0,0.25);
        text-align: left;
    }

    #menu a:last-child {
        border: none;
    }

    #menu a:hover {
        background-color: #f8f8f8;
        color: #404040;
    }

    #menu a.active {
        background-color: #3887be;
        color: #ffffff;
    }

    #menu a.active:hover {
        background: #3074a4;
    }

    #menu a img {
        margin: 0 6px 0 0;
        float:left;
    }
`;

let checked = false;
class Legend1 extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            classActive1: '',
            classActive2: '',
            classActive3: '',
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
            if (name == 'infoamazonia-6pa1ilyc') {
                this.setState({classActive1: 'active'})
            }
            if (name == 'mineracaobrasil-9cc2wi') {
                this.setState({classActive2: 'active'})
            }
            if (name == 'ucsbrasil-6b9256') {
                this.setState({classActive3: 'active'})
            }
        } else {
            checked = false;
            if (name == 'infoamazonia-6pa1ilyc') {
                this.setState({classActive1: ''})
            }
            if (name == 'mineracaobrasil-9cc2wi') {
                this.setState({classActive2: ''})
            }
            if (name == 'ucsbrasil-6b9256') {
                this.setState({classActive3: ''})
            }
        }
        this.props._onChangeHandler(name,this.props.parentScope,checked)
        event.preventDefault();
        event.stopPropagation();
    }

    render () {
        return (
            <Div>
                <nav id="menu">
                    <a href="" className={this.state.classActive1} onClick={this._onChangeHandler.bind(this,'infoamazonia-6pa1ilyc')}>
                        <img src={require('images/legend-icons/icon-1.png')} />
                        <FormattedMessage id="legend1.title1" defaultMessage="Deforestation">
                            {(txt) => (txt)}
                        </FormattedMessage>
                    </a>
                    <a href="" className={this.state.classActive2} onClick={this._onChangeHandler.bind(this,'mineracaobrasil-9cc2wi')}>
                        <img src={require('images/legend-icons/icon-2.png')} />
                        <FormattedMessage id="legend1.title2" defaultMessage="Mining">
                            {(txt) => (txt)}
                        </FormattedMessage>
                    </a>
                    <a href="" className={this.state.classActive3} onClick={this._onChangeHandler.bind(this,'ucsbrasil-6b9256')}>                        
                        <img src={require('images/legend-icons/icon-3.png')} />
                        <FormattedMessage id="legend1.title3" defaultMessage="Conservation units">
                            {(txt) => (txt)}
                        </FormattedMessage>
                    </a>
                </nav>
            </Div>
        )
    }
}

export default Legend1;