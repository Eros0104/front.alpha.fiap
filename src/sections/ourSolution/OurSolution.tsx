import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image, Divider, Box } from 'src/components';
import EcoImage from 'public/images/eco.png';
import Biodigestor from 'public/images/biodigestor.jpg';
import Biodigestor2 from 'public/images/biodigestor2.jpg';
import Biodigestor3 from 'public/images/biodigestor3.jpg';
import CarbonCredit from 'public/images/carbon-credit.png';

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
          operação, adequando-se a realidade. Assim, faz-se necessário um estudo
          do local, escolha da tecnologia apropriada e dimensionamento do
          sistema, de acordo com as características locais e finalidade
          prevista. O Dimensionamento de Biodigestor tem como finalidade,
          portanto, projetar a melhor maneira de atender todas as necessidades
          dos clientes, oferecendo uma solução ambientalmente adequada de
          disposição de resíduos sólidos orgânicos.
        </Typography>
      </Grid>
    </Grid>
    <Box my={5}>
      <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
        Componentes do Projeto:
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <Grid container>
            <Grid item xs={12}>
              <Image src={Biodigestor} />
            </Grid>
            <Grid item xs={12}>
              <Image src={Biodigestor3} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Image src={Biodigestor2} />
        </Grid>
      </Grid>
    </Box>
    <Divider />
    <Box my={5}>
      <Grid container>
        <Grid xs={12} sm={6} item>
          <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
            Principais vantagens do nosso projeto:
          </Typography>
          <ul>
            <li>
              <Typography>
                Controle e supervisão dos gases produzidos;
              </Typography>
            </li>
            <Typography>
              - Geração de fertilizantes puramente ecológicos;
            </Typography>
            <Typography>
              - Infraestrutura preparada por profissionais;
            </Typography>
            <Typography>- Geração de energia (com o uso do CH4);</Typography>
            <Typography>- Criação iminente de Cŕeditos de Carbono;</Typography>
          </ul>
          <Box my={3}>
            <Divider />
          </Box>
          <Typography upperCase element="h2" fontWeight={600} fontSize="lg">
            Principais pontos de segurança do nosso projeto:
          </Typography>
          <ul>
            <li>
              <Typography>
                Sistema de validação de chama utilizando um ignitor;
              </Typography>
            </li>
            <Typography>
              - Dupla validação da pressão com válvula reguladora de pressão;
            </Typography>
            <Typography>
              - Possibilidade de acompanhar o funcionamento do sistema
              eletrônico pelo controle remoto;
            </Typography>
            <Typography>
              - Sistema de emergência incluindo alarmes sonoros e visuais;
            </Typography>
            <Typography>
              -Em casos de falhas de segurança o software ira permanecer
              travado, até que um técnico especializado restaure o sistema
            </Typography>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src={EcoImage} />
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
              carbônico, onde a cada 1 tonelada de gás não emitido, corresponde
              a 1 Crédito de Carbono, onde pode ser vendido para diversos países
              e fábricas poluentes, a fim de &quot;comprar&quot; a não emissão
              de gás. Isso é muito utilizado na Europa, também, será acrescido
              no PIB futuramente.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </BasicSectionTemplate>
);

export default OurSolution;
