import { yupResolver } from "@hookform/resolvers/yup";
import FeatherIcon from "feather-icons-react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";

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
      exampleName: yup.string().required("Por favor, insira seu nome."),
      email: yup
        .string()
        .required("Por favor, insira seu email.")
        .email("Por favor, insira um email válido."),
      password: yup.string().required("Por favor, insira sua senha."),
    })
  );

  const onSubmit = (formData: UserData) => {
    console.log("Dados enviados:", {
      fullname: formData.exampleName,
      email: formData.email,
      password: formData.password,
    });
  };

  const user = null; // Substituir pela lógica real de usuário
  const error = "";

  return (
    <>
      {user && <Navigate to="/auth/confirm" replace />}
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

        {error && (
          <Alert variant="danger" className="mb-3">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{}}
        >
          <FormInput
            type="text"
            name="exampleName"
            label="Seu nome"
            placeholder="Insira seu nome"
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

        <div className="py-3 text-center">
          <span className="fs-13 fw-bold">OU</span>
        </div>
        <Row>
          <Col xs={12} className="text-center">
            <Link to="#" className="btn btn-white w-100">
              <FeatherIcon icon="github" className="icon icon-xs me-2" />
              Registrar com Github
            </Link>
          </Col>
        </Row>
      </AuthLayout>
    </>
  );
};

export default SignUp;
