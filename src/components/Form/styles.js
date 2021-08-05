import styled from 'styled-components';

export const Form = styled.form`
    width: 480px;
    height: auto;
    padding: 30px;
    box-shadow: 1px 1px 2px 0px gray;
    border-radius: 4px;
`;

export const Title = styled.h1`
    text-align: center;
    color: orange;
    margin-bottom: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 5px;
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
`;

export const Button = styled.button`
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    background-color: orange;
    color: #fff;
    font-size: 1rem;
`