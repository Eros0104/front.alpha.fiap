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
  const [quantity, setQuantity] = useState(1000);

  const handleSlider = (event: ChangeEvent<any>, value: number | number[]) => {
    const newValue = Array.isArray(value) ? 1000 : value;
    setQuantity(newValue);
  };
  return (
    <BasicSectionTemplate title="Investimento Necessário">
      <Spacer margin="50px 0">
        <Grid container>
          <Grid xs={12} md={6} item>
            <Grid container>
              <Grid item xs={12}>
                <Slider
                  aria-label="Temperature"
                  defaultValue={1}
                  valueLabelDisplay="auto"
                  onChange={handleSlider}
                  step={1000}
                  marks
                  min={1000}
                  max={10000}
                />
                <Spacer margin="30px 0">
                  <Typography variant="h4" align="center">
                    Biodigestor(es) de{' '}
                    <Typography variant="h4" component="span" color="primary">
                      {quantity} L
                    </Typography>
                  </Typography>
                  <Typography variant="h6" align="center">
                    Quantidade de resíduos orgânicos diária:{' '}
                    {((quantity / 1000) * 28.6).toFixed(2)} kg
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
                      Produção estimada de{' '}
                      {((quantity / 1000) * 205.48).toFixed(2)} kWh/mês
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
          <Grid xs={12} md={6} item>
            <Image src={FinanceImage} alt="" />
          </Grid>
        </Grid>
      </Spacer>
    </BasicSectionTemplate>
  );
};

export default FinancialFeedback;
