import { useEffect } from "react";

import AOS from "aos";

import "./assets/scss/theme.scss"; // Importação do tema
import EcoInsight from "./Pages/Landing/EcoInsight";

const App = () => {
  // Configuração para inicializar o AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <EcoInsight />
    </>
  );
};

export default App;
