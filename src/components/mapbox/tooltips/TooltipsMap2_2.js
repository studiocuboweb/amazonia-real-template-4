import React, {PureComponent} from 'react';

export default class TooltipsMap2_2 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div class=".mapboxgl-map mapboxgl-popup mapboxgl-popup-anchor-bottom" style={{"transform": "translate(-50%, -100%) translate("+x+"px,"+y+"px)"}}>
        <div class="mapboxgl-popup-tip"></div>
        <div class="mapboxgl-popup-content">
          <h2>Comunidade {hoveredFeature["properties"].Name}</h2>
        </div>  
      </div>
    );
  }
}