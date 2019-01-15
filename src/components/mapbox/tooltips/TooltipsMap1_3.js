import React, {PureComponent} from 'react';
import { FormattedMessage } from "react-intl";

export default class TooltipsMap1_3 extends PureComponent {

  render() {
    const {hoveredFeature,x,y} = this.props;
    return (
      <div id="mapbox_mineracao_tooltip">
        <div class='mapbox_map-overlay' id='mapbox_mining'>
          <h3>
            <FormattedMessage id="legend1.title3" defaultMessage="Conservation units">
              {(txt) => (txt)}
            </FormattedMessage>
          </h3>
          <p><strong>Nome: </strong>{hoveredFeature["properties"].NOME_UC1}</p>
          <p><strong>Esfera: </strong>{hoveredFeature["properties"].ESFERA5} ({hoveredFeature["properties"].NOME_ORG12})</p>
          <p><strong>Ano de criação: </strong>{hoveredFeature["properties"].ANO_CRIA6}</p>
        </div>
    </div>
    );
  }
}