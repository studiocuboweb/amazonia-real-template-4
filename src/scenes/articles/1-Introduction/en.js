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
      <title>Introduction | The Amazon Sacked</title>
    </Helmet>
    <Container>
      <Note>
        <p>
          New survey reveals the existence of more than 2000 points and 200 illegal mining areas in six Amazonian countries.
        </p>
      </Note>
      <Paragraph>
        Despite decades of combatting unregulated extraction, illegal mining persists and is expanding into a powerful driver of destruction and contamination of the Amazon. The craving for valuable minerals resembles an epidemic, since it occurs everywhere across the rainforest. Although mining has always been a regional activity, its current proliferation is not comparable to any other period of its history.
      </Paragraph>

      <Paragraph>
        A survey conducted by organizations in Bolivia, Brazil, Colombia, Ecuador, Peru and Venezuela confirms the existence of at least <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-56.607,-1.279],
            zoomNumber: 7.5,
            zoomMin: 3.5,
            zoomMax: 16.0
          }
        }}> 2312 sites and 245 areas of prospecting or extraction of minerals such as gold, diamonds and coltan. In addition, 30 rivers</StoryMedia>
        affected by mining or acting as routes for the entry of machinery and inputs and the outlet of the minerals were mapped.
      </Paragraph>

      <Paragraph>
        The <ExternalLink href="https://www.amazoniasocioambiental.org" language="pt">Amazon Georeferenced Socio-Environmental Information Network (RAISG)</ExternalLink>{" "}, created in 2007, brings together experts from six Amazon countries. They represent eight civil society organizations that permanently update databases detailing the main threats to the Amazon region.
      </Paragraph>

      <Paragraph>
        In this unique research, the network seeks to provide an overview of illegal mining throughout the whole Amazonian territory, which covers seven million square kilometres. Its members compiled primary information from partners, analysis of satellite images and news stories published in the six countries up to 2017.
      </Paragraph>

      <Paragraph>
        "The incidence of illegal mining in the Amazon, especially in indigenous territories and natural protected areas, has grown exponentially in recent years with the increase in the price of gold. However, it is one of the pressures least well known. For this reason, RAISG has decided to make it an issue for continuous monitoring, especially for its social and environmental impacts", says Executive Secretary Beto Ricardo.
      </Paragraph>

      <Paragraph>
        The mapping has resulted in an online tool that allows you to browse through all the illegal mining sites and areas. The <ExternalLink href="https://mineria.amazoniasocioambiental.org/" language="pt">digital platform contains the available information</ExternalLink>{" "} or each of the sites, areas, or rivers related to the presence of mining, including its current status (active or inactive) and its impact on natural protected areas and indigenous territories.
      </Paragraph>

      <Paragraph>
        Of all the sites mapped, the majority are in Venezuela, followed by Brazil, Ecuador and Peru. In Colombia and Bolivia, analysis was done by rivers, which is why it is not quantified by specific sites. Out of the 245 extraction areas, three are in Bolivia, <StoryMedia
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
        }}>132 in Brazil, mainly in the Tapajós River region</StoryMedia>, and 110 in Peru, in Madre de Dios. This Peruvian department is considered the area of the Amazon with the most pronounced degradation caused by gold prospecting.
      </Paragraph>

      <Quote author="Camilo Guio, deputy director of Gaia Amazonas">
        These activities are carried out mainly with barges and dredgers, which not only have environmental impacts on the river bed, but also involve the misuse of mercury
      </Quote>

      <Paragraph>
        The deputy director of Gaia Amazonas, Camilo Guio, warns that "these illegal extractive activities are characterized by their rudimentary and unsustainable nature. They are <StoryMedia
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
        }}> carried out mainly with barges and dredgers, which not only have environmental impacts on the river bed</StoryMedia>, but also involve the misuse of mercury. This is causing damage to the health of local populations, especially indigenous peoples".
      </Paragraph>

      <Paragraph>
        The data collected by RAISG, however, are a first approximation of the situation, reflecting a problem of unknown magnitude and whose picture represents only a part of what is really happening. The cases reported come from notifications from riverine and indigenous communities, from news gathering and satellite image analysis.
      </Paragraph>

      <Table>
        <table style={{'width':'100%'}}>
          <tbody>
          <tr>
            <th>Illegal mining per country:</th>
            <th>points</th>
            <th>areas</th>
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
        These <StoryMedia
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
        }}>sources of information were treated at differing levels of depth</StoryMedia> and, on the other hand, the rate of expansion of mining varies across the region, such that the places currently considered as single sites may very soon become areas of exploitation. In this way, the numbers may change, but it is clear that the total area is increasing. In Venezuela, this seems to be the situation, as reports change drastically every year.
      </Paragraph>

      <Paragraph>
        One of the drawbacks of the methodology used to gather the information is that it may not capture <StoryMedia
              media={{
                id: "galery-1",
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
            > small-scale mining that affects the most remote parts of the Amazon</StoryMedia> . This variety puts at risk forest fragments considered to be among the best preserved, as well as displacing indigenous communities in a state of voluntary isolation.
      </Paragraph>

      <Paragraph>
        Likewise, it is probably not possible to identify all watercourses where barges are currently in use, especially when there are no indigenous communities that can provide this information. In addition to activity in remote areas, there is an <StoryMedia
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
        }}>overlap between legal and illegal mining that contributes to making the situation even more confusing</StoryMedia> and thereby making it impossible to determine the overall scale of the problem.
      </Paragraph>
      
      <Paragraph>
        For this reason, as the RAISG illegal mining map and platform is further developed, data will be constantly updated, reviewed and revalidated.
      </Paragraph>
      <EndChapter>
        <strong>Gold Workers</strong>
        <p className="smaller-txt pull-left">According to the{" "}<FileLink
          href={require("documents/chapter1/La-realidad-de-la-mineria-ilegal-en-paises-amazonicos-SPDA.pdf")}
          format="pdf"
          size="6.7MB"
        >report "The reality of illegal mining in Amazonian countries"</FileLink>{" "}, <i>prepared by the Peruvian Society for Environmental Law (SPDA, 2014), about 600,000 people were involved at that time in the illegal exploitation of gold. </i></p> 
        <p className="smaller-txt pull-left"><i>The continued increase in the price of gold and the evidence of more mining sites and areas across the region suggest that over the last five years this number will have considerably increased.</i></p>
        <div>Sky High Prices</div>
        Average annual value of gold (in US$)<br/>
        <div className="image-wrapper">
          <iframe id="datawrapper-chart-AMEaF" src="//datawrapper.dwcdn.net/AMEaF/1/" scrolling="no" frameborder="0" allowtransparency="true" style={{'width': '', 'minWidth': '70%', 'padding-bottom':'10px'}} height="400"></iframe>
          <p className="pull-right graph-description"><i>
            The presence of alluvial gold in South America makes mining an essential sector in the region's economy. The high price of gold has made extraction viable in areas previously unprofitable.
          </i></p>
        </div>
      </EndChapter>
     
    </Container>
  </article>
);
