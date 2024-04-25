import styled from "styled-components";

export const TextRed = styled.p`
    color: red;
    font-size: 14px;
    position: ${({ $block }) => ($block ? "block" : "absolute")};
    margin-top: ${({ $block }) => ($block ? "0" : "83px")};
`