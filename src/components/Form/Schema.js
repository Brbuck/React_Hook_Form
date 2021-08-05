import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required('Campo Nome é obrigatório').min(3,'Minimo 3 caractéres'),
  lastname: yup.string().required('Campo Sobrenome é obrigatório').min(3,'Minimo 3 caractéres'),
  email: yup.string().email('Favor preencher com um email válido').required('Campo E-mail é obrigatório'),
  password: yup.string().required('Campo Senha é obrigatório').min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Favor confirmar a senha a cima')
});
