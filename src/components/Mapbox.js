/* global window */
import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
//import MAP_STYLE from './style.json';
// import MAP_STYLE from './mapbox/styles/map1.json';
import {fromJS} from 'immutable';
import PropTypes from 'prop-types';
import Dimensions from 'react-dimensions';
import LegendMap from './mapbox/LegendMap';
import Fullscreenable from 'react-fullscreenable';
import TooltipsMap1 from './mapbox/tooltips/TooltipsMap1.js';
import TooltipsMap1_2 from './mapbox/tooltips/TooltipsMap1_2.js';
import 'mapbox-gl/src/css/mapbox-gl.css'

// import Map1_2 from './mapbox/LegendMap2';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g'; // Set your mapbox token here

const tooltips = {
  'quilombolasdesmatamentominera-bl6vgg':TooltipsMap1,
  'mineracaobrasil-9cc2wi':TooltipsMap1_2,
  //map2:[TooltipsMap2,'quilombolasdesmatamentominera-bl6vgg']
}

class MapBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapStyle: '',
      updated: true,
      hoveredFeature: null,
      viewport: {
        width: this.props.containerWidth,
        height: this.props.containerHeight,
        latitude: this.props.coordinates[1],
        longitude: this.props.coordinates[0],   
        minZoom: this.props.zoomMin,
        maxZoom: this.props.zoomMax,   
        zoom: this.props.zoomNumber
      },
      popupInfo: null
    }
  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  }

  //_onViewportChange = viewport => this.setState({viewport});
  _onStyleChange = mapStyle => {  
    this.setState({mapStyle});
  };
  componentWillReceiveProps(nextProps) {
    if ((this.props.isFullscreen !== nextProps.isFullscreen)) {
      if (nextProps.isFullscreen ) {
        this.setState(
          {
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
              latitude: this.props.coordinates[1],
              longitude: this.props.coordinates[0],   
              minZoom: this.props.zoomMin,
              maxZoom: this.props.zoomMax,   
              zoom: this.props.zoomNumber
            }
        })
      } else {
        this.setState(
          {
            viewport: {
              width: this.props.containerWidth,
              height: this.props.containerHeight,
              latitude: this.props.coordinates[1],
              longitude: this.props.coordinates[0],   
              minZoom: this.props.zoomMin,
              maxZoom: this.props.zoomMax,   
              zoom: this.props.zoomNumber
            }
        })        
      }
    }
    if (nextProps.update !== this.props.update) {
      this.setState({updated:false})
      setTimeout(
        function() {
          this.setState(
            {
              mapStyle: '',
              updated:true,
              viewport: {
                width: this.props.containerWidth,
                height: this.props.containerHeight,
                latitude: this.props.coordinates[1],
                longitude: this.props.coordinates[0],   
                minZoom: this.props.zoomMin,
                maxZoom: this.props.zoomMax,   
                zoom: this.props.zoomNumber
              }
            })
        }
        .bind(this),
        100
      )
    }
  }
  _showTooltip = event => {
    const {features, srcEvent: {offsetX, offsetY}} = event;
    const hoveredFeature = features && features.find(f => f.layer.id ===  event.features[0]['layer']['id']);
    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _renderTooltip() {
    const {hoveredFeature, x, y} = this.state;
    let TooltipComponent = '';
    if (hoveredFeature) {
      TooltipComponent = tooltips[hoveredFeature['layer']['id']]
    }
    return hoveredFeature && (
      <div>
        <TooltipComponent 
          hoveredFeature={hoveredFeature}
          x={x}
          y={y}>
        </TooltipComponent>
      </div>
    );
  }
  render() {
    const {viewport, mapStyle, updated} = this.state;
    return (
      <div>
        <button style={{position:"absolute", left: 0,cursor: 'pointer',color:'rgb(192, 192, 192)',display: 'block',padding:'0.3rem',border: 0,zIndex:9999,backgroundColor:"#ffffff",margin:'1rem'}} className="fa fa-arrows-alt" onClick={this.props.toggleFullscreen}></button>
      {
        updated &&
          <ReactMapGL
            {...viewport}
            mapStyle={mapStyle}
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN} 
            onHover={this._showTooltip} 
            >
            <LegendMap mapStyle='' map={this.props.map} showExtraLayers={this.props.showExtraLayers} containerComponent={this.props.containerComponent} 
            legend={this.props.legend} key={this.props.update} onChange={this._onStyleChange} />
            {this._renderTooltip()}
          </ReactMapGL>
      }
      </div>
    );
  }
}

MapBox.propTypes = {
    isFullscreen: PropTypes.bool,
    toggleFullscreen: PropTypes.func,
    viewportDimensions: PropTypes.object
};

//const FullscreenableMyMap = Fullscreenable()(MapBox);
const FullscreenableMyMap = Dimensions({elementResize: false})(Fullscreenable()(MapBox));

export default FullscreenableMyMap;

// export default 