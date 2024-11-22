import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { registerUser } from "../../api/authApi";
import { FormInput, VerticalForm } from "../../components/form";
import AuthLayout from "./AuthLayout";

type UserData = {
  exampleName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const schemaResolver = yupResolver(
    yup.object().shape({
      exampleName: yup
        .string()
        .required("Por favor, insira o nome da empresa."),
      email: yup
        .string()
        .required("Por favor, insira um email.")
        .email("Por favor, insira um email válido."),
      password: yup.string().required("Por favor, insira a senha."),
    })
  );

  const onSubmit = async (formData: UserData) => {
    try {
      const response = await registerUser(formData);
      console.log("Usuário registrado com sucesso:", response.message);
    } catch (error: unknown) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <AuthLayout
      hasSlider
      bottomLinks={
        <p className="text-muted">
          Já tem uma conta?
          <Link to="/auth/login" className="text-primary fw-semibold ms-1">
            Faça login
          </Link>
        </p>
      }
    >
      <h6 className="h5 mb-0 mt-3">Crie sua conta</h6>
      <p className="text-muted mt-1 mb-4">
        Não tem uma conta? Crie sua conta agora, é rápido e fácil.
      </p>

      <VerticalForm<UserData>
        onSubmit={onSubmit}
        resolver={schemaResolver}
        defaultValues={{}}
      >
        <FormInput
          type="text"
          name="exampleName"
          label="Nome da Empresa"
          placeholder="Insira o nome da empresa"
          containerClass="mb-3"
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          placeholder="Insira seu email"
          containerClass="mb-3"
        />
        <FormInput
          label="Senha"
          type="password"
          name="password"
          placeholder="Insira sua senha"
          containerClass="mb-3"
        />
        <div className="mb-0 text-center d-grid">
          <Button type="submit">Registrar</Button>
        </div>
      </VerticalForm>
    </AuthLayout>
  );
};

export default SignUp;
