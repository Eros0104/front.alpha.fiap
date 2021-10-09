import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image, Divider, Box } from 'src/components';
import EcoImage from 'public/images/eco.svg';
import Biodigestor2 from 'public/images/biodigestor2.jpg';
import CarbonCredit from 'public/images/carbon-credit.png';
import Safe from 'public/images/safe.svg';
import BiodigestorComponent from 'public/images/biodigestor-component.png';
import Component1 from 'public/images/component-1.png';
import Component2 from 'public/images/component-2.png';
import Component3 from 'public/images/component-3.png';
import Component4 from 'public/images/component-4.png';
import Component5 from 'public/images/component-5.png';

const OurSolution: React.FC = () => (
  <BasicSectionTemplate id="our-solution" title="Nossa Solução">
    <Grid container spacing={10}>
      <Grid xs={12} md={6} item>
        <Typography align="justify">
          O Biodigestor consiste em um reator anaeróbio no qual, na ausência de
          oxigênio, microorganismos realizam a decomposição de resíduos sólidos
          como dejetos animais ou restos alimentares, gerando como subprodutos o
          biogás e o biofertilizante. O biogás tem potencial para geração de
          calor, e dependendo da quantidade produzida, geração de energia
          elétrica, enquanto o biofertilizante possui características muito
          benéficas na aplicação no solo e vegetação, como adubo orgânico.
        </Typography>
      </Grid>
      <Grid xs={12} md={6} item>
        <Typography align="justify">
          Como todo reator, um biodigestor exige cuidados de implantação e
          operação, adequando-se a realidade. Assim, com a nossa solução, a
          implementação do biodigestor foi estudada pensando precisamente neste
          local, bem como a solução do hardware desenvolvido em cima. O
          Dimensionamento de Biodigestor tem como finalidade, portanto, projetar
          a melhor maneira de atender todas as necessidades dos clientes,
          oferecendo uma solução ambientalmente adequada de disposição de
          resíduos sólidos orgânicos.
        </Typography>
      </Grid>
    </Grid>
    <Box my={5}>
      <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
        Componentes do Projeto:
      </Typography>
      <Box mt={5}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <Image src={Biodigestor2} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography align="justify">
              Modelo 3D do sistema da nossa solução. Exibindo uma versão
              simplificada do fluxo de ação do processo de biodigestão.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={6} md={4}>
          <Image src={BiodigestorComponent} />
          <Typography align="justify">
            Responsável por realizar o processo de biodigestão da matéria
            orgânica, onde será gerado o gás metano.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Image src={Component1} />
          <Typography align="justify">
            Filtro de iodo, responsável por realizar limpeza do gás e retirar os
            odores presentes nele
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Image src={Component2} />
          <Typography align="justify">
            Dispositivo de segurança mecânica responsável em regular a pressão
            máxima no sistema.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Image src={Component3} />
          <Typography align="justify">
            Sensor responsável por verificar a pressão dentro do sistema
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Image src={Component4} />
          <Typography align="justify">
            Responsável pela liberação e fechamento do fluxo de gás no sistema
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Image src={Component5} />
          <Typography align="justify">
            Utilizada para gerar um curto-circuito controlado, que será
            responsável em ascender a chama
          </Typography>
        </Grid>
      </Grid>
    </Box>
    <Divider />
    <Box my={5}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={7}>
          <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
            Principais vantagens do nosso projeto:
          </Typography>
          <Box my={5}>
            <ul>
              <li>
                <Typography>
                  Controle e supervisão dos gases produzidos;
                </Typography>
              </li>
              <li>
                <Typography>
                  Geração de fertilizantes puramente ecológicos;
                </Typography>
              </li>
              <li>
                <Typography>
                  Infraestrutura preparada por profissionais;
                </Typography>
              </li>
              <li>
                <Typography>Geração de energia (com o uso do CH4);</Typography>
              </li>
              <li>
                <Typography>
                  Criação iminente de Créditos de Carbono;
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Image src={EcoImage} />
        </Grid>
      </Grid>
      <Box my={5}>
        <Divider />
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5}>
          <Image src={Safe} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
            Principais pontos de segurança do nosso projeto:
          </Typography>
          <Box my={5}>
            <ul>
              <li>
                <Typography>
                  Sistema de validação de chama utilizando um ignitor;
                </Typography>
              </li>
              <li>
                <Typography>
                  Dupla validação da pressão com válvula reguladora de pressão;
                </Typography>
              </li>
              <li>
                <Typography>
                  Possibilidade de acompanhar o funcionamento do sistema
                  eletrônico pelo controle remoto;
                </Typography>
              </li>
              <li>
                <Typography>
                  Sistema de emergência incluindo alarmes sonoros e visuais;
                </Typography>
              </li>
              <li>
                <Typography>
                  Em casos de falhas de segurança o software ira permanecer
                  travado, até que um técnico especializado restaure o sistema;
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Divider />
    <Box my={5}>
      <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
        Crédito de Caborno:
      </Typography>
      <Box pt={5}>
        <Grid container spacing={5}>
          <Grid xs={12} md={6} lg={7}>
            <Image src={CarbonCredit} />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Typography align="justify">
              Créditos de Carbono consiste em um certificado para uma pessoa ou
              empresa, que possui o controle suficiente para reduzir a emissão
              de gases que implicam diretamente no efeito estufa. Com o nosso
              projeto, será possível manter o controle do gás metano e do gás
              carbônico,{' '}
              <Typography element="span" color="primary">
                onde a cada 1 tonelada de gás não emitido, corresponde a 1
                Crédito de Carbono
              </Typography>
              , onde pode ser vendido para diversos países e fábricas poluentes,
              a fim de &quot;comprar&quot; a não emissão de gás. Isso é muito
              utilizado na Europa, também, será acrescido no PIB futuramente.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </BasicSectionTemplate>
);

export default OurSolution;
