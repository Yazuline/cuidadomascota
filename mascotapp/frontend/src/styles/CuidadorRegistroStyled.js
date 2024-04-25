import styled from "styled-components"

export const FieldForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media (max-width: 576px) {
        width: fit-content;
    }
`
export const LabelForm = styled.label`
    font-weight: 500;
    width: 300px;
    width: initial;
    color: #111928;
    & span {
        color: red;
    }
    @media (min-width: 950px) {
        width: ${({ $width }) => ($width ? $width : "400px")}
    }
`
export const InputForm = styled.input`
    border: 1.5px solid;
    border-color: ${({ error }) => (error ? "red" : " #c8ced5")};
    padding: 5px 10px;
    border-radius: 8px;
    height: 50px;
    appearance: none;
    
    @media (max-width: 768px) {
        width: ${({ $width }) => ($width ? $width : "initial")};
    }

    &::placeholder{
        font-weight: 300;
        font-size: 14px;
        line-height: center;
    }

    &[type="file"]{
        padding: 10px;
    }
    
`

export const SelectForm = styled.select`
    border: 1.5px solid;
    border-color: ${({ error }) => (error ? "red" : "#c8ced5")};
    padding: 5px 10px;
    border-radius: 8px;
    height: 50px;
    cursor: pointer;
    appearance: none;
    font-size: 16px;
`

export const TextAreaForm = styled.textarea`
    resize: none;
    border: 1.5px solid;
    border-radius:8px;
    padding: 5px 10px;
    font-size: 13px;
    border-color: ${({ error }) => (error ? "red" : "#c8ced5")};
`

export const MessageBox = styled.textarea`
    border: 1.5px solid #c8ced5;
    padding: 5px 10px;
    border-radius: 8px;
    appearance: none;
    width: 25rem;
    resize: none;
    &::placeholder{
        font-weight: 300;
        font-size: 14px;
        line-height: center;
    }

    @media screen and (width < 576px){
        width: 19rem;
    }
`

export const InputRadio = styled.input`
    border: 1.5px solid #c8ced5;
    margin-right: 1rem;
    margin-left: 2rem;
`

export const LabelClientForm = styled.label`
    font-weight: 500;    
    color: #111928;
    
    & span {
        color: red;
    }
`