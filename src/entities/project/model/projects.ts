import entries from '../../../../projects.json';

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  repository: string;
  icon: string;
};
export const projects: Project[] = entries;
