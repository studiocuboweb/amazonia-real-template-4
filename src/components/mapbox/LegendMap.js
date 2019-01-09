import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE1 from './styles/map1.json';
import MAP_STYLE2 from './styles/Map2.json';
import MAP_STYLE3 from './styles/Map3.json';
import "styles/mapbox.css";
import Legend1 from './legends/Legend1';


const styles = {
  map1: MAP_STYLE1,
  map2: MAP_STYLE2,
  map3: MAP_STYLE3,
};

//const categories = ['labels', 'roads', 'mineriailegal-pt-5owfra', 'parks', 'water', 'background'];

const categories = ['LEGENDA1 PONTOS_mineriailegal-pt-5owfra','LEGENDA2 RIOS_mineriailegal-ln-67gxaf','LEGENDA3 AREAS_mineriailegal-pl-6rfpha','Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA4- Yanomami_tis-afectadas','LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados','LEGENDATIs-afectadas','ETIQUETA_nombre-tis-afectadas','ETIQUETA_etnias-tis-afectadas'];

const notShowInLegend = {'map1':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA4- Yanomami_tis-afectadas','LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados','LEGENDATIs-afectadas'],
'map1_5':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4- Yanomami_tis-afectadas','LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados','LEGENDATIs-afectadas'],
'map2':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados','LEGENDATIs-afectadas'],
'map3':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA4- Yanomami_tis-afectadas','LEGENDATIs-afectadas'],
'map4':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA bosques-afectados','LEGENDA4- Yanomami_tis-afectadas'],
'map5':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA4- Yanomami_tis-afectadas','LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados'],
'map6':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4_MineracaoLegalZ4','LEGENDA bosques-afectados','ETIQUETA_nombre-tis-afectadas','ETIQUETA_etnias-tis-afectadas','LEGENDA4- Yanomami_tis-afectadas']
};

// Layer id patterns by category
const layerSelector = {
  'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': /LEGENDA1 PONTOS_mineriailegal-pt-5owfra/,
  'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': /LEGENDA2 RIOS_mineriailegal-ln-67gxaf/,
  'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': /LEGENDA3 AREAS_mineriailegal-pl-6rfpha/,
  'Para-MASCARA_div-politica-departamental': /Para-MASCARA_div-politica-departamental/,
  'COLOMBIA-MASCARA_div-politica-pais': /COLOMBIA-MASCARA_div-politica-pais/,
  'BOLIVIA-MASCARA_div-politica-pais': /BOLIVIA-MASCARA_div-politica-pais/,
  'LEGENDA4_MineracaoLegalZ4': /LEGENDA4_MineracaoLegalZ4/,
  'LEGENDA4- Yanomami_tis-afectadas': /LEGENDA4- Yanomami_tis-afectadas/,
  'LEGENDA ANPs-nacionales-afectadas': /LEGENDA ANPs-nacionales-afectadas/,
  'LEGENDA ANPS-departamentales-afectadas': /LEGENDA ANPS-departamentales-afectadas/,
  'LEGENDA bosques-afectados': /LEGENDA bosques-afectados/,
  'LEGENDATIs-afectadas': /LEGENDATIs-afectadas/,
  'ETIQUETA_nombre-tis-afectadas':/ETIQUETA_nombre-tis-afectadas/,
  'ETIQUETA_etnias-tis-afectadas':/ETIQUETA_etnias-tis-afectadas/
};

const subCategories = {
  'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': {
    'activo':'ico_circle-11_active2'
    ,'inactive':'ico_circle-11_inactive2'
    ,'s.i':'ico_circle-11_noinfo2'
    ,'activo (local. aproximada)':'ico_circle-stroked-11_active2'
    ,'inactivo (local. aproximada)':'ico_circle-stroked-11_inactive2'
    ,'s.i (local. aproximada)':'ico_circle-stroked-11_noinfo2'
  },
  'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': {
    'rios':'#b350f1'
  },
  'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': {
    'activo':'hsl(260, 100%, 73%)'
    ,'inactivo':'#492173'
    ,'s.i':'#733dd1'    
  },
  'LEGENDA4_MineracaoLegalZ4': {
    'em exploração':'#29dbc3'
    ,'solicitud':'#037587'
    ,'potencial':'#012f37'  
    ,'s.i':'#000000'    
  },
  'LEGENDA4- Yanomami_tis-afectadas': {
    'Yanomami': '#eb5905'
  },
  'LEGENDA ANPs-nacionales-afectadas': {
    'pressão: garimpo ativo dentro': 'hsla(165, 98%, 46%, 0.8)',
    'pressão: balsas dentro/no limite': 'hsla(165, 97%, 30%, 0.5)',
    'ameaça: garimpo inativo dentro': 'hsla(185, 79%, 24%, 0.5)',
    'ameaça: garimpo no limite entorno': 'hsla(187, 98%, 12%, 0.77)',
    'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.33)'
  },
  'LEGENDA ANPS-departamentales-afectadas': {
    'pressão: garimpo ativo dentro': 'hsla(165, 98%, 46%, 0.8)',
    'pressão: balsas dentro/no limite': 'hsla(165, 97%, 30%, 0.5)',
    'ameaça: garimpo inativo dentro': 'hsla(185, 79%, 24%, 0.5)',
    'ameaça: garimpo no limite entorno': 'hsla(187, 98%, 12%, 0.77)',
    'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.33)'
  },
  'LEGENDA bosques-afectados': {
    'pressão: garimpo ativo dentro': 'hsla(165, 98%, 46%, 0.8)',
    'pressão: balsas dentro/no limite': 'hsla(165, 97%, 30%, 0.5)',
    'ameaça: garimpo inativo dentro': 'hsla(185, 79%, 24%, 0.5)',
    'ameaça: garimpo no limite entorno': 'hsla(187, 98%, 12%, 0.77)',
    'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.33)'
  },
  'LEGENDATIs-afectadas': {
    'pressão: garimpo ativo dentro': '#f37859',
    'pressão: balsas dentro/no limite': 'hsla(17, 99%, 67%, 0.8)',
    'ameaça: garimpo inativo dentro': 'hsla(47, 98%, 59%, 0.8)',
    'ameaça: garimpo no limite entorno': 'hsla(52, 76%, 74%, 0.8)',
    'sem afetação direta conhecida': 'hsla(0, 0%, 0%, 0.41)'
  }
}

const layerLabels = {
  'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': 'pontos de mineração ilegal',
  'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': 'rios com mineração ilegal',
  'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': 'áreas de mineração ilegal',
  'LEGENDA4_MineracaoLegalZ4': 'áreas de mineração legal',
  'LEGENDA4- Yanomami_tis-afectadas': 'Terras Indígenas afetadas',
  'LEGENDA ANPs-nacionales-afectadas': 'Áreas protegidas (nacionais)',
  'LEGENDA ANPS-departamentales-afectadas': 'Áreas protegidas (depart.)',
  'LEGENDA bosques-afectados': 'Áreas protegidas (bosques)',
  'LEGENDATIs-afectadas': 'Terras Indígenas'
};

// Layer color class by type
const colorClass = {
  line: 'line-color',
  fill: 'fill-color',
  background: 'background-color',
  symbol: 'text-color'
};

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class StyleControls extends PureComponent {

  constructor(props) {
    super(props);
    this.defaultMapStyle = fromJS(styles[this.props.map]);
    this._defaultLayers = this.defaultMapStyle.get('layers');
    
    this.state = {
      displayLegendBG: {'backgroundColor':'none'}, 
      displayLegend: {'display':'none'},
      displayIcon: 'block',
      visibility: {
        'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': true,
        'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': true,
        'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': true,
        'Para-MASCARA_div-politica-departamental': false,
        'COLOMBIA-MASCARA_div-politica-pais': false,
        'BOLIVIA-MASCARA_div-politica-pais': false,
        'LEGENDA4_MineracaoLegalZ4': false,
        'LEGENDA4- Yanomami_tis-afectadas': false,
        'LEGENDA ANPs-nacionales-afectadas': false,
        'LEGENDA ANPS-departamentales-afectadas': false,
        'LEGENDA bosques-afectados': false,
        'LEGENDATIs-afectadas': false,
        'ETIQUETA_nombre-tis-afectadas':false,
        'ETIQUETA_etnias-tis-afectadas':false
      },
      color: {
        'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': '',
        'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': '',
        'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': '',
        'Para-MASCARA_div-politica-departamental': '',
        'COLOMBIA-MASCARA_div-politica-pais': '',
        'BOLIVIA-MASCARA_div-politica-pais': '',
        'LEGENDA4_MineracaoLegalZ4': '',
        'LEGENDA4- Yanomami_tis-afectadas':'',
        'LEGENDA ANPs-nacionales-afectadas': '',
        'LEGENDA ANPS-departamentales-afectadas': '',
        'LEGENDA bosques-afectados': '',
        'LEGENDATIs-afectadas':'',
        'ETIQUETA_nombre-tis-afectadas':'',
        'ETIQUETA_etnias-tis-afectadas':''
      }
    };
  }

  componentDidMount() {
    if (this.props.showExtraLayers.length > 0) {
      var visibility = '';
      if (this.props.map == 'map3') {
        visibility = {...this.state.visibility, ['LEGENDA ANPs-nacionales-afectadas']: true, ['LEGENDA ANPS-departamentales-afectadas']: true, ['LEGENDA bosques-afectados']: true};
      } else if (this.props.map == 'map4') {
        visibility = {...this.state.visibility, ['LEGENDA ANPs-nacionales-afectadas']: true, ['LEGENDA ANPS-departamentales-afectadas']: true, ['LEGENDATIs-afectadas']: true};
      } else if (this.props.map == 'map6') {
        visibility = {...this.state.visibility, ['LEGENDA ANPs-nacionales-afectadas']: true, ['LEGENDA ANPS-departamentales-afectadas']: true, ['LEGENDATIs-afectadas']: true, ['ETIQUETA_nombre-tis-afectadas']: true};
      } else if (this.props.map == 'map6_1') {
        visibility = {...this.state.visibility, ['LEGENDA ANPs-nacionales-afectadas']: true, ['LEGENDA ANPS-departamentales-afectadas']: true, ['LEGENDATIs-afectadas']: true, ['ETIQUETA_etnias-tis-afectadas']: true};
      } else {
        visibility = {...this.state.visibility, [this.props.showExtraLayers]: true};
      }
      this.setState({visibility})
      this._updateMapStyle({...this.state,visibility});
    } else { 
      this._updateMapStyle(this.state);
    }
  }

  _onColorChange(name, event) {
    const color = {...this.state.color, [name]: event.target.value};
    this.setState({color});
    this._updateMapStyle({...this.state, color});
  }

  _onVisibilityChange(name,target,parent_scope) {
    const visibility = {...parent_scope.state.visibility, [name]: target};
  
    parent_scope.setState({visibility});
    parent_scope._updateMapStyle({...parent_scope.state, visibility});
  }
  
  _updateMapStyle({visibility, color}) {
    const layers = this._defaultLayers
    .filter(layer => {
      const id = layer.get('id');
      return categories.every(name => visibility[name] || !layerSelector[name].test(id));
    })
    .map(layer => {
      const id = layer.get('id');
      const type = layer.get('type');
      const category = categories.find(name => layerSelector[name].test(id));
      if (category && colorClass[type] && color[category] !== '') {
        return layer.setIn(['paint', colorClass[type]], color[category]);
      }
      return layer;
    });
    this.props.onChange(this.defaultMapStyle.set('layers', layers));
  }

  _renderLayerControl() {
      const {visibility} = this.state;
      const LegendCollapse = Legend1;
      return (
          <div>
          <LegendCollapse
            visibility={visibility}
            onVisibilityChange={this._onVisibilityChange}
            legend={this.props.legend}
            parentScope={this}
          />
          </div>
      );
  }
  _toggleLegend() {
    if (this.state.displayLegend['display'] == 'none') {
      this.setState({displayLegend: {'display':'block'}})
      this.setState({displayLegendBG: {'backgroundColor':'#fff'}})
      this.setState({displayIcon:'none'})
    } else {
      this.setState({displayLegend: {'display':'none'}})
      this.setState({displayLegendBG: {'backgroundColor':'transparent'}})
      this.setState({displayIcon:'block'});
    }
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <div style={this.state.displayLegendBG} className='control-panel-padding'>
          <button className='fa fa-map mapbox_legend-ico mapbox_legend-block mapbox_legend-button' style={{'cursor':'pointer',color:'#C0C0C0',float:'right',display: this.state.displayIcon}} onClick={this._toggleLegend.bind(this)}></button>
          <div style={this.state.displayLegend}>
            <div className='mapbox_legend-align-center' style={{'height':'10px'}}>
              <a href='#' className='fa fa-window-close mapbox_legend-btn-close'  style={{'cursor':'pointer',color:'#C0C0C0', 'font-size':'.8em', 'vertical-align':'top'}} onClick={this._toggleLegend.bind(this)}></a>
            </div>
            <hr />
            { 
              // categories.map((name) => this._renderLayerControl(name,this)) 
              this._renderLayerControl(name,this)
            }
          </div>
        </div>
      </Container>
    );
  }
}