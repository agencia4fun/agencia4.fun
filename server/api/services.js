import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Identidade Visual',
      description: {
        en: 'Criamos a marca com a cara do seu negócio nos formatos certos para suas redes sociais com variações adaptadas em arquivos vetorizados.',
        pt_BR: 'Criamos a marca com a cara do seu negócio nos formatos certos para suas redes sociais com variações adaptadas em arquivos vetorizados.'
      },
      icon: 'devicon:react',
      image: '/images/visualidentity.png',
    },
    {
      id: 2,
      title: "Marketing Digital",
      description: {
        en: 'Impulsionamos seu negócio nas plataformas do Instagram, Facebook e Google usando as técnicas de campanha mais avançadas.',
        pt_BR: 'Impulsionamos seu negócio nas plataformas do Instagram, Facebook e Google usando as técnicas de campanha mais avançadas.',
      },
      icon: 'devicon:vuejs',
      image: '/images/motiongraphics.png',
    },
    {
      id: 3,
      title: "Motion Graphic's",
      description: {
        en: 'Vídeos curtos animados para apresentar seu negócio ao mercado da maneira comprovadamente mais eficaz.',
        pt_BR: 'Vídeos curtos animados para apresentar seu negócio ao mercado da maneira comprovadamente mais eficaz.',
      },
      icon: 'devicon:kotlin',
      image: '/images/digitalmarketing.png',
    },
    {
      id: 4,
      title: 'Artigos & Postagens',
      description: {
        en: 'Geramos tráfego orgânico (copywrite) para seu website, blog e redes sociais criando e otimizando postagens e artigos com SEO.',
        pt_BR: 'Geramos tráfego orgânico (copywrite) para seu website, blog e redes sociais criando e otimizando postagens e artigos com SEO.',
      },
      icon: 'devicon:python',
      image: '/images/articles.png',
    },
    {
      id: 5,
      title: 'Aplicativos Web',
      description: {
        en: 'Desenvolvemos e otimizamos websites, wordpress e lojas virtuais (nas plataformas Nuvemshop e Shopify) com SSL grátis.',
        pt_BR: 'Desenvolvemos e otimizamos websites, wordpress e lojas virtuais (nas plataformas Nuvemshop e Shopify) com SSL grátis.',
      },
      icon: 'devicon:python',
      image: '/images/webapps.png',
    },
    {
      id: 6,
      title: 'Aplicativos Mobile',
      description: {
        en: 'Transformamos seu projeto web, e-commerce ou wordpress em app móvel na Google Play. Também realizamos ideias!',
        pt_BR: 'Transformamos seu projeto web, e-commerce ou wordpress em app móvel na Google Play. Também realizamos ideias!',
      },
      icon: 'devicon:python',
      image: '/images/mobapps.png',
    },
  ]
})
