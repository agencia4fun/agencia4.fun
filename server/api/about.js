import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: 'Uma agência de Comunicação e Desenvolvimento Web, Mobile, UX e Inteligência Artificial. Precisa de uma marca, divulgação, e-commerce, blog, robô de atendimento ou website para sua empresa? Temos a solução. Tem uma ideia genial? Podemos realizar. Mantemos e produzimos seu negócio na internet 😊',
        pt_BR: 'Uma agência de Comunicação e Desenvolvimento Web, Mobile, UX e Inteligência Artificial. Precisa de uma marca, divulgação, e-commerce, blog, robô de atendimento ou website para sua empresa? Temos a solução. Tem uma ideia genial? Podemos realizar. Mantemos e produzimos seu negócio na internet 😊',
      },
    },
    // {
    //   id: 2,
    //   description: {
    //     en: '➔ Mantemos e produzimos seu negócio na internet 😊',
    //     id_ID: 'Brasil.',
    //   },
    // },
    // {
    //   id: 3,
    //   description: {
    //     en: '➔ Confira nossos serviços abaixo 👇',
    //     id_ID: 'Brasil.',
    //   },
    // },
  ]
})
