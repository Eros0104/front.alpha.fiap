import styled, { css } from 'styled-components';
import { ThemeColors, ThemeFontSizes } from 'src/types';

interface TypographyProps {
  color?: keyof ThemeColors;
  fontSize?: keyof ThemeFontSizes;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  fontWeight?: 100 | 300 | 400 | 500 | 700 | 600 | 900;
  lineHeight?: string | number;
  align?: 'center' | 'left' | 'right' | 'justify';
  upperCase?: boolean;
}

const Typography = styled('p').attrs<TypographyProps>(({ element }) => ({
  as: element,
}))<TypographyProps>`
  ${({
    color = 'darkFont',
    fontWeight = 400,
    lineHeight = 1.5,
    fontSize = 'md',
    align = 'left',
    upperCase = false,
  }) => css`
    font-size: ${({ theme }) => theme.fontSizes[fontSize]};
    color: ${({ theme }) => theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    text-align: ${align};
    ${upperCase && 'text-transform: uppercase;'}
  `}
`;

export default Typography;
