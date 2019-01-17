import React, {PureComponent} from 'react';

export default class TooltipsMap1 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div id="mapbox_mineracao_tooltip">
        <div className='mapbox_map-overlay mapbox_mining_extra_height' id='mapbox_mining'>
          <h3>{hoveredFeature["properties"].NM_COMUNID}</h3>
          {hoveredFeature["properties"].FASE && (
            <p><strong>Etapa da titulação: </strong>{hoveredFeature["properties"].FASE}</p>
          )}
          {hoveredFeature["properties"].ESFERA && (
            <p>
              <strong>Esfera: </strong>{hoveredFeature["properties"].ESFERA}&nbsp;
              {hoveredFeature["properties"].RESPONSAVE && (
                <span>
                  ({hoveredFeature["properties"].RESPONSAVE})
                </span>
              )}
            </p>
          )}
          {hoveredFeature["properties"].ESFERA && (
            <p><strong>População: </strong>{hoveredFeature["properties"].NR_FAMILIA} famílias</p>
          )}  
          <p><strong>Área desmatada: </strong>{hoveredFeature["properties"].N_PORDESQU.toFixed(2).replace(".", ",")}% ({hoveredFeature["properties"].N_PORDESBU.toFixed(2).replace(".", ",")}% do entorno)</p>
          <p><strong>Área de mineração: </strong> {hoveredFeature["properties"].N_PORCINTM.toFixed(2).replace(".", ",")}% ('{hoveredFeature["properties"].N_PMININTB.toFixed(2).replace(".", ",")}% do entorno)</p>
        </div>  
      </div>
    );
  }
}