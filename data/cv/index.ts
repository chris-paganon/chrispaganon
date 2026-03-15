import { englishCv } from './en';
import { frenchCv } from './fr';
import type { CvDocument } from '../../types/cv';

export const cvByLocale: Record<'en' | 'fr', CvDocument> = {
  en: englishCv,
  fr: frenchCv,
};
