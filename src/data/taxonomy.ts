export const categories = [
  'Diseño',
  'Desarrollo',
  'Productividad',
  'Privacidad y Seguridad',
  'Colaboración y Cooperativas',
  'Educación e Investigación',
] as const;

export const universityAreas = [
  'Aulas virtuales y videoconferencia',
  'Publicación científica',
  'Repositorios y datos de investigación',
  'Bibliotecas y colecciones',
  'Herramientas de investigación',
  'Nube, identidad y comunicación',
] as const;

export const governanceTypes = [
  'Comunidad',
  'Fundación o sin fines de lucro',
  'Cooperativa',
  'Universidad o consorcio',
  'Empresa',
] as const;

export type Category = (typeof categories)[number];
export type UniversityArea = (typeof universityAreas)[number];
