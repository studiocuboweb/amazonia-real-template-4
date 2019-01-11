import React, {PureComponent} from 'react';

export default class TooltipsMap1 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div id="mapbox_mineracao_tooltip">
        <div class='mapbox_map-overlay' id='mapbox_mining'>
          <h3>Área de mineração</h3>
          <p><strong>Solicitante: </strong>{hoveredFeature["properties"].NOME}</p>
          <p><strong>Tipo de minério: </strong>{hoveredFeature["properties"].SUBS}</p>
          <p><strong>Etapa de solicitação: </strong>{hoveredFeature["properties"].FASE}</p>
        </div>
    </div>
    );
  }
}