import styled from 'styled-components';


export const ContainerButton = styled.button`
    margin: ${({ $center }) => ($center ? '0 auto' : '0')};
    display: flex;
    align-items: center;
    gap: 10px;
    background: ${({ $border }) => ($border ? "none" : "var(--color-blue)")}; // ? bg none : bg-blue
    color: ${({ $border }) => ($border ? "var(--color-primary)" : "var(--color-white)")};
    border: solid var(--color-blue);
    border-width: 2px;
    font-size: 1rem;
    font-weight: ${({ $border }) => ($border ? "600" : "500")};
    /* padding: 7px 25px; */
    border-radius: 0.5rem;
    transition: all .3s ease-in-out;
    &:not(:disabled):hover{
        background: ${({ $border }) => ($border ? "var(--color-blue)" : "#3f4ca0")};
        color: ${({ $border }) => ($border && "var(--color-white)")};
    }
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
    @media (max-width: 1025px){
        font-size: 15px;
        /* padding: 10px 12px; */
    }
`
