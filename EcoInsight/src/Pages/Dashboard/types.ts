export type Project = {
  title: string; // Este é o nome do projeto
  projectName?: string;
  description: string;
  location: string;
  estimatedBudget: number;
  plannedEnergyTypes: string[];
  mainObjective: string;
  time?: string;
  state?: {
    name: string;
    variant: string;
  };
  progress?: {
    value: number;
    variant: string;
  };
  member?: string[];
};
