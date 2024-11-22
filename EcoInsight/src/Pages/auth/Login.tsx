import { yupResolver } from "@hookform/resolvers/yup";
import FeatherIcon from "feather-icons-react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import * as yup from "yup";

import React from "react";
import { FormInput, VerticalForm } from "../../components/form";
import AuthLayout from "./AuthLayout";

type LocationState = {
  from: {
    pathname: string;
  };
};

type UserData = {
  email: string;
  password: string;
};

const Login = () => {
  /*
   * Validação do formulário usando yup
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup
        .string()
        .required("Por favor, insira o Email")
        .email("Por favor, insira um Email válido"),
      password: yup.string().required("Por favor, insira a Senha"),
    })
  );

  /*
   * Simulação de login - substitua com integração real ao backend
   */
  const fakeLogin = (credentials: UserData) => {
    // Simula autenticação - substitua com lógica real
    console.log("Credenciais enviadas:", credentials);
    // Retorne `true` como exemplo de sucesso
    return true;
  };

  const location = useLocation();
  let redirectUrl = "/";

  if (location.state) {
    const { from } = location.state as LocationState;
    redirectUrl = from ? from.pathname : "/";
  }

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const onSubmit = (formData: UserData) => {
    const isAuthenticated = fakeLogin(formData);
    setIsAuthenticated(isAuthenticated);

    if (isAuthenticated) {
      // Simula redirecionamento ao dashboard após login
      console.log("Login bem-sucedido! Redirecionando para:", redirectUrl);
    } else {
      console.error("Falha no login");
    }
  };

  return (
    <>
      {/* Exemplo de redirecionamento (substitua pela lógica real) */}
      {isAuthenticated && <Navigate to={redirectUrl} replace />}{" "}
      {/* Simula autenticação */}
      <AuthLayout
        hasSlider
        bottomLinks={
          <p className="text-muted">
            {"Ainda não tem uma conta?"}
            <Link to="/auth/signup" className="text-primary fw-semibold ms-1">
              {"Cadastre-se"}
            </Link>
          </p>
        }
      >
        <h6 className="h5 mb-0 mt-3">{"Bem-vindo de volta!"}</h6>
        <p className="text-muted mt-1 mb-4">
          {"Digite seu e-mail e senha para acessar sua conta."}
        </p>

        <Alert variant="danger" className="mb-3" style={{ display: "none" }}>
          {"Erro ao fazer login"}{" "}
          {/* Remova `display: none` para exibir erros */}
        </Alert>

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ email: "", password: "" }}
        >
          <FormInput
            type="email"
            name="email"
            label={"Email"}
            placeholder={"Digite seu email"}
            containerClass={"mb-3"}
          />

          <FormInput
            label={"Senha"}
            type="password"
            name="password"
            placeholder={"Digite sua senha"}
            action={
              <Link
                to="/auth/forget-password"
                className="float-end text-muted text-unline-dashed ms-1 fs-13"
              >
                {"Esqueceu sua senha?"}
              </Link>
            }
            containerClass={"mb-3"}
          />

          <FormInput
            type="checkbox"
            name="rememberMe"
            label={"Lembrar-me"}
            containerClass={"mb-3"}
            defaultChecked
          />

          <div className="mb-0 text-center d-grid">
            <Button type="submit">{"Entrar"}</Button>
          </div>
        </VerticalForm>

        <div className="py-3 text-center">
          <span className="fs-13 fw-bold">{"OU"}</span>
        </div>
        <Row>
          <Col xs={12} className="text-center">
            <Link to="#" className="btn btn-white w-100">
              <FeatherIcon icon="github" className="icon icon-xs me-2" />
              {"Entrar com Github"}
            </Link>
          </Col>
        </Row>
      </AuthLayout>
    </>
  );
};

export default Login;
