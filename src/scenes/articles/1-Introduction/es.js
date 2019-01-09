import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import EndChapter from "components/blocks/EndChapter";
import Table from "components/blocks/Table";

export default () => (
  <article>
    <Helmet>
      <title>Introducción | La Amazonía saqueada</title>
    </Helmet>
    <Container>
      <Note>
        <p>
          Estudio inédito apunta a la existencia de más de 2000 puntos y 200 áreas de minería ilegal en los ecosistemas  selváticos de seis países amazónicos.
        </p>
      </Note>
      <Paragraph>
        A pesar de décadas de lucha contra el extractivismo sin normas, la minería ilegal persiste, crece como un fuerte vector de destrucción y contaminación de la Amazonía. La avidez por minerales valiosos se asemeja a una epidemia pues se la encuentra por todas partes en esta selva tropical. Aunque la extracción minera siempre ha existido en esta región, su proliferación actual no se compara con ningún otro momento de la historia.
      </Paragraph>

      <Paragraph>
        Un estudio realizado por organizaciones de Bolivia, Brasil, Colombia, Ecuador, Perú y Venezuela confirma la existencia de, al menos, <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-62.798552,-7.736987],
            zoomNumber: 4,
            zoomMin: 3,
            zoomMax: 10
          }
        }}> 2312 puntos y 245 áreas de extracción no autorizada de minerales como oro, diamantes y coltán. Además, se identificaron 30 ríos</StoryMedia>
        donde se desarrolla la actividad minera o que sirven como ruta para la entrada de maquinarias e insumos o la salida de los minerales.
      </Paragraph>

      <Paragraph>
        La <ExternalLink href="https://www.amazoniasocioambiental.org" language="pt">Red Amazónica de Información Socioambiental Georreferenciada (RAISG))</ExternalLink>{" "}, creada en 2007, reúne a técnicos de seis países de la Amazonía. Ellos representan a ocho organizaciones de la sociedad civil que constantemente actualizan bases de datos sobre las principales amenazas a la región amazónica.
      </Paragraph>

      <Paragraph>
        En este estudio inédito, la red buscó ofrecer un panorama sobre la minería ilegal en todo el territorio amazónico, que se extiende por siete millones de kilómetros cuadrados. Sus miembros hicieron una compilación de información primaria de contrapartes, análisis de imágenes satelitales y noticias publicadas en la prensa de los seis países hasta el 2017.
      </Paragraph>

      <Paragraph>
        "La incidencia de la minería ilegal en la Amazonía, especialmente en los territorios indígenas y áreas naturales protegidas, ha crecido exponencialmente en los últimos años, con el alza del precio del oro. No obstante, esta es una de las presiones menos investigadas, por lo que RAISG decidió incluirla como uno de los temas que requiere seguimiento permanente, sobre todo por sus impactos socioambientales", afirma el secretario ejecutivo Beto Ricardo.
      </Paragraph>

      <Paragraph>
        La investigación dio origen a una herramienta en línea que permite navegar por todos los puntos y áreas de minería ilícita l. La <ExternalLink href="https://mineria.amazoniasocioambiental.org/" language="pt">plataforma digital contiene la información</ExternalLink>{" "} disponible para cada punto, área o río relacionado con la presencia de minería, e incluye su estatus actual (activo o inactivo) y su impacto en áreas naturales protegidas y territorios indígenas.
      </Paragraph>

      <Paragraph>
        De todos los puntos mapeados, la mayoría se encuentra en Venezuela, seguido por Brasil, Ecuador y Perú. En Colombia y Bolivia la unidad de análisis correspondió a los ríos, razón por la cual la información no aparece cuantificada como puntos. Entre las 245 áreas de extracción, tres se encuentran en Bolivia, <StoryMedia
        icon="map"
        media={{
        id: "map_02a",
        type: "mapbox",
        data: {
          map: "map1",
          legend:"legend1",
          update:"map1_2",
          showExtraLayers: ['Para-MASCARA_div-politica-departamental'],
          coordinates: [-56.604340,-6.120435],
          zoomNumber: 6.29,
          zoomMin: 5,
          zoomMax: 22
        }
        }}>132 están en Brasil, principalmente en la región del río Tapajós</StoryMedia>, y 110 en Perú, en Madre de Dios. Este departamento peruano es considerado como el sector de la Amazonia con la mayor degradación causada por  la extracción de oro.
      </Paragraph>
      <Quote author="Camilo Guio, vice-diretor da Gaia Amazonas">
        Estas actividades se realizan principalmente a través de balsas y de dragas, que no sólo tienen efectos ambientales sobre el lecho de los ríos, sino también la mala utilización del mercurio.
      </Quote>

      <Paragraph>
        El vice-diretor da Gaia Amazonas, Camilo Guio, alerta que "estas actividades extractivas ilegales se caracterizan por su forma antitécnica e insostenible. Se <StoryMedia
        icon="map"
        media={{
        id: "map_02b",
        type: "mapbox",
        data: {
          map: "map1",
          legend:"legend1",
          update:"map1_3",
          showExtraLayers: ['COLOMBIA-MASCARA_div-politica-pais'],
          coordinates: [-72.254582,0.547990],
          zoomNumber: 5.50,
          zoomMin: 3,
          zoomMax: 22
        }
        }}>realizan principalmente a través de balsas y de dragas, que no sólo tienen efectos ambientales sobre el lecho de los ríos</StoryMedia>, sino también por la mala utilización del mercurio. Esto está generando daños a la salud de las poblaciones locales, especialmente a los pueblos indígenas”
      </Paragraph>

      <Paragraph>
        Los datos recogidos por la RAISG, sin embargo, constituyen una primera aproximación a la situación, que refleja un problema de una magnitud desconocida y cuya visión representa sólo una parte de lo que realmente está sucediendo. Los casos reportados provienen de informes de comunidades ribereñas e indígenas, del relevamiento de noticias y del análisis de imágenes satelitales.
      </Paragraph>

      <Table>
        <table style={{'width':'100%'}}>
          <tbody>
          <tr>
            <th>Minería ilegal por país:</th>
            <th>puntos</th>
            <th>áreas</th>
          </tr>
          <tr>
            <td>Bolivia</td>
            <td></td>
            <td style={{'text-align':'right'}}>3</td>
          </tr>
          <tr>
            <td>Brasil</td>
            <td>321</td>
            <td style={{'text-align':'right'}}>132</td>
          </tr>
          <tr>
            <td>Ecuador</td>
            <td>68</td>
            <td style={{'text-align':'right'}}></td>
          </tr>
          <tr>
            <td>Perú</td>
            <td>24</td>
            <td style={{'text-align':'right'}}>110</td>
          </tr>
          <tr>
            <td>Venezuela</td>
            <td>1899</td>
            <td style={{'text-align':'right'}}></td>
          </tr>
          <tr>
            <td>Total</td>
            <td>2312</td>
            <td style={{'text-align':'right'}}>245</td>
          </tr>
          </tbody>
        </table>
      </Table>

      <Paragraph>
        Estas <StoryMedia
        icon="map"
        media={{
        id: "map_02c",
        type: "mapbox",
        data: {
          map: "map1",
          legend:"legend1",
          update:"map1_4",
          showExtraLayers: ['BOLIVIA-MASCARA_div-politica-pais'],
          coordinates: [-65.224,-15.384330],
          zoomNumber: 5.40,
          zoomMin: 5,
          zoomMax: 22
        },
        }}>fuentes de información se manejaron con diferentes niveles de profundidad</StoryMedia> y, por otro lado, la velocidad en el crecimiento de la minería también ha presentado variaciones en la región, por lo que aquellas afectaciones que actualmente se consideran como puntos, muy pronto pueden pasar a ser áreas de explotación. De esta manera, los números pueden cambiar, pero lo cierto es que la superficie de afectación va en aumento. Esta parece ser la situación en Venezuela, donde los reportes cambian drásticamente de año a año.
      </Paragraph>
      <Paragraph>
      Uno de los inconvenientes de la metodología seguida para levantar la información es que puede no captar<StoryMedia
              media={{
                id: "galery-2",
                type: "gallery",
                data: {
                  items: [
                    {
                      src: require("photos/chapter1/gallery-1/01_AlbertoBlanco_BrisasDelCuyuni13A.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: false,
                    },
                    {
                      src: require("photos/chapter1/gallery-1/02_AlbertoBlanco_BrisasDelCuyuni14A.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: true,
                    },
                    {
                      src: require("photos/chapter1/gallery-1/03_AlbertoBlanco_BrisasDelCuyuni8.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: false,
                    },
                    {
                      src: require("photos/chapter1/gallery-1/04_AlbertoBlanco_BrisasDelCuyuni6A.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: true,
                    },
                    {
                      src: require("photos/chapter1/gallery-1/05_AlbertoBlanco_BrisasDelCuyuni3.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: false,
                    },
                    {
                      src: require("photos/chapter1/gallery-1/06_AlbertoBlanco_BrisasDelCuyuni4.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: true,
                    },
                    {
                      src: require("photos/chapter1/gallery-1/07_AlbertoBlanco_BrisasDelCuyuni6A.jpg"),
                      credits: "Alberto Blanco",
                      isVertical: true,
                    }
                  ]
                }
              }}
            > la minería de pequeña escala que llega a los lugares más remotos de la Amazonía</StoryMedia>, y que pone en riesgo fragmentos de bosque considerados entre los mejor conservados  y provoca el desplazamiento de comunidades indígenas en situación de aislamiento voluntario. 
      </Paragraph>

      <Paragraph>
        Del mismo modo, probablemente tampoco logra identificar todos los cursos de agua que actualmente están siendo afectados por el uso de dragas, en especial cuando no se cuenta con comunidades indígenas que puedan facilitar esa información. Además de la actividad en zonas remotas, <StoryMedia
        icon="map"
        media={{
        id: "map_01b",
        type: "mapbox",
        data: {
          map: "map1",
          legend:"legend2",
          update:"map1_5",
          showExtraLayers: ['LEGENDA4_MineracaoLegalZ4'],
          coordinates: [-62.798552,-7.736987],
          zoomNumber: 4.00,
          zoomMin: 4,
          zoomMax: 10
        },
        }}>existe una superposición entre minería legal e ilegal que contribuye a hacer aún más confusa la situación y,
        </StoryMedia> por tanto,  hace imposible dimensionar en su totalidad el problema.
      </Paragraph>
      
      <Paragraph>
        Por eso, el mapa / plataforma de minería ilegal de la RAISG está en construcción y los datos van a ser actualizados regularmente, luego de ser  revisados y revalidados.
      </Paragraph>
      
      <EndChapter>
        <strong>Trabalhadores do Ouro</strong>
        <p className="smaller-txt pull-left">De acuerdo con el informe{" "}<FileLink
          href={require("documents/chapter1/La-realidad-de-la-mineria-ilegal-en-paises-amazonicos-SPDA.pdf")}
          format="pdf"
          size="6.7MB"
        >“La realidad de minería ilegal en países amazónicos" elaborado por la Sociedad Peruana de Derecho Ambiental (SPDA, 2014)</FileLink>, <i>cerca de 600.000 personas se dedican a la explotación ilegal del oro. </i></p> 
        <p className="smaller-txt pull-left"><i>Con el aumento sostenido en el precio del oro y las evidencias de mayor cantidad de puntos y áreas de minería en la región, en los últimos cinco años este número debe haber aumentado considerablemente. </i></p>
        <div>Precio en la alturas</div>
        Promedio anual del valor del oro (US$)<br/>
        <div className="image-wrapper">
          <iframe id="datawrapper-chart-AMEaF" src="//datawrapper.dwcdn.net/AMEaF/1/" scrolling="no" frameborder="0" allowtransparency="true" style={{'width': '', 'minWidth': '70%', 'padding-bottom':'10px'}} height="400"></iframe>
          <p className="pull-right graph-description"><i>
            La amplia presencia de oro aluvial en América del Sur hace de la minería un sector esencial en la economía de la región. El alto precio del oro hizo viable la extracción en áreas que antes no eran lucrativas.
          </i></p>
        </div>
      </EndChapter>
     
    </Container>
  </article>
);
