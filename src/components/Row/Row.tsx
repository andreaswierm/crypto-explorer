import styled, { css } from "styled-components";

type RowProps = {
  justifyContent?: "center" | "space-between";
  alignItems?: "center";
}

export const Row = styled.div<RowProps>`
  ${({ alignItems, justifyContent }) => css`
    display: flex;
    width: 100%;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `}
`;
