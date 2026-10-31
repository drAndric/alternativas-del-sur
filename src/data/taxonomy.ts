export const categories = [
  'Diseño',
  'Desarrollo',
  'Productividad',
  'Privacidad y Seguridad',
  'Colaboración y Cooperativas',
  'Educación e Investigación',
  'Servicios de Internet',
] as const;

// Tipos dentro de un mismo servicio. Separan, por ejemplo, un metabuscador de
// un buscador con índice propio en /alternativas-a/ y en las categorías.
export const serviceKinds = {
  Metabuscador: 'Reúne resultados de otros buscadores sin crear un perfil tuyo. Sirve para el uso diario, pero depende de esas fuentes.',
  'Buscador con índice propio': 'Rastrea la web por su cuenta, sin depender de Google o Bing. A cambio, suele encontrar menos.',
  Navegador: 'Programa para navegar la web.',
  Mapas: 'Mapas y navegación basados en datos abiertos.',
  Traducción: 'Traducción automática sin enviar tus textos a un gran proveedor.',
  'Plataforma de video': 'Publica y aloja videos: reemplaza a la plataforma.',
  'Cliente para ver YouTube': 'Permite ver YouTube con menos rastreo, pero el contenido sigue estando allí.',
  'Formularios y encuestas': 'Recoge respuestas con los datos bajo tu control.',
  'Móvil sin Google': 'Para usar un teléfono con menos dependencia de los servicios de Google.',
} as const;

export const directoryGroups = {
  'Directorios generales': 'Catálogos amplios para buscar por programa o por necesidad.',
  'Listas awesome en GitHub': 'Listas mantenidas en público por comunidades, en las que cualquiera puede proponer cambios.',
  Privacidad: 'Recomendaciones cuyo criterio principal es proteger tus datos.',
  'Proveedores comunitarios': 'Organizaciones que operan servicios libres para que no tengas que instalarlos.',
  'Universidades e infraestructura académica': 'Para evaluar y sostener infraestructura abierta de investigación y publicación.',
} as const;

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

export type ServiceKind = keyof typeof serviceKinds;
export type Category = (typeof categories)[number];
export type UniversityArea = (typeof universityAreas)[number];
