import axios from "axios";

const API_BASE_URL = "http://localhost:8080/JavaEcoInsight_war/api/rest";

export const registerUser = async (data: {
  exampleName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      fullname: data.exampleName,
      email: data.email,
      password: data.password,
    });
    return response.data; // Retorna a mensagem de sucesso ou erro
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data?.error || "Erro ao registrar o usuário."
      );
    } else {
      throw new Error("Erro ao registrar o usuário.");
    }
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.error || "Erro ao fazer login.");
    } else {
      throw new Error("Erro ao fazer login.");
    }
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/request-password-reset`,
      { email }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data?.error || "Erro ao solicitar redefinição de senha."
      );
    } else {
      throw new Error("Erro ao solicitar redefinição de senha.");
    }
  }
};

export const resetPassword = async (data: {
  token: string;
  newPassword: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data?.error || "Erro ao redefinir a senha."
      );
    } else {
      throw new Error("Erro ao redefinir a senha.");
    }
  }
};
