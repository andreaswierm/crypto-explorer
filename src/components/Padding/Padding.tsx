import { isNumber } from "lodash";
import styled, { css } from "styled-components";

type PaddingProps = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  vertical?: number;
  horizontal?: number;
};

export const Padding = styled.div<PaddingProps>`
  ${({
    top,
    bottom,
    left,
    right,
    vertical,
    horizontal,
  }) => css`
  ${isNumber(top) && `padding-top: ${top}px;`}
  ${isNumber(bottom) && `padding-bottom: ${bottom}px;`}
  ${isNumber(left) && `padding-left: ${left}px;`}
  ${isNumber(right) && `padding-right: ${right}px;`}

  ${isNumber(vertical) && `
    padding-top: ${vertical}px;
    padding-bottom: ${vertical}px;
  `}

  ${isNumber(horizontal) && `
    padding-left: ${horizontal}px;
    padding-right: ${horizontal}px;
  `}
  `}
`;
