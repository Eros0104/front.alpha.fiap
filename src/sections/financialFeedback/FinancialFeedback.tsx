import React, { ChangeEvent, useState } from 'react';
import { BasicSectionTemplate } from 'src/templates';
import {
  Grid,
  Typography,
  Image,
  Divider,
  Slider,
  Spacer,
} from 'src/components';
import FinanceImage from 'public/images/finance.svg';

const FinancialFeedback: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSlider = (event: ChangeEvent<{}>, value: number | number[]) => {
    const newValue = Array.isArray(value) ? 1 : value;
    setQuantity(newValue);
  };
  return (
    <BasicSectionTemplate title="Potencial de Retorno Financeiro">
      <Spacer margin="50px 0">
        <Grid container>
          <Grid xs={12} md={6} item>
            <Image src={FinanceImage} alt="" />
          </Grid>
          <Grid xs={12} md={6} item>
            <Grid container>
              <Grid item xs={12}>
                <Slider
                  aria-label="Temperature"
                  defaultValue={1}
                  valueLabelDisplay="auto"
                  onChange={handleSlider}
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
                <Spacer margin="30px 0">
                  <Typography variant="h4" align="center">
                    {quantity}x Biodigestor(es) de{' '}
                    <Typography variant="h4" component="span" color="primary">
                      2.000 L
                    </Typography>
                  </Typography>
                  <Typography variant="h6" align="center">
                    Quantidade de resíduos orgânicos diária:{' '}
                    {(quantity * 142.9).toFixed(2)} kg
                  </Typography>
                </Spacer>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography variant="h6" align="center">
                      Energia Elétrica
                    </Typography>
                    <Typography variant="h6" align="center">
                      Produção estimada de {(quantity * 1026.67).toFixed(2)}{' '}
                      kWh/mê<s></s>
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6" align="center">
                      e
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography>Biofertilizante</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Spacer>
    </BasicSectionTemplate>
  );
};

export default FinancialFeedback;
