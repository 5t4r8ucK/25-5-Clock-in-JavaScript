import styled from 'styled-components';
import * as variables from './variables.js';

export const StyledButton = styled.button`
  // Display and Box Model
  background: transparent;
  // background-blend-mode: overlay;
  box-shadow:
    5px 5px 10px 2px ${variables.colors.color.white.w_5} inset,
    -5px -5px 10px 2px ${variables.colors.color.black.b_5} inset,
    5px 5px 10px 0 ${variables.colors.color.black.b_2},
    -5px -5px 10px 0 ${variables.colors.color.white.w_2};
  border-radius: 10px;
  height: ${variables.sizes.column_width};
  // Typography
  font-family: ${variables.fonts.stack.sansSerif};
  font-size: ${variables.fonts.sizes.small};
  color: ${variables.colors.color.white.w_100};
  // Other
  cursor: pointer;
  transition: all 0.2s ease;
  grid-area: ${props => props.gridArea};

  &:hover {
  // Display and Box Model
  box-shadow:
    5px 5px 10px 2px ${variables.colors.color.black.b_5} inset,
    -5px -5px 10px 2px ${variables.colors.color.white.w_5} inset,
    5px 5px 10px 0 ${variables.colors.color.black.b_2},
    -5px -5px 10px 0 ${variables.colors.color.white.w_2};
  }

  &:active {
  // Display and Box Model
  box-shadow:
    5px 5px 10px 0 ${variables.colors.color.black.b_2} inset,
    -5px -5px 10px 0 ${variables.colors.color.white.w_2} inset;
  }
`;

export const SquareButton = styled(StyledButton)`
  // Display and Box Model
  align-self: center;
  width: ${variables.sizes.column_width};
`

export const IncrementButton = styled(SquareButton)`
  // Display and Box Model
  grid-area: increment;
  justify-self: left;
`

export const DecrementButton = styled(SquareButton)`
  // Display and Box Model
  grid-area: decrement;
  justify-self: right;
`

export default StyledButton;