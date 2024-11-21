import { Feature } from "./types";

const features: Feature[] = [
  {
    avatar: "users",
    title: "Melhore o Impacto Ambiental",
    description:
      "Com o EcoInsight, sua empresa pode identificar oportunidades para reduzir impactos ambientais por meio de diagnósticos detalhados e recomendações personalizadas.",
    variant: "primary",
    containerClass: "d-flex border-bottom pb-4 badge-soft ",
  },
  {
    avatar: "user-plus",
    title: "Transforme sua Equipe Hoje",
    description:
      "Reforce seu time com talentos alinhados à sustentabilidade e ao futuro responsável da sua empresa.",
    variant: "success",
    containerClass: "d-flex border-bottom py-4",
  },
  {
    avatar: "bar-chart",
    title: "Dados para Decisões Estratégicas",
    description:
      "Com métricas detalhadas e análises orientadas por IA, o EcoInsight ajuda sua empresa a acompanhar o impacto dos projetos e tomar decisões mais assertivas em busca de um futuro responsável.",
    variant: "orange",
    containerClass: "d-flex pt-4",
  },
];

export { features };
