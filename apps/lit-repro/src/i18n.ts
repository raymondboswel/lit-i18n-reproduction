import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initLitI18n } from 'lit-i18n';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(initLitI18n)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          project: 'Skate Park', // As an example of a React translation.
          editMode: 'Edit Mode',
          profileBar: {
            edit: 'Edit',
            view: 'View',
            crossSection: 'Cross Section',
            profile: 'Profile',
            surfaceSlicer: 'Surface Slicer',
            editMode: 'Edit Mode',
          },
          viewToolbar: {
            pointer: 'Pointer',
            select: 'Select',
            hand: 'Hand',
            rotate: 'Rotate',
            zoom: 'Zoom',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            undo: 'Undo',
            redo: 'Redo',
          },
          editToolbar: {
            line: 'Line',
            point: 'Point',
            cut: 'Cut',
            splitLine: 'Split Line',
            powerTrim: 'Power Trim',
            join: 'Join',
            chamfer: 'Chamfer',
            fillet: 'Fillet',
          },
        },
      },
    },
  });

export default i18n;
