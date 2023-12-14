import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'It Never Ends ft. Julian Wilt',
      category: {
        id: 1, //see categories.js
        date: {
          en: 'January 2023',
          pt_BR: 'Januari 2023',
        },
        title: {
          en: 'Song',
          pt_BR: 'Lagu',
        },
      },
      content: {
        en: 'This song was made for gear testing and to honour the work of the great band, Bring Me The Horizon.',
        pt_BR: 'Lagu ini dibuat hanya untuk menguji peralatan musik kami dan untuk menghormati karya sebuah band hebat, Bring Me The Horizon.',
      },
      desc: {
          en: 'View Project',
          pt_BR: 'Lihat Proyek',
        },
      image: '/images/ine.jpg',
      url: 'https://ite.aghea.site',
    },
  ]
})
