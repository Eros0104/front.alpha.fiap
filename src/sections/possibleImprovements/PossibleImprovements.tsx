import React from 'react';
import { BasicSectionTemplate } from 'src/templates';
import { Grid, Typography, Image } from 'src/components';
import Topology from 'public/images/topology.png';
import { SectionProps } from '../section';

const PossibleImprovements: React.FC<SectionProps> = ({ title, id }) => (
  <BasicSectionTemplate id={id} title={title}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={7}>
        <Typography fontWeight={700} upperCase>
          Nosso projeto pode se aprimorar mais ainda! No momento, não enviamos
          informações do Biodigestor para a Internet através do IoT, mas temos
          uma ideia pronta e com uma topologia desenhada:
        </Typography>
        <Typography align="justify">
          São dois biodigestores instalados com monitoramento de pressão e
          emissão de gás para segurança do ambiente local, também foi incluso
          sensores de luminosidade e temperatura para envio online das
          informações através da conexão com a internet. Na solução temos duas
          placas ESP32 conectadas diretamente aos sensores e encaminhando dados
          para o Storage Gateway do ambiente da Cloud, essa comunicação passando
          por um firewall que tem como objetivo bloquear qualquer tipo de acesso
          externo para rede do Biodigestor. No firewall é somente liberado
          regras de saída para envios dos dados coletado do biodigestor para o
          storage na nuvem.
        </Typography>
        <Typography align="justify">
          O ambiente possui um ADSL para internet configurado conectado
          diretamente no roteador. O Roteador possui regras de liberação apenas
          aos MAC ADDRESS cadastrados, também foi habilitado acesso a rede
          apenas com criptografia AES 256 Enterprise, em seguida foi configurado
          para bloquear todas as portas com exceção a de comunicação de envio de
          dados para o Storage Gateway hospedado no ambiente Cloud.
        </Typography>
        <Typography align="justify">
          No Storage Gateways todos os dados são criptografados automaticamente
          e instantaneamente acessados pelo Web Server que possui certificado
          TLS1.3 e os dados são criptografados e descriptografados com uma chave
          secreta conhecida pelo remetente e pelo destinatário com comprimento
          de 256 bits o qual é fornecido por uma entidade certificadora de
          confiança e está instalado no servidor web para que seja liberado o
          acesso a página WEB apenas com HTTPS fornecida pelo Servidor DNS Cloud
          Front onde é configurado o domínio.
        </Typography>
        <Typography align="justify">
          Para maior segurança para os usuários fazerem o acesso a página WEB o
          ambiente da Cloud possui soluções de monitoria e controles que fazem
          telemetria de acessos aos dados e alterna automaticamente o
          endereçamento IP caso seja identificado ataques conhecidos como por
          exemplo DDOS.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Image src={Topology} />
      </Grid>
    </Grid>
  </BasicSectionTemplate>
);

export default PossibleImprovements;
