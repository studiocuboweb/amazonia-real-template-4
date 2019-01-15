import React, {PureComponent} from 'react';

export default class TooltipsMap1 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div class=".mapboxgl-map mapboxgl-popup mapboxgl-popup-anchor-bottom" style={{"transform": "translate(-50%, -100%) translate("+x+"px,"+y+"px)"}}>
        <div class="mapboxgl-popup-tip"></div>
        <div class="mapboxgl-popup-content">
          <h2>{hoveredFeature["properties"].NM_COMUNID}</h2>
          {hoveredFeature["properties"].FASE && (
            <p><strong>Etapa da titulação: </strong>{hoveredFeature["properties"].FASE}</p>
          )}
          {hoveredFeature["properties"].ESFERA && (
            <p>
              <strong>Esfera: </strong>{hoveredFeature["properties"].ESFERA}
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