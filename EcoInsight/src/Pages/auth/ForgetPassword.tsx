import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { FormInput, VerticalForm } from "../../components/form";

import AuthLayout from "./AuthLayout";

type UserData = {
  email: string;
};

const ForgetPassword = () => {
  const resetPasswordSuccess = null;
  const error = null;
  const passwordReset = null;
  const forgotPassword = (data: { email: string }) => {
    console.log("Email enviado para:", data.email);
  };

  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup
        .string()
        .required("Por favor, insira seu email.")
        .email("Por favor, insira um email válido."),
    })
  );

  const onSubmit = (formData: UserData) => {
    forgotPassword({ email: formData.email });
  };

  return (
    <AuthLayout
      bottomLinks={
        <p className="text-muted">
          Voltar para
          <Link to="/auth/login" className="text-primary fw-semibold ms-1">
            Login
          </Link>
        </p>
      }
    >
      <h6 className="h5 mb-0 mt-3">Redefinir Senha</h6>
      <p className="text-muted mt-1 mb-4">
        Insira seu endereço de email e enviaremos um email com instruções para
        redefinir sua senha.
      </p>

      {error && !passwordReset && (
        <Alert variant="danger" className="mb-3">
          {error}
        </Alert>
      )}
      {resetPasswordSuccess && passwordReset && (
        <Alert variant="success" className="mb-3">
          {resetPasswordSuccess}
        </Alert>
      )}

      <VerticalForm<UserData>
        onSubmit={onSubmit}
        resolver={schemaResolver}
        defaultValues={{}}
      >
        <FormInput
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          containerClass="mb-3"
        />
        <div className="mb-0 text-center pt-3 d-grid">
          <Button type="submit">Enviar</Button>
        </div>
      </VerticalForm>
    </AuthLayout>
  );
};

export default ForgetPassword;
