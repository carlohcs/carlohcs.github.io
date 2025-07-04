export const messages = {
  'pt-br': {
    page: {
      defaultTitle: 'Carlos Henrique | carlohcs.me',
      titleSuffix: '| carlohcs.me',
      seoTitle: 'Olá. Meu nome é Carlos Henrique | carlohcs.me',
      seoDescription: 'Sou engenheiro de software, instrutor e facilitador.',
      seoAltImageTitle: 'Foto de Carlos Henrique',
      readMore: 'Leia mais →'
    },
    toggleTheme: {
      title: 'Alterar tema',
      aria: 'Alterar tema'
    },
    toggleLang: {
      ptBrLangLabel: 'Alterar o idioma para português do Brasil',
      enLangLabel: 'Change language to English'
    },
    menu: [
      {
        name: 'home',
        description: 'Sobre',
        url: '/'
      },
      {
        name: 'blog',
        description: 'Blog',
        url: '/blog'
      },
      {
        name: 'softwareengineer',
        description: 'Engenheiro de software',
        url: '/engineer'
      },
      {
        name: 'skills',
        description: 'Habilidades',
        url: '/skills'
      },
      {
        name: 'resume',
        description: 'Currículum Vitae',
        url: '/resume'
      }
    ],
    footer: {
      description: '"Quando não me sentir mais útil, quando sentir que estou pensando só em mim mesmo, não tenho mais o direito de estar vivo. É assim que penso."<br /><br />- Enéas Carneiro'
    },
    home: {
      title: 'Carlos Henrique',
      welcome: 'Olá.',
      seoDescription: 'Sou engenheiro de software, instrutor e facilitador.',
      subdescription: 'Meu nome é Carlos Henrique.',
      shortDescription: '<strong>Sou engenheiro de software, instrutor e facilitador.</strong>',
      description: [
        'Pós-graduado em Arquitetura de Software, <a href="https://github.com/ALFAC-Org" target="_blank">fiz um grande projeto com meu grupo</a>.',
        'Pós-graduado em Gestão em Tecnologia da Informação, <a href="https://drive.google.com/file/d/1SV5MvFJ3q2fqAgOC_FNdvo_YnLoXWiEu/view?usp=sharing" target="_blank">escrevi um artigo</a>.',
        'Como engenheiro de software, alguns de meus trabalhos podem ser vistos <a href="/engineer">aqui</a> ou no <a href="https://github.com/carlohcs" target="_blank">GitHub</a>.',
        'Tenho me aventurado a <a href="https://medium.com/@carlohcs" target="_blank">escrever</a>, a <a href="https://www.youtube.com/user/carlohcs" target="_blank">tocar guitarra</a> e a <a href="https://www.strava.com/athletes/158753829" target="_blank">correr</a>.',
        'Acredito que todos devam ter uma <a href="https://missaopessoal.com.br" target="_blank">missão pessoal</a>.'
      ],
      connect: 'Conecte-se:',
      networks: {
        github: 'Veja meus repositórios no Github',
        medium: 'Veja o que escrevo no Medium',
        linkedin: 'Veja meus currículo no LinkedIn',
        twitter: 'Veja meus tweets no Twitter',
        facebook: 'Veja meus posts no Facebook',
        youtube: 'Veja meus vídeos no YouTube',
        mail: 'Me envie um e-mail'
      }
    },
    engineer: {
      title: 'Engenheiro de software',
      titleDescription: 'Alguns projetos que trabalhei.',
      description: 'Há mais de 14 anos, desenvolvo soluções de tecnologia. O mais importante que aprendi: tecnologias surgem o tempo todo e cabe a nós desenvolvedores pensarmos em como ela pode ser usada a favor dos usuários. Mais abaixo, você pode conferir alguns destes trabalhos.',
      featured: 'Destaque',
      otherProjects: 'Outros projetos',
      mainProject: {
        titleDescription: 'Payments Hub - GoDaddy',
        url: 'https://godaddy.com',
        description: '<p>Desenvolvimento dos projetos <a href=\'https://poynt.com/\' target=\'_blank\'>Poynt</a> e <a href=\'https://payments.godaddy.com\' target=\'_blank\'>GoDaddy Payments</a>: ambas soluções omnichannel de pagamento da GoDaddy.</p><p class="project__technology">Tecnologias utilizadas: NodeJS, React, Next.js, JavaScript, Ember.js e Vue.js.</p>',
        cover: 'godaddy.png',
        video: 'godaddy'
      },
      projects: [
        {
          titleDescription: 'Missão Pessoal',
          url: 'https://missaopessoal.com.br',
          description: '<p>Projeto pessoal para ajudar as pessoas a criarem suas missões pessoais.</p><p>É possível criar, compartilhar e dar"like". Até o momento, 114 missões já foram criadas.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript, Vue.js, PHP e MySql. Hospedado no Digital Ocean.</p>',
          cover: 'missaopessoal.png'
        },
        {
          titleDescription: 'UOL Loja de Jogos',
          url: 'https://lojadejogos.uol.com.br/',
          description: '<p>Uma plataforma onde os clientes podem comprar recursos para jogos.</p><p class="project__technology">Tecnologias usadas: HTML, Styled Components, Next.js, Cypress e BFF.</p>',
          cover: 'lojadejogos.png'
        },
        {
          titleDescription: 'Carlota Sounds',
          url: 'https://carlota-sounds.art/',
          description: '<p>Site de projeto pessoal <a href="https://carlota-sounds.art" rel="noopener" target="_blank">Carlota Sounds</a>.</p><p>O site é uma forma de ouvir experiências de reflexão.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, Next.js e Jest.</p>',
          cover: 'carlotasounds.jpeg'
        },
        {
          titleDescription: 'Sobre UOL',
          url: 'https://sobreuol.noticias.uol.com.br/',
          description: '<p>Site institucional da empresa <a href="https://uol.com.br" rel="noopener" target="_blank">UOL</a>.</p><p>Sou um dos responsáveis pela estrutura e conteúdo do site.</p><p>Contém soluções para empresas e clientes finais, além de highlights importantes, bem como informações de mídia e de trabalho.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript. Gulp e Jest.</p>',
          cover: 'sobreuol.png'
        },
        {
          titleDescription: 'Bootstrap UOL',
          description: '<p>Base de código da empresa <a href="https://uol.com.br" trel="noopener" arget="_blank">UOL</a>.</p><p>O projeto é um <i>fork</i> do <a href="https://getbootstrap.com/docs/3.3/" rel="noopener" target="_blank">Twitter Bootstrap</a>. Nele, mantemos a entrega de componentes necessários aos produtos da empresa.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript e Grunt.</p>',
          cover: 'bootstrap.png'
        },
        {
          titleDescription: 'Zero UOL',
          description: '<p>Guia de estilos do <a href="https://uol.com.br" rel="noopener" target="_blank">UOL</a>.</p><p>O Zero possui recomendações que devem ser utilizadas pelos produtos do UOL. Possui as melhores práticas, sendo uma documentação viva.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript, Jekyll, Gulp e Jest.</p>',
          cover: 'zero.png'
        },
        {
          titleDescription: 'UOL Música Deezer (descontinuado)',
          description: '<p>Serviço de streaming de música do <a href="https://uol.com.br" rel="noopener" target="_blank">UOL</a>.</p><p>Fui um dos responsáveis pelo <i>frontend</i> da aplicação.</p><p>O serviço foi concorrente dos serviços <a href="https://www.deezer.com/" rel="noopener" target="_blank">Deezer</a> e <a href="https://www.spotify.com/" rel="noopener" target="_blank">Spotify</a>. Era disponibilizado de forma gratuita aos usuários, possuindo também plano <i>premium</i> com funcionalidades adicionais.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript e Grunt.</p>',
          cover: 'umd.png'
        },
        {
          titleDescription: 'InterAcesso',
          url: 'http://interacesso.interport.com.br',
          description: '<p>Sistema online para condomínios.</p><p>Fui um dos fundadores da startup, sendo responsável por toda a infra do serviço.</p><p>O serviço contém controle de colaboradores, moradores e gerenciamento interno.</p><p>Chegou a ter em torno de 7 clientes enquanto eu fazia parte do quadro societário.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript, Gulp, PHP, Laravel.</p>',
          cover: 'interacesso.png'
        },
        {
          titleDescription: 'Vita do Brasil (descontinuado)',
          description: '<p>Gerenciamento de empresas médicas.</p><p>Fui responsável pela produção do site institucional e do sistema de ERP da empresa.</p><p>O ERP continha uma série de funcionalidades, entre elas: gerenciamento de cadastros de empresas, de médicos e dos colaboradores; emissão de notas fiscais entre outros.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript, Jekyll, PHP e MySql.</p>',
          cover: 'vita.png'
        },
        {
          titleDescription: 'Aduet (descontinuado)',
          description: '<p>Sistema para gerenciamento de encontros.</p><p>Fui responsável por toda a concepção do sistema, que era uma espécie de Tinder antigo. Continha o cadastro de clientes, contratos, relatórios entre outros.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript, PHP e MySql.</p>',
          cover: 'aduet.png'
        },
        {
          titleDescription: 'Ursoland (descontinuado)',
          description: '<p>Rede social para público <i>bear</i>.</p><p>Fui um dos responsáveis por todo o desenvolvimento do site.</p><p>O serviço era uma rede social voltado exclusivamente para o público LGBT de ursos.</p><p>O site continha like, troca de mensagens, videochat entre outros serviços.</p><p class="project__technology">Tecnologias utilizadas: HTML, CSS, JavaScript, PHP e MySql.</p>',
          cover: 'ursoland.png'
        }
      ]
    },
    skills: {
      title: 'Habilidades',
      titleDescription: 'Outras áreas que venho atuando.',
      description: 'Tenho desenvolvido habilidades na área de educação, facilitação e gerenciamento de projetos. Mais abaixo, é possível ver no detalhe.',
      items: [
        {
          title: 'Instrutor',
          titleDescription: 'Tenho a oportunidade de compartilhar o conhecimento.',
          items: [
            {
              title: '<strong>Construção de websites</strong>',
              description: '<p>"Como é feito um website?"</p><p>Junto dos meus colegas de trabalho, buscamos ensinar o básico para a construção de websites utilizando HTML e CSS. Cinco turmas já foram aplicadas.</p>'
            },
            {
              title: '<strong>Editor VIm</strong>',
              description: '<p>"O que o Atom, VSCode, SublimeText, etc. possuem em comum? Não são o VIm!"</p><p>No treinamento aplicado por mim, sáo explicados desde conceitos simples até os mais avançados no editor de terminal VIm. Os participantes dizem ter vontade de utilizá-lo no dia a dia devido ao potencial encontrado. Cinco turmas já foram aplicadas.</p>'
            }
          ],
          cover: 'instructor.png'
        },
        {
          title: 'Product Owner',
          titleDescription: '<strong>Projeto de Onboarding da área.</strong>',
          description: '<p>Em julho de 2018, conquistei o papel de product owner do projeto de onboarding da área do meu time. A área possui mais de 20 times e o processo de onboarding torna-se extremamente importante para prover uma melhor experiência de recepção aos novos colaboradores que chegam na empresa.</p><p>Até o presente momento, conseguimos entregar dois subprojetos:</p>',
          items: [
            {
              title: '<strong>Guia</strong>',
              description: '<p>O guia consiste na disponibilização de informações úteis a entrada dos novos colaboradores, como recursos disponíveis, entendimento sobre a empresa, dicas e entre outros.</p>'
            },
            {
              title: '<strong>Guia de apadrinhamento<strong>',
              description: '<p>O guia de apadrinhamento consiste em um roteiro com informações úteis do que fazer na recepção de um novo colaborador.</p>'
            }
          ],
          finalDisclaimer: 'Atualmente o projeto de onboarding continua expandindo, sendo já solicitado por uma área irmã.',
          cover: 'productowner.png'
        },
        {
          title: 'Facilitador',
          titleDescription: 'Treinamentos, reuniões, meetups, eventos… De tudo um pouco!',
          items: [
            {
              title: '<strong>Reunião de frontenders</strong>',
              description: '<p>Sendo um <i>meetup</i> técnico que acontecia internamente na empresa, eu organizava o calendário, convidava as pessoas, cuidava da divulgação e fazia a facilitação durante as apresentações.</p>'
            },
            {
              title: '<strong>Colaí</strong>',
              description: '<p>Uma reunião mensal com foco no compartilhamento do conhecimento de design e de pesquisas. Participo frequentemente sendo um dos responsáveis por fazer a abertura, introduzir o time e as pessoas, além de ajudar nos bastidores.</p>'
            },
            {
              title: '<strong>Treinamento de Design Thinking</strong>',
              description: '<p>Ajudo com frequência na facilitação das turmas, na aplicação de dinâmicas e explicação de cápsulas de conhecimento.</p>'
            },
            {
              title: '<strong>Eventos de áreas</strong>',
              description: '<p>Já ajudei nos bastidores de eventos internos da empresa, bem como na aplicação de dinâmicas.</p>'
            }
          ],
          cover: 'facilitator.png'
        }
      ]
    },
    resume: {
      title: 'Currículum Vitae',
      titleDescription: 'Meu histórico profissional.',
      experiences: [
        {
          title: 'Experiência Profissional',
          items: [
            {
              title: '<strong>Software Engineer</strong> - Payments Hub - GoDaddy - 05/2022 - atualmente',
              description: '<p>Desenvolvimento dos projetos <a href=\'https://poynt.com/\' target=\'_blank\'>Poynt</a> e <a href=\'https://payments.godaddy.com\' target=\'_blank\'>GoDaddy Payments</a>: ambas soluções omnichannel de pagamento da GoDaddy.</p>'
            },
            {
              title: '<strong>Frontend Pleno</strong> - co:lab - UOL - 11/2020 - 05/2022',
              description: 'Atuando dentro do time do co:lab, responsável por ajudar a integrar áreas e desenvolver jobs colaborativos. Entre eles, styleguide, módulos independentes como Conta UOL, Eye Catcher, UOL Bootstrap, etc. Aplicações de reuniões como a "Reunião dos Frontends" e a "Reunião dos Design Tudo".'
            },
            {
              title: '<strong>Frontend</strong> - UOL Música Deezer - UOL - 01/2016 - 07/2016',
              description: 'Desenvolvedor de funcionalidades para a antiga "Rádio UOL". Entre elas: o novo player, página do artista, gerenciamento de favoritos e afins.'
            },
            {
              title: '<strong>Cofundador</strong> – InterAcesso – 11/2013 - 07/2015',
              description: 'Cofundador do projeto. Estruturação da base de T.I do projeto, definição de metodologias, softwares, linguagens e recursos de programação para o andamento do projeto. Desenvolvimento da marca, usabilidade e melhoria dos processos do sistema para adaptação aos clientes.'
            },
            {
              title: '<strong>Desenvolvedor Web</strong> – Vita do Brasil – 06/2012 - 11/2013',
              description: 'Desenvolvimento de ERP da empresa, para automatização e melhoria de processos internos, além de ajudar na reformulação da empresa. Criação do site institucional da empresa.'
            },
            {
              title: '<strong>Desenvolvedor Web</strong> – HadNet – 02/2012 - 06/2012',
              description: 'Estruturação de site com HTML, CSS, PHP, MySql, JavaScript, jQuery e AJAX. Criação de rede social UrsoLand.'
            },
            {
              title: '<strong>Monitor de Sala de Informática (Estagiário)</strong> – Governo do Estado de São Paulo – 02/2010 - 11/2010',
              description: 'Monitoramento de sala de informática. Suporte a usuários, indicações de uso de sites úteis. Participações em reuniões de capacitação.'
            }
          ]
        },
        {
          title: 'Formação Acadêmica',
          items: [
            '<strong>Pós-graduação em Arquitetura de Software</strong> - FIAP - Início em Março 2024 - Término em Julho 2025.',
            '<strong>Pós-graduação em MBA em Gestão de T.I</strong> - Impacta - Início em agosto de 2017 - Término em julho de 2019.',
            '<strong>Graduação em Sistemas para Internet</strong> – FMU – Início em fevereiro de 2012 – Término em dezembro de 2014.',
            '<strong>Técnico em Informática para Internet</strong> – ETEC – Início em fevereiro de 2012 – Término em dezembro de 2014.'
          ]
        },
        // DESABILITADO POR HORA
        // {
        //   'title': 'Treinamentos',
        //   'items': [
        //     'Zend Framework 2 PHP – Tempo Real Eventos',
        //     'JavaScript – Impacta',
        //     'PHP & MySql – 4Linux',
        //     'Montagem e Manutenção de Hardware – Microcamp'
        //   ]
        // },
        // {
        //   'title': 'Eventos e Conferências',
        //   'items': [
        //     'Agile Trends 2019',
        //     'QConSP 2018',
        //     'Code In The Dark 2017 - iMasters',
        //     'Front In Sampa 2017 - iMasters',
        //     'JS Experience 2017 - iMasters',
        //     'BrazilJS Conf 2016',
        //     'The Developers Conference – Trilha Modern Web e JavaScript 2016',
        //     'AWS Summit 2015',
        //     'The Developers Conference – Trilha de StartUps e JavaScript 2015',
        //     'InterCon PHP 2014',
        //     'PHP Conference 2013'
        //   ]
        // },
        {
          title: 'Projetos',
          items: [
            {
              title: '<a href="https://carlota-sounds.art" rel="noopener" target="_blank"><strong>Carlota Sounds</strong></a> - setembro de 2021',
              quote: 'Aqui, os sentimentos mais profundos são explorados: da solidão à euforia, às reflexões mais amplas. Que o reflexo desses sons esteja com você.',
              description: 'Com essa chamada, o projeto é um site no qual eu exponho minhas composições musicais. Tente!'
            },
            {
              title: '<a href="https://missaopessoal.com.br" rel="noopener" target="_blank"><strong>Missão Pessoal</strong></a> - setembro de 2015',
              quote: 'Crie sua missão pessoal agora mesmo! Todos precisam ter um rumo na vida e a missão pessoal faz parte disso. Crie-a agora!',
              description: 'Com essa chamada, o projeto é uma ferramenta que auxilia as pessoas a criarem suas respectivas missões pessoais e compartilhá-las no site. Tudo isso gratuitamente.'
            }
            // {
            //   title: '<strong>Não é bem isso!</strong> - janeiro de 2017',
            //   quote: 'Um podcast para mentes inquietas!',
            //   description: 'Com essa chamada, o projeto consiste em ser um meio de transmissão de conteúdo e de conhecimento para os ouvintes. Composto por um time de 4 pessoas, podcasts com temas variados são lançados quinzenalmente.'
            // }
          ]
        },
        {
          title: 'Informações adicionais',
          items: [
            'Inglês: Proficiência profissional de trabalho',
            '<a href="https://github.com/carlohcs" rel="noopener" target="_blank">Perfil no Github</a>',
            '<p>Tecnologias que já tive contato:<br />JavaScript: jQuery, React, Backbone, Angular, Node, Vue, QUnit, Jasmine, Jest, AVA, Puppeteer. <br />PHP: Laravel, Zend, Symfony, Silex, Lumen, PHPUnit, Doctrine.<br />Devops: Docker, Kubernetes, Jenkins, Terraform.<br />Java: Spring, Hibernate, JUnit<br />Outros: AWS, Git, Bitbucket, Linux, MacOS, VIm.</p>'
          ]
        }
      ]
    },
    error: {
      citation: '"<i>[…] só o conhecimento liberta o homem, só através do conhecimento o homem é livre e em sendo livre: ele pode aspirar uma condição melhor de vida para ele e todos os seus semelhantes. […]" <br />- Enéas Carneiro</i>',
      codes: {
        '404': 'Página não encontrada.'
      },
      defaultErrorMessage: 'Erro no servidor.'
    },
    blog: {
      title: 'Blog',
      titleDescription: 'Meus artigos.',
      description: 'Tenho escrito artigos no Medium. Mais abaixo, é possível ver meus últimos posts.',
      notFoundTitle: 'Post não encontrado.',
      notFoundDescription: 'O post que você está procurando não existe.',
      comeBack: '← Voltar para o blog',
      loading: 'Carregando posts…',
      seeOriginalPost: 'Ver post original no Medium →'
    }
  },
  en: {
    page: {
      defaultTitle: 'Carlos Henrique | carlohcs.me',
      titleSuffix: '| carlohcs.me',
      seoTitle: 'Hello. I am Carlos Henrique | carlohcs.me',
      seoDescription: 'I am a software engineer, instructor and facilitator.',
      seoAltImageTitle: 'Picture of Carlos Henrique',
      readMore: 'Read more →'
    },
    toggleTheme: {
      title: 'Change theme',
      aria: 'Change theme'
    },
    toggleLang: {
      ptBrLangLabel: 'Alterar o idioma para português do Brasil',
      enLangLabel: 'Change language to English'
    },
    menu: [
      {
        name: 'home',
        description: 'About',
        url: '/'
      },
      {
        name: 'blog',
        description: 'Blog',
        url: '/blog'
      },
      {
        name: 'softwareengineer',
        description: 'Software Engineer',
        url: '/engineer'
      },
      {
        name: 'skills',
        description: 'Skills',
        url: '/skills'
      },
      {
        name: 'resume',
        description: 'Resume',
        url: '/resume'
      }
    ],
    footer: {
      description: '"When I no longer feel useful, when I feel that I am thinking only of myself, I no longer have the right to be alive. That is how I think."<br /><br />- Enéas Carneiro'
    },
    home: {
      title: 'Carlos Henrique',
      welcome: 'Hello.',
      seoDescription: 'I am a software engineer, instructor and facilitator.',
      subdescription: 'My name is Carlos Henrique.',
      shortDescription: '<strong>I am a software engineer, instructor and facilitator.</strong>',
      description: [
        'Postgraduate in Software Architecture, <a href="https://github.com/ALFAC-Org" target="_blank">I did a big project with my group</a>.',
        'Postgraduate in Information Technology Management, <a href="https://drive.google.com/file/d/1SV5MvFJ3q2fqAgOC_FNdvo_YnLoXWiEu/view?usp=sharing" target="_blank">I wrote an article</a>.',
        'As a software engineer, some of my work can be seen <a href="/engineer">here</a> or on <a href="https://github.com/carlohcs" target="_blank">GitHub</a>.',
        'I have been venturing to <a href="https://medium.com/@carlohcs" target="_blank">write</a>, to <a href="https://www.youtube.com/user/carlohcs" target="_blank">play guitar</a> and to <a href="https://www.strava.com/athletes/158753829" target="_blank">run</a>.',
        'I believe everyone should have a <a href="https://missaopessoal.com.br" target="_blank">personal mission</a>.'
      ],
      connect: 'Connect:',
      networks: {
        github: 'See my repositories on Github',
        medium: 'See what I write in Medium',
        linkedin: 'See my resumes on LinkedIn',
        twitter: 'See my tweets on Twitter',
        facebook: 'See my posts on Facebook',
        youtube: 'See my vídeos on YouTube',
        mail: 'Send me an email'
      }
    },
    engineer: {
      title: 'Software Engineer',
      titleDescription: 'Some projects I worked on.',
      description: 'For over 14 years, I have been developing technology solutions. The most important thing I learned: technologies come all the time and it\'s up to us developers to think about how it can be used on behalf of users. Below you can check out some of these works.',
      featured: 'Spotlight',
      otherProjects: 'Other projects',
      mainProject: {
        titleDescription: 'Payments Hub - GoDaddy',
        url: 'https://godaddy.com',
        description: '<p>Development on <a href=\'https://poynt.com/\' target=\'_blank\'>Poynt</a> and <a href=\'https://payments.godaddy.com\' target=\'_blank\'>GoDaddy Payments</a> services: both GoDaddy omnicommerce payment solution.</p><p class="project__technology">Technologies used: NodeJS, React, Next.js, JavaScript, Ember.js, and Vue.js.</p>',
        cover: 'godaddy.png',
        video: 'godaddy'
      },
      projects: [
        {
          titleDescription: 'Missão Pessoal',
          url: 'https://missaopessoal.com.br',
          description: '<p>Personal project to help people create their personal missions.</p><p>You can create, share and like. So far, 114 missions have been created.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript, Vue.js, PHP and MySql. Hosted at Digital Ocean.</p>',
          cover: 'missaopessoal.png'
        },
        {
          titleDescription: 'UOL Loja de Jogos',
          url: 'https://lojadejogos.uol.com.br/',
          description: '<p>A platform where the customers can buy resources for games.</p><p class="project__technology">Technologies used: HTML, Styled Components, Next.js, Cypress and BFF.</p>',
          cover: 'lojadejogos.png'
        },
        {
          titleDescription: 'Carlota Sounds',
          url: 'https://carlota-sounds.art/',
          description: '<p>Personal project site <a href="https://carlota-sounds.art" rel="noopener" target="_blank">Carlota Sounds</a>.</p><p> The site is a way of listening to reflection experiences.</p><p class="project__technology">Technologies used: HTML, CSS, Next.js and Jest.</p>',
          cover: 'carlotasounds.jpeg'
        },
        {
          titleDescription: 'Sobre UOL',
          url: 'https://sobreuol.noticias.uol.com.br/',
          description: '<p>Company website <a href="https://uol.com.br" rel="noopener" target="_blank">UOL</a>.</p><p>Contains solutions for businesses and end customers, as well as important highlights as well as media and work information.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript. Gulp and Jest.</p>',
          cover: 'sobreuol.png'
        },
        {
          titleDescription: 'Bootstrap UOL',
          description: '<p>Company code base <a href="https://uol.com.br" rel="noopener" target="_blank">UOL</a>.</p><p>The project is a <i> fork </i> of <a href="https://getbootstrap.com/docs/3.3/" rel="noopener" target="blank">Twitter Bootstrap</a>. In it we maintain the delivery of necessary components to the company\'s products.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript and Grunt.</p>',
          cover: 'bootstrap.png'
        },
        {
          titleDescription: 'Zero UOL',
          description: '<p>UOL Style Guide </p><p>I am responsible for editing and maintaining the site structure.</p><p>Zero has recommendations that should be used by UOL products. It has best practices and is living documentation.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript, Jekyll, Gulp and Jest.</p>',
          cover: 'zero.png'
        },
        {
          titleDescription: 'UOL Música Deezer (discontinued)',
          description: '<p><a href="https://uol.com.br" rel="noopener" target="_blank">UOL</a> Music Streaming Service.</p><p>I was one of responsible for the <i> frontend </i> of the application.</p><p>The service was concurrent with the services <a href="https://www.deezer.com/" rel="noopener" target="_blank">Deezer</a> and <a href="https://www.spotify.com/" target="_blank">Spotify</a>. It was made available to users free of charge and also had a premium plan with additional functionality.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript, and Grunt. </p>',
          cover: 'umd.png'
        },
        {
          titleDescription: 'InterAcesso',
          url: 'http://interacesso.interport.com.br',
          description: '<p>Online condominium system.</p><p>I was a founder of the startup, being responsible for the entire infrastructure of the service.</p><p>The service contains employee, resident, and internal management control.</p><p>There were around 7 clients while I was on the corporate board.</p><p class="project__technology">Technologies Used: HTML, CSS, JavaScript, Gulp, PHP, Laravel.</p>',
          cover: 'interacesso.png'
        },
        {
          titleDescription: 'Vita do Brasil (discontinued)',
          description: '<p>Medical Business Management.</p><p>I was responsible for producing the company\'s institutional website and ERP system.</p><p>ERP contained a number of features, including: business, medical and employee records; issuing invoices among others.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript, Jekyll, PHP and MySql.</p>',
          cover: 'vita.png'
        },
        {
          titleDescription: 'Aduet (discontinued)',
          description: '<p>Dating management system.</p><p>I was responsible for the whole design of the system, which was a kind of old Tinder. It contained customer registration, contracts, reports and more.</p><p class="project__technology">Technologies used: HTML, CSS, JavaScript, PHP and MySql.</p>',
          cover: 'aduet.png'
        },
        {
          titleDescription: 'Ursoland (discontinued)',
          description: '<p>Social Network for the Public <i>bear</i>.</p><p>I was one of the people responsible for all the development of the site.</p><p>The service was a social network focused exclusively on the LGBT audience of bears.</p><p>The site contained like, message exchange, videochat among other services.</p><p class="project__technology">Technologies Used: HTML, CSS, JavaScript, PHP and MySql.</p>',
          cover: 'ursoland.png'
        }
      ]
    },
    skills: {
      title: 'Skills',
      titleDescription: 'Other areas I\'ve been working on.',
      description: 'I have developed skills in education, facilitation and project management. See below for details.',
      items: [
        {
          title: 'Instructor',
          titleDescription: 'I have the opportunity to share knowledge.',
          items: [
            {
              title: '<strong>Website building </strong>',
              description: '<p>"How is a website made?"</p><p>Together with my coworkers, we have tried to teach the basics of building websites using HTML and CSS. Five classes have already been applied.</p> '
            },
            {
              title: '<strong>VIm Editor </strong>',
              description: '<p>"What Atom, VSCode, SublimeText, etc. do they have in common? Not the VIm!"</p><p>In the training I applied, they are explained from simple concepts to the most advanced in the VIm terminal editor. Participants say they want to use it on a daily basis due to the potential found. Five classes have already been applied.</p> '
            }
          ],
          cover: 'instructor.png'
        },
        {
          title: 'Product Owner',
          titleDescription: '<strong>Area Onboarding Project. </strong>',
          description: '<p>In July 2018 I conquered the role of product owner of my team\'s area onboarding project. The area has more than 20 teams and the onboarding process becomes extremely important to provide a better reception experience for new employees coming in.</p><p>So far, we have been able to deliver two subprojects: </p> ',
          items: [
            {
              title: '<strong>Guide </strong>',
              description: '<p>The guide consists of providing helpful input to new employees, such as available resources, understanding of the company, tips, and more.</p>'
            },
            {
              title: '<strong>Sponsorship Guide <strong>',
              description: '<p>The sponsorship guide consists of a script with useful information on what to do when receiving a new contributor.</p>'
            }
          ],
          finalDisclaimer: 'Currently the onboarding project continues to expand and is already requested by a sister area.',
          cover: 'productowner.png'
        },
        {
          title: 'Facilitator',
          titleDescription: 'Trainings, meetings, meetups, events… A bit of everything!',
          items: [
            {
              title: '<strong>Frontend meeting </strong>',
              description: '<p>As a <i> meetup </i> coach that was held internally at the company, I organized the calendar, invited people, handled outreach, and facilitated presentations.</p>'
            },
            {
              title: '<strong>Colaí </strong>',
              description: '<p>A monthly meeting focused on sharing design knowledge and research. I often attend being one of those responsible for opening, introducing the team and people, and helping behind the scenes.</p>'
            },
            {
              title: '<strong>Design Thinking Training </strong>',
              description: '<p>I often help in facilitating classes, applying dynamics and explaining knowledge capsules.</p>'
            },
            {
              title: '<strong>Area Events </strong>',
              description: '<p>I\'ve helped behind the scenes of internal company events as well as applying dynamics.</p>'
            }
          ],
          cover: 'facilitator.png'
        }
      ]
    },
    resume: {
      title: 'Resume',
      titleDescription: 'My work history.',
      experiences: [
        {
          title: 'Professional Experience',
          items: [
            {
              title: '<strong>Software Engineer</strong> - Payments Hub - GoDaddy - 05/2022 - currently',
              description: 'Development on <a href="https://poynt.com/" target="_blank">Poynt</a> and <a href="https://payments.godaddy.com" target="_blank">GoDaddy Payments</a> services: both GoDaddy omnicommerce payment solution.'
            },
            {
              title: '<strong>Senior Software Engineer</strong> - co: lab - UOL - 11/2020 - 05/2022',
              description: 'Acting within the co: lab team, responsible for helping to integrate areas and develop collaborative jobs. These include styleguide, standalone modules like UOL Account, Eye Catcher, UOL Bootstrap, etc. Meeting applications like "Frontends Meeting" and "Design Everything Meeting". '
            },
            {
              title: '<strong>Frontend Full</strong> - co: lab - UOL - 07/2016 - currently',
              description: 'Acting within the co: lab team, responsible for helping to integrate areas and develop collaborative jobs. These include styleguide, standalone modules like UOL Account, Eye Catcher, UOL Bootstrap, etc. Meeting applications like "Frontends Meeting" and "Design Everything Meeting". '
            },
            {
              title: '<strong>Frontend</strong> - UOL Music Deezer - UOL - 01/2016 - 07/2016',
              description: 'Functionality developer for the old " UOL Radio ". These include the new player, artist page, bookmark management and the like.'
            },
            {
              title: '<strong>Co-founder</strong> - InterAcesso - 11/2013 - 07/2015',
              description: 'Project co-founder. Structuring of the project\'s IT base, definition of methodologies, software, languages ​​and programming resources for project progress. Brand development, usability and improvement of system processes to adapt to clients. '
            },
            {
              title: '<strong>Web Developer</strong> - Vita do Brasil - 06/2012 - 11/2013',
              description: 'Enterprise ERP development, for automation and improvement of internal processes, as well as helping to reformulate the company. Creation of the company\'s institutional website.'
            },
            {
              title: '<strong>Web Developer</strong> - HadNet - 02/2012 - 06/2012',
              description: 'Website structuring with HTML, CSS, PHP, MySql, JavaScript, jQuery and AJAX. UrsoLand social networking.'
            },
            {
              title: '<strong>Computer Room Monitor (Intern)</strong> - São Paulo State Government - 02/2010 - 11/2010',
              description: 'Computer room monitoring. Support for users, directions for use of useful websites. Participation in training meetings.'
            }
          ]
        },
        {
          title: 'Academic Background',
          items: [
            '<strong>Postgraduate Degree, Software Architecture</strong> - FIAP - Beginning March 2024 - Ending July 2025.',
            '<strong>MBA in T.I Management Postgraduate </strong> - Impacta - Beginning August 2017 - Ending July 2019.',
            '<strong>Undergraduate in Internet Systems </strong> - FMU - Beginning February 2012 - Ending December 2014.',
            '<strong>Internet Computer Technician </strong> - ETEC - Beginning February 2012 - Ending December 2014.'
          ]
        },
        // DESABILITADO POR HORA
        // {
        //   'title': 'Training',
        //   'items': [
        //     'Zend Framework 2 PHP - Real Time Events',
        //     'JavaScript - Impact',
        //     'PHP & MySql - 4Linux',
        //     'Hardware Mounting and Maintenance - Microcamp'
        //   ]
        // },
        // {
        //   'title': 'Events and Conferences',
        //   'items': [
        //     'Agile Trends 2019',
        //     'QConSP 2018',
        //     'Code In The Dark 2017 - iMasters',
        //     'Front In Sampa 2017 - iMasters',
        //     'JS Experience 2017 - iMasters',
        //     'BrazilJS Conf 2016',
        //     'The Developers Conference - Modern Web and JavaScript Track 2016',
        //     'AWS Summit 2015',
        //     'The Developers Conference - StartUps and JavaScript 2015 Track',
        //     'InterCon PHP 2014',
        //     'PHP Conference 2013'
        //   ]
        // },
        {
          title: 'Projects',
          items: [
            {
              title: '<a href="https://carlota-sounds.art" rel="noopener" target="_blank"><strong>Carlota Sounds</strong></a> - September 2021',
              quote: 'Here the deepest feeling are explored: from loneliness, euphoria to the widest reflections. May the reflection of these sounds be with you.',
              description: 'With this call, the project is a website where I showcase my musical compositions. Try it!'
            },
            {
              title: '<a href="https://missaopessoal.com.br" target="_blank"><strong>Missão Pessoal</strong></a> - September 2015',
              quote: 'Create your personal mission right now! Everyone needs to have a bearing on life and personal mission is part of it. Create it now!',
              description: 'With this call, the project is a tool that helps people create their personal missions and share them on the site. All for free.'
            }
            // {
            //   title: '<strong>Não é bem isso!</strong> - January 2017 - discontinued',
            //   quote: 'A podcast for restless minds!',
            //   description: 'With this call, the project is to be a means of transmitting content and knowledge to listeners. Composed by a team of 4 people, podcasts with varied themes are released fortnightly.'
            // }
          ]
        },
        {
          title: 'Additional Information',
          items: [
            'Inglês: Professional working proficiency.',
            '<a href="https://github.com/carlohcs" target="_blank">Github Profile</a>',
            '<p>Technologies I\'ve had contact with:<br />JavaScript: jQuery, React, Backbone, Angular, Node, Vue, QUnit, Jasmine, Jest, AVA, Puppeteer. PHP: Laravel, Zend, Symfony, Silex, Lumen, PHPUnit, Doctrine.<br />Devops: Docker, Kubernetes, Jenkins, Terraform.<br />Java: Spring, Hibernate, JUnit.<br />Other: AWS, Git, Bitbucket, Linux, MacOS, VIm.</p>'
          ]
        }
      ]
    },
    error: {
      citation: '"<i>[…] only knowledge frees man, only through knowledge is man free and in being free: he can aspire to a better condition of life for himself and all his fellow men. […]"<br />- Enéas Carneiro</i>',
      codes: {
        '404': 'Page not found.'
      },
      defaultErrorMessage: 'Internal server error.'
    },
    blog: {
      title: 'Blog',
      titleDescription: 'My articles.',
      description: 'I have been writing articles on Medium. Below you can check my latest posts.',
      notFoundTitle: 'Post not found.',
      notFoundDescription: 'The post you are looking for does not exist.',
      comeBack: '← Back to blog',
      loading: 'Loading posts…',
      seeOriginalPost: 'See original post on Medium →'
    }
  }
}
