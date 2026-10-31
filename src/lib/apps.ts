import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, type Category } from '../data/taxonomy';

export type App = CollectionEntry<'apps'>;

export const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const collator = new Intl.Collator('es');

export async function getApps() {
  const apps = await getCollection('apps');
  return apps.sort((a, b) => collator.compare(a.data.title, b.data.title));
}

/** Programas privativos con sus alternativas, de más a menos opciones. */
export async function getReplacements() {
  const byName = new Map<string, { name: string; slug: string; apps: App[] }>();
  for (const app of await getApps()) {
    for (const name of app.data.alternativeTo) {
      const slug = slugify(name);
      const item = byName.get(slug) ?? { name, slug, apps: [] };
      item.apps.push(app);
      byName.set(slug, item);
    }
  }
  return [...byName.values()].sort(
    (a, b) => b.apps.length - a.apps.length || collator.compare(a.name, b.name),
  );
}

export const categoryMeta: Record<Category, { slug: string; picto: string; summary: string }> = {
  Diseño: {
    slug: 'diseno',
    picto: 'diseno',
    summary: 'Ilustración, fotografía, maquetación, interfaces y 3D.',
  },
  Desarrollo: {
    slug: 'desarrollo',
    picto: 'desarrollo',
    summary: 'Forjas de código, editores, contenedores e infraestructura.',
  },
  Productividad: {
    slug: 'productividad',
    picto: 'productividad',
    summary: 'Oficina, notas, correo, proyectos y fotos personales.',
  },
  'Privacidad y Seguridad': {
    slug: 'privacidad-y-seguridad',
    picto: 'privacidad',
    summary: 'Contraseñas, navegación, cifrado y mensajería.',
  },
  'Colaboración y Cooperativas': {
    slug: 'colaboracion-y-cooperativas',
    picto: 'colaboracion',
    summary: 'Decisiones colectivas, chat, videollamadas y plataformas de economía social.',
  },
  'Educación e Investigación': {
    slug: 'educacion-e-investigacion',
    picto: 'educacion',
    summary: 'Aulas, revistas, repositorios, bibliotecas y herramientas para investigar.',
  },
};

export const orderedCategories = categories;
export const plural = (n: number) => `${n} ${n === 1 ? 'programa' : 'programas'}`;
