import React, {PureComponent} from 'react';

export default class TooltipsMap2 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div id="mapbox_mineracao_tooltip">
        <div className='mapbox_map-overlay mapbox_mining_extra_height' id='mapbox_mining'>
          <h3>Mina</h3>
          <p><strong>Nome: </strong>{hoveredFeature["properties"].NOME}</p>
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