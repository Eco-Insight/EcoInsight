import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { requestPasswordReset } from "../../api/authApi";
import { FormInput, VerticalForm } from "../../components/form";
import AuthLayout from "./AuthLayout";

type UserData = {
  email: string;
};

const ForgetPassword = () => {
  const onSubmit = async (formData: UserData) => {
    try {
      const response = await requestPasswordReset(formData.email);
      console.log("Solicitação enviada:", response.message);
    } catch (error: unknown) {
      console.error("Erro ao solicitar redefinição de senha:", error);
    }
  };

  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup
        .string()
        .required("Por favor, insira seu email.")
        .email("Por favor, insira um email válido."),
    })
  );

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
