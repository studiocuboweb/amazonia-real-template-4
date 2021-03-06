import React, {PureComponent} from 'react';

export default class TooltipsMap2_2 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div id="mapbox_mineracao_tooltip">
        <div className='mapbox_map-overlay mapbox_mining_less_height' id='mapbox_mining'>
          <h3>Comunidade quilombola</h3>
          <p><strong>Nome: </strong> {hoveredFeature["properties"].Name}</p>
        </div>  
      </div>
    );
  }
}