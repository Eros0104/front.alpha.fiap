import React, { ChangeEvent, useState } from 'react';
import { BasicSectionTemplate } from 'src/templates';
import {
  Grid,
  Typography,
  Image,
  Divider,
  Slider,
  Spacer,
  Box,
} from 'src/components';
import FinanceImage from 'public/images/finance.svg';

const FinancialFeedback: React.FC = () => {
  const [quantity, setQuantity] = useState(1000);

  const handleSlider = (event: ChangeEvent<any>, value: number | number[]) => {
    const newValue = Array.isArray(value) ? 1000 : value;
    setQuantity(newValue);
  };
  return (
    <BasicSectionTemplate
      id="financial-feedback"
      title="Potencial de Retorno Financeiro"
    >
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
                  defaultValue={1000}
                  valueLabelDisplay="auto"
                  onChange={handleSlider}
                  step={1000}
                  marks
                  min={1000}
                  max={10000}
                />
                <Spacer margin="30px 0">
                  <Typography
                    element="h3"
                    fontSize="lg"
                    fontWeight={900}
                    align="center"
                  >
                    Biodigestor de{' '}
                    <Typography
                      element="span"
                      fontSize="lg"
                      fontWeight={600}
                      color="primary"
                    >
                      {quantity} L
                    </Typography>
                  </Typography>
                  <Typography element="h6" align="center">
                    Quantidade de resíduos orgânicos diária:{' '}
                    <Typography element="span" color="primary" fontWeight={600}>
                      {((quantity / 1000) * 28.6).toFixed(2)} kg
                    </Typography>
                  </Typography>
                </Spacer>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={5}>
                    <Box my={4}>
                      <Typography element="h6" fontWeight={600} align="center">
                        Energia Elétrica
                      </Typography>
                      <Typography element="h6" align="center">
                        Produção estimada de{' '}
                        <Typography
                          element="span"
                          color="primary"
                          fontWeight={600}
                        >
                          {((quantity / 1000) * 205.48).toFixed(2)} kWh/mês
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box my={4}>
                      <Typography element="p" fontSize="lg" align="center">
                        e
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box my={4}>
                      <Typography fontWeight={600} element="h6" align="center">
                        Biofertilizante
                      </Typography>
                      <Typography element="h6" align="center">
                        Produção estimada de{' '}
                        <Typography
                          element="p"
                          color="primary"
                          fontWeight={600}
                          align="center"
                        >
                          {quantity / 1000} m³/mês
                        </Typography>
                        <Typography element="p" align="center">
                          ou
                        </Typography>
                        <Typography
                          element="p"
                          color="primary"
                          fontWeight={600}
                          align="center"
                        >
                          {quantity} m³/mês
                        </Typography>
                      </Typography>
                    </Box>
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
