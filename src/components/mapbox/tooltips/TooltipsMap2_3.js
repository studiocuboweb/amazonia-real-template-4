import React, {PureComponent} from 'react';

export default class TooltipsMap2_3 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div id="mapbox_mineracao_tooltip">
        <div className='mapbox_map-overlay mapbox_mining_less_height' id='mapbox_mining'>
          <h3>Distrito de Porto Trombetas</h3>
          <p>sede da MRN</p>
        </div>  
      </div>
    );
  }
}