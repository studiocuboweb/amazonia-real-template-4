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
      <title>Introdução | Amazônia saqueada</title>
    </Helmet>
    <Container>
      <Note>
        <p>
          Levantamento inédito aponta a existência de mais de 2000 pontos e 200 áreas de mineração ilegal nos ecossistemas florestais de seis países amazônicos.
        </p>
      </Note>
      <Paragraph>
        Apesar de décadas de luta contra o extrativismo não-regulado, a mineração ilegal persiste, crescendo como um forte vetor de destruição e contaminação da Amazônia. A ânsia por minerais valiosos assemelha-se a uma epidemia, pois está em toda parte da selva tropical. Embora os garimpos sempre tenham sido uma atividade na região, a proliferação não é comparável a qualquer outro momento da história.
      </Paragraph>

      <Paragraph>
        Um levantamento feito por organizações da Bolívia, Brasil, Colômbia, Equador, Peru e Venezuela confirma a existência de pelo menos <StoryMedia
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
        }}> 2312 pontos e 245 áreas de garimpo ou extração de minerais, como ouro, diamantes e coltan. Além disso, foram mapeados 30 rios</StoryMedia>
        afetados pela mineração ou rotas para a entrada de máquinas, insumos e a saída de minerais.
      </Paragraph>

      <Paragraph>
        A <ExternalLink href="https://www.amazoniasocioambiental.org" language="pt">Rede Amazônica de Informação Socioambiental Georeferenciada (RAISG)</ExternalLink>{" "}, criada em 2007, reúne técnicos de seis países da Amazônia. Eles representam oito organizações da sociedade civil que atualizam constantemente bancos de dados sobre as principais ameaças à região amazônica.
      </Paragraph>

      <Paragraph>
        Nesta pesquisa inédita, a rede procurou dar uma visão geral da mineração ilegal em todo o território amazônico, que abrange sete milhões de quilômetros quadrados. Seus membros compilaram informações primárias de aliados, análise de imagens de satélite e notícias publicadas na imprensa dos seis países até 2017.
      </Paragraph>

      <Paragraph>
        "A incidência de mineração ilegal na Amazônia, especialmente em territórios indígenas e áreas naturais protegidas tem crescido exponencialmente nos últimos anos com o aumento do preço do ouro. No entanto, é uma das pressões menos pesquisada. Por isso, a RAISG decidiu incluí-la como uma das questões que necessitam de monitoramento contínuo, especialmente por seus impactos sociais e ambientais ", diz o secretário-executivo Beto Ricardo.
      </Paragraph>

      <Paragraph>
        O mapeamento deu origem a uma ferramenta on-line que permite navegar por todos os pontos e áreas de   mineração ilegal. A <ExternalLink href="https://mineria.amazoniasocioambiental.org/" language="pt">plataforma digital contém as informações disponíveis</ExternalLink>{" "} para cada um dos pontos, áreas ou rios relacionados à presença de mineração, que inclui seu status atual (ativo ou inativo) e seu impacto em áreas naturais protegidas e territórios indígenas.
      </Paragraph>

      <Paragraph>
        De todos os pontos mapeados, a maioria está na Venezuela, depois no Brasil, Equador e Peru. Na Colômbia e Bolívia, as unidades de análise foram os rios, razão pela qual não aparecem quantificados como pontos. Entre as 245 áreas de extração, três estão na Bolívia, <StoryMedia
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
        }}>132 no Brasil, principalmente na região do rio Tapajós</StoryMedia>, e 110 no Peru, em Madre de Dios. Este departamento peruano é considerado o setor da Amazônia com a mais pronunciada degradação causada por garimpos de ouro.
      </Paragraph>
      

      <Quote author="Camilo Guio, vice-diretor da Gaia Amazonas">
        Essas atividades são feitas principalmente através de balsas e dragas, que não só têm efeitos ambientais no leito do rio, mas também o mau uso do mercúrio
      </Quote>

      <Paragraph>
        O vice-diretor da Gaia Amazonas, Camilo Guio, alerta que “essas atividades extrativas ilegais caracterizam-se por sua forma anti-técnica e insustentável. São <StoryMedia
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
        }}> feitas principalmente através de balsas e dragas, que não só têm efeitos ambientais no leito do rio</StoryMedia>, mas também o mau uso do mercúrio. Isso está causando danos à saúde das populações locais, especialmente dos povos indígenas".
      </Paragraph>

      <Paragraph>
        Os dados coletados pela RAISG, no entanto, são uma primeira aproximação à situação, que reflete um problema de magnitude desconhecida e cuja visão representa apenas uma parte do que realmente está acontecendo. Os casos relatados vêm de notificações de comunidades ribeirinhas e indígenas, da coleta de notícias e análise de imagens de satélite.
      </Paragraph>

      <Table>
        <table style={{'width':'100%'}}>
          <tbody>
          <tr>
            <th>Garimpos por país:</th>
            <th>pontos</th>
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
            <td>Equador</td>
            <td>68</td>
            <td style={{'text-align':'right'}}></td>
          </tr>
          <tr>
            <td>Peru</td>
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
        }}>fontes de informação foram tratadas com diferentes níveis de profundidade</StoryMedia> e, por outro lado, a velocidade de crescimento da mineração também foi diferente na região, de modo que as afetações, que são atualmente consideradas como pontos, podem muito em breve tornar-se áreas de exploração. Desta forma, os números podem mudar, mas a verdade é que a área de afetação, está aumentando. Na Venezuela, esta parece ser a situação, já que os relatórios mudam drasticamente a cada ano.
      </Paragraph>

      <Paragraph>
        Uma das desvantagens da metodologia seguida para levantar a informação é que ela pode não captar <StoryMedia
              media={{
                id: "gallery-1",
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
            > mineração de pequena escala que atinge as partes mais remotas da Amazônia</StoryMedia>. Esta variedade põe em risco fragmentos de floresta considerados entre os mais bem conservados, bem como o deslocamento de comunidades indígenas em situação de isolamento voluntário.
      </Paragraph>

      <Paragraph>
        Da mesma forma, provavelmente não é possível identificar todos os cursos de água atualmente afetados pelo uso de balsas, especialmente quando não há comunidades indígenas que possam fornecer essas informações. Além da atividade em áreas remotas, há uma <StoryMedia
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
        }}>sobreposição entre mineração legal e ilegal que contribui para tornar a situação ainda mais confusa</StoryMedia> e, portanto, torna impossível dimensionar o problema em sua totalidade.
      </Paragraph>
      
      <Paragraph>
        Por isso, o mapa/plataforma de mineração ilegal da RAISG está em construção, os dados serão sempre atualizados, revisados e revalidados.
      </Paragraph>
      
      <EndChapter>
        <strong>Trabalhadores do Ouro</strong>
        <p className="smaller-txt pull-left">Segundo o{" "}<FileLink
          href={require("documents/chapter1/La-realidad-de-la-mineria-ilegal-en-paises-amazonicos-SPDA.pdf")}
          format="pdf"
          size="6.7MB"
        >relatório "A realidade da mineração ilegal em países amazônicos"</FileLink>{" "}, <i>elaborado pela Sociedade Peruana de Direito Ambiental (SPDA, 2014), cerca de 600 mil pessoas estariam naquele momento envolvidas na exploração ilegal do ouro.</i></p> 
        <p className="smaller-txt pull-left"><i>O aumento sustentado do preço do ouro e a evidência de mais pontos e áreas de mineração na região, indicam que nos últimos cinco anos esse número deve ter aumentado consideravelmente. </i></p>
        <div>Preço nas alturas</div>
        Média anual do valor do ouro (em US$)<br/>
        <div className="image-wrapper">
          <iframe id="datawrapper-chart-AMEaF" src="//datawrapper.dwcdn.net/AMEaF/1/" scrolling="no" frameborder="0" allowtransparency="true" style={{'width': '', 'minWidth': '70%', 'padding-bottom':'10px'}} height="400"></iframe>
          <p className="pull-right graph-description"><i>
            A presença de ouro aluvial na América do Sul torna a mineração um setor essencial na economia da região. O alto preço do ouro tornou a extração viável em áreas que antes não eram lucrativas.
          </i></p>
        </div>
      </EndChapter>
     
    </Container>
  </article>
);
