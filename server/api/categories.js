import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Identidade Visual',
        pt_BR: 'Identidade Visual',
      },
    },
    {
      id: 2,
      title: {
        en: 'Aplicativos Web',
        id_ID: 'Aplicativos Web',
      },
    },
    {
      id: 3,
      title: {
        en: 'Aplicativos Mobile',
        id_ID: 'Aplicativos Mobile',
      },
    },
  ]
})
