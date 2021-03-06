import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE1 from './styles/Map1.json';
import MAP_STYLE2 from './styles/Map2.json';
import MAP_STYLE3 from './styles/Map3.json';
import "styles/mapbox.css";
import Legend1 from './legends/Legend1';
import { FormattedMessage } from "react-intl";


const styles = {
  map1: MAP_STYLE1,
  map2: MAP_STYLE2,
  map3: MAP_STYLE3,
};

const categories = ['infoamazonia-6pa1ilyc','infoamazonia-5ascfk0h','mineracaobrasil-9cc2wi','ucsbrasil-6b9256'];

// Layer id patterns by category
const layerSelector = {
  'infoamazonia-6pa1ilyc': /infoamazonia-6pa1ilyc/,
  'infoamazonia-5ascfk0h': /infoamazonia-5ascfk0h/,
  'mineracaobrasil-9cc2wi': /mineracaobrasil-9cc2wi/,
  'ucsbrasil-6b9256': /ucsbrasil-6b9256/,
};

// Layer color class by type
const colorClass = {
  line: 'line-color',
  fill: 'fill-color',
  background: 'background-color',
  symbol: 'text-color'
};

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;


export default class StyleControls extends PureComponent {

  constructor(props) {
    super(props);
    this.defaultMapStyle = fromJS(styles[this.props.map]);
    this._defaultLayers = this.defaultMapStyle.get('layers');

    this.setOverlay = true;

    this.state = {
      displayLegendBG: {'backgroundColor':'none'}, 
      displayLegend: {'display':'none'},
      displayIcon: 'block',
      visibility: {
        'infoamazonia-6pa1ilyc': false,
        'infoamazonia-5ascfk0h': false,
        'mineracaobrasil-9cc2wi': false,
        'ucsbrasil-6b9256': false,
      },
      color: {
        'infoamazonia-6pa1ilyc': '',
        'infoamazonia-5ascfk0h': '',
        'mineracaobrasil-9cc2wi': '',
        'ucsbrasil-6b9256': '',
      },
      toggleOverlay: {'display':'none'}
    };
  }

  componentDidMount() {
    this._updateMapStyle(this.state);
  }

  _onColorChange(name, event) {
    const color = {...this.state.color, [name]: event.target.value};
    this.setState({color});
    this._updateMapStyle({...this.state, color});
  }

  _onVisibilityChange(name,target,parent_scope) {
    let visibility = '';
    if (name == 'infoamazonia-6pa1ilyc') {
      visibility = {...parent_scope.state.visibility, [name]: target, 'infoamazonia-5ascfk0h': target};
    } else {
      visibility = {...parent_scope.state.visibility, [name]: target};
    }
    parent_scope.setState({visibility});
    parent_scope._updateMapStyle({...parent_scope.state, visibility});
  }

  _toggleOverlay(ev) {
    if (!this.setOverlay) {
      this.setOverlay = true
      this.setState({toggleOverlay: {'display':'none'}});
      document.querySelector("div[tabindex='1']").style.pointerEvents = 'all';

    } else { 
      this.setOverlay = false
      this.setState({toggleOverlay: {'display':'block'}});
      document.querySelector("div[tabindex='1']").style.pointerEvents = 'none';
    }
    ev.defaultPrevented = true;
  }
  
  _updateMapStyle({visibility, color}) {
    const layers = this._defaultLayers
    .filter(layer => {
      const id = layer.get('id');
      return categories.every(name => visibility[name] || !layerSelector[name].test(id));
    })
    .map(layer => {
      const id = layer.get('id');
      const type = layer.get('type');
      const category = categories.find(name => layerSelector[name].test(id));
      if (category && colorClass[type] && color[category] !== '') {
        return layer.setIn(['paint', colorClass[type]], color[category]);
      }
      return layer;
    });
    this.props.onChange(this.defaultMapStyle.set('layers', layers));
  }

  _renderLayerControl() {
      const {visibility,toggleOverlay} = this.state;
      const LegendCollapse = Legend1;
      return (
          <div>
            <LegendCollapse
              visibility={visibility}
              onVisibilityChange={this._onVisibilityChange}
              legend={this.props.legend}
              parentScope={this}
            />
            { this.props.map == 'map1' && (
              <div className="mapbox_see-more">
                <a href="#" onClick={this._toggleOverlay.bind(this)}>
                    <FormattedMessage id="general.seeDetails" defaultMessage="See more information">
                        {(txt) => (txt)}
                    </FormattedMessage>
                </a>
                <div className="mapbox_see-more-overlay" style={toggleOverlay}>
                  <div class="mapbox_see-more-overflow">
                    <table class="mapbox_see-more-table-content">
                      <tr>
                        <td colspan="2" align="right"><a href='#' onClick={this._toggleOverlay.bind(this)} className="mapobx_see-more_close-bt" style={{'pointer-events':'all'}}>x</a></td>
                      </tr>
                      <tr>
                        <td colspan="2"> 
                          <h2>
                            <FormattedMessage id="map1.title" defaultMessage="Title Map 1">
                              {(txt) => (txt)}
                            </FormattedMessage>
                          </h2>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"> 
                          <h3>
                            <FormattedMessage id="legend1.title1" defaultMessage="Deforestation">
                            {(txt) => (txt)}
                            </FormattedMessage>
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-img"><img src={require('images/legend-icons/icon-1-large.png')} /></td>
                        <td>
                          <p>
                            <FormattedMessage id="legend1.text1" defaultMessage="Areas of mining concessions in the nine Amazonian countries divided by color according to the stage of granting: light green, areas that already contains mining and mineral research; light blue areas, requested ones; dark blue, areas with exploration potential.">
                              {(txt) => (txt)}
                            </FormattedMessage>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="source"> 
                            <FormattedMessage id="legend1.source" defaultMessage="Source">{(txt) => (txt)}</FormattedMessage> : <a href="" target="_blank">RAISG</a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"> 
                          <h3>
                            <FormattedMessage id="legend1.title2" defaultMessage="Deforestation">
                            {(txt) => (txt)}
                            </FormattedMessage>
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-img"><img src={require('images/legend-icons/icon-2-large.png')} /></td>
                        <td>
                          <p>
                            <FormattedMessage id="legend1.text2" defaultMessage="Areas of mining concessions in the nine Amazonian countries divided by color according to the stage of granting: light green, areas that already contains mining and mineral research; light blue areas, requested ones; dark blue, areas with exploration potential.">
                              {(txt) => (txt)}
                            </FormattedMessage>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="source"> 
                            <FormattedMessage id="legend1.source" defaultMessage="Source">{(txt) => (txt)}</FormattedMessage> : <a href="" target="_blank">RAISG</a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"> 
                          <h3>
                            <FormattedMessage id="legend1.title3" defaultMessage="Deforestation">
                            {(txt) => (txt)}
                            </FormattedMessage>
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-img"><img src={require('images/legend-icons/icon-3-large.png')} /></td>
                        <td>
                          <p>
                            <FormattedMessage id="legend1.text3" defaultMessage="Areas of mining concessions in the nine Amazonian countries divided by color according to the stage of granting: light green, areas that already contains mining and mineral research; light blue areas, requested ones; dark blue, areas with exploration potential.">
                              {(txt) => (txt)}
                            </FormattedMessage>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="source"> 
                            <FormattedMessage id="legend1.source" defaultMessage="Source">{(txt) => (txt)}</FormattedMessage> : <a href="" target="_blank">RAISG</a>
                        </td>
                      </tr>
                    </table> 
                  </div>
                </div>
              </div>
            )}
          </div>
      );
  }
  _toggleLegend() {
    if (this.state.displayLegend['display'] == 'none') {
      this.setState({displayLegend: {'display':'block'}})
      this.setState({displayLegendBG: {'backgroundColor':'#fff'}})
      this.setState({displayIcon:'none'})
    } else {
      this.setState({displayLegend: {'display':'none'}})
      this.setState({displayLegendBG: {'backgroundColor':'transparent'}})
      this.setState({displayIcon:'block'});
    }
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        { 
          // categories.map((name) => this._renderLayerControl(name,this)) 
          this._renderLayerControl(name,this)
        }
      </Container>
    );
  }
}