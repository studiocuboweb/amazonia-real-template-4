import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE1 from './styles/Map1.json';
import MAP_STYLE2 from './styles/Map2.json';
import MAP_STYLE3 from './styles/Map3.json';
import "styles/mapbox.css";
import Legend1 from './legends/Legend1';


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
      }
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
      const {visibility} = this.state;
      const LegendCollapse = Legend1;
      return (
          <div>
          <LegendCollapse
            visibility={visibility}
            onVisibilityChange={this._onVisibilityChange}
            legend={this.props.legend}
            parentScope={this}
          />
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