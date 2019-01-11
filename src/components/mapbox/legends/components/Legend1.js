import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

const Div = styled.div`

    #menu {
        background: #fff;
        z-index: 1;
        border-radius: 3px;
        width: 120px;
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
        text-align: center;
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
`;

let checked = false;
class Legend1 extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            classActive1: '',
            classActive2: '',
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
        } else {
            checked = false;
            if (name == 'infoamazonia-6pa1ilyc') {
                this.setState({classActive1: ''})
            }
            if (name == 'mineracaobrasil-9cc2wi') {
                this.setState({classActive2: ''})
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
                        <FormattedMessage id="legend1.title1" defaultMessage="Deforestation">
                            {(txt) => (txt)}
                        </FormattedMessage>
                    </a>
                    <a href="" className={this.state.classActive2} onClick={this._onChangeHandler.bind(this,'mineracaobrasil-9cc2wi')}>
                        <FormattedMessage id="legend1.title2" defaultMessage="Mining">
                            {(txt) => (txt)}
                        </FormattedMessage>
                    </a>
                </nav>
            </Div>
        )
    }
}

export default Legend1;