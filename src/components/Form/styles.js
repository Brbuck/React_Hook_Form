import styled from 'styled-components';

export const Form = styled.form`
    width: 480px;
    height: auto;
    padding: 30px;
    box-shadow: 1px 1px 2px 1px gray;
    border-radius: 4px;
    margin: 50px auto;
`;

export const Title = styled.h1`
    text-align: center;
    color: #FFA500;
    margin-bottom: 15px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 5px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    color: gray;
  
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid gray;
    font-size: 1rem;
    border-radius: 4px;

`;

export const Button = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    background-color: #FFA500;
    color: #fff;
    font-size: 1rem;
    transition:  all ease 0.5s ;

    &:hover{
        background-color: #CD853F;
    }
`