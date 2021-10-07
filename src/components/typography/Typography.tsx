import styled, { css } from 'styled-components';

interface TypographyProps {
  color?: any;
  fontSize?: any;
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
    color = 'text',
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
