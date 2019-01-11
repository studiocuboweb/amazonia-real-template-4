import React, {PureComponent} from 'react';

export default class TooltipsMap2 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div class=".mapboxgl-map mapboxgl-popup mapboxgl-popup-anchor-bottom" style={{"transform": "translate(-50%, -100%) translate("+x+"px,"+y+"px)"}}>
        <div class="mapboxgl-popup-tip"></div>
        <div class="mapboxgl-popup-content">
          <h2>{hoveredFeature["properties"].NOME}</h2>
          <p><strong>Período de exploração: </strong>{hoveredFeature["properties"].PERIODODEE}</p>
          <p><strong>Área total: </strong>{hoveredFeature["properties"].AREA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} hectares</p>
          {hoveredFeature["properties"].TONELADAS > 0 && (
            hoveredFeature["properties"].ESTADO == 'Futura'&& (
              <p><strong>Recursos minerais: </strong> {hoveredFeature["properties"].TONELADAS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} toneladas</p>
            )
          )}
          {hoveredFeature["properties"].TONELADAS > 0 && (
            hoveredFeature["properties"].ESTADO !== 'Futura'&& (
              <p><strong>Reservas de minério: </strong> {hoveredFeature["properties"].TONELADAS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} toneladas</p>
            )
          )}
        </div>  
      </div>
    );
  }
}