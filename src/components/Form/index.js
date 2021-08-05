import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import {schema} from './Schema'

import { Button, Container, Form, Input, Label, Title } from './styles';

function Former() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const newUser = (user) => console.log(user);
    return (
       <Form  onSubmit={handleSubmit(newUser)}>
            <Title>Formulário de Cadastro</Title>
            <Container>
                <Label>Nome</Label>
                <Input  type='text' {...register("name")}/>
                <p>{errors.name?.message}</p>
            </Container>
            <Container>
                <Label>Sobrenome</Label>
                <Input  type='text' {...register("lastname")}/>
                <p>{errors.lastname?.message}</p>
            </Container>
            <Container>
                <Label>E-mail</Label>
                <Input  type='email' {...register("email")}/>
                <p>{errors.email?.message}</p>
            </Container>
            <Container>
                <Label>Senha</Label>
                <Input  type='password' {...register("password")}/>
                <p>{errors.password?.message}</p>
            </Container>
            <Container>
                <Label>Confirmar Senha</Label>
                <Input  type='password' {...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>
            </Container>
            <Button type='submit'>Enviar</Button>
        </Form>

    );
}

export default Former;