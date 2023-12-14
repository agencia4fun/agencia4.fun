import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Name',
      content: {
        en: 'Português',
        pt_BR: 'Portugês',
      },
      image: '/images/.png',
    },
  ]
})
