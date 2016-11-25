---
layout: projects
title: Projetos
author: Carlos Henrique Carvalho de Santana
permalink: /projetos
jobs:
  - title: <span></span>[UOL Música Deezer - Ouça mais de 40 milhões de músicas](http://deezer.musica.uol.com.br) <span class="faded">Plataforma</span>
    description: >
      O UOL Música Deezer é a junção da antiga **Rádio UOL** com a plataforma
      de áudio sob demanda global **Deezer**.

      A plataforma provê 40 milhões de músicas aos seus usuários pelo website ou pelo app da Deezer.
    features: >
      - Player de música;

      - Controle de criação e edição de playlists;

      - Compartilhamento de músicas, álbuns, artistas, playlists;

      - Favoritamento de músicas;

      - Conteúdo controlado por editoria;
    nerdFeatures: >
      - JavaScript puro (Vanilla), jQuery.js, Backbone.js, Marionette.js, Underscore.js

  - title: <span></span>[InterAcesso - Serviço online para gestão de condomínios](http://interacesso.interport.com.br) <span class="faded">Institucional e ERP</span>
    description: >
      A proposta da plataforma é a de atender a necessidade das pessoas que convivem no ambito de um condomínio.
      Entre tantas tarefas e itens a se tomar providência, a plataforma garante trazer agilidade e conforto para essas tomadas de decisões.


      Foi desenvolvido o site institucional e o ERP, responsável por gerenciar todo o negócio.
    features: >
      - Layout responsivo;

      - Possui versionamento de projeto no BitBucket;

      - Hospedado na Amazon AWS;
    nerdFeatures:
      - JavaScript puro (Vanilla), jQuery.js, PHP, Laravel, MySql

  - title: <span></span>[Vita do Brasil - Gestão para médicos e sociedades médicas](http://vitadobrasil.com.br/) <span class="faded">Institucional e ERP</span>
    description: >
      A Vita do Brasil oferece soluções aos médicos e sociedades médicas, em
      gestão operacional, contábil, financeira e administrativa.

      É nesse conceito, que para gerenciar todas essas operações, foi
      desenvolvido um ERP, para controle de finanças, pessoas, administração e
      outros.
    features: >
      - Possui rotinas de backup de sistema e de banco de dados;

      - Criação de RPS e emissão de nota fical eletrônica para as prefeituras de São Paulo e Taboão;

      - Controle de eventos, cadastros, profissões, pendências entre outros.
    nerdFeatures: >
      - JavaScript puro (Vanilla), jQuery.js, PHP, MySql
    screenshots1:
      name: Site
      folder: vita-institucional
      thumbs:
        - 1.jpg
        - 2.jpg
        - 3.jpg
    screenshots2:
      name: ERP 
      folder: vita-erp
      thumbs:
        - 1.jpg
        - 2.jpg
        - 3.jpg

  - title: Aduet - Agência de encontros <span class="faded">ERP</span>
    description: >
      A agência de encontros Aduet tinha por objetivo promover o encontro de
      pessoas. Era necessário gerenciar estes encontros. Para isso, o cadastro das
      pessoas eram feitos e os compromissos organizados.

      Foi desenvolvido o ERP, responsável por gerenciar toda a regra de negócio.
    features: >
      - Cadastro de pessoas e suas características para comparação de perfil.

      - Gerenciamento de marcação de encontros;

      - Geração de contrato.
    nerdFeatures: >
      - JavaScript puro (Vanilla), jQuery.js, PHP, MySql
  - title: Ursoland - A rede social para ursos <span class="faded">Rede Social</span>
    description: >
      O Ursoland era uma rede social para o público bear. Desenvolvido por
      volta de 6 meses, rapidamente alcançou público e uma gama de serviços que
      eram ofertados aos usuários.

      Foi desenvolvido o site institucional e o ERP, responsável por gerenciar
      toda a regra de negócio.
    features: >
      - Notificação de mensagens, piscadas e chats;

      - Pacote de assinaturas e controle de renovação e vencimentos;

      - Busca interativa, controle de usuários online, aprovação de conteúdo,calendários de festas, etc..
    nerdFeatures: >
      - JavaScript puro (Vanilla), jQuery.js, PHP, MySql

  - title:  Trabalho de Conclusão de Curso da ETEC <span class="faded">TCC</span>
    description: >
      O TCC foi um dos projetos mais produtivos a se desenvolver. O projeto
      consistia em apresentar um site de notícias sobre jogos no qual os usuários
      também podiam criar e publicar artigos de interesses comuns.


      Foi desenvolvido o portal principal e o ERP, que se encarregava de gerenciar o conteúdo.
    features: >
      - Eleito o melhor trabalho da turma;

      - O sistema de gerenciamento de conteúdo foi desenvolvido em C#;

      - Integração com o banco de dados SQL Server;

      - Possuia perfil de usuário, ranking, publicação e gerenciamento de artigos,
      enquetes, publicidade, etc.
    nerdFeatures: >
      - JavaScript puro (Vanilla), jQuery.js, PHP, MySql

---

# Projetos

- **[Missão pessoal](https://missaopessoal.com.br)**
> “Crie sua missão pessoal agora mesmo! Todos precisam ter um rumo na vida e a
missão pessoal faz parte disso. Crie-a agora!”

Com essa chamada, o projeto é uma ferramenta que auxilia as pessoas a criarem
suas respectivas missões pessoais e compartilhá-las no site. Tudo isso
gratuitamente.

# Sites, sistemas e afins

{% for job in page.jobs %}

<div class="project" markdown="1">
- **{{ job.title  }}**

{{ job.description }}

<a href="#" class="project--show-more button">
  Me mostre mais
</a>

<div class="project--features--container project--features--container__hide" markdown="1">

**Caracteristícas**

{{ job.features }}

{% if job.nerdFeatures %}

**Para nerds**

{{ job.nerdFeatures }}
{% endif %}

{% if job.screenshots1 %}

**ScreenShots**

**{{ job.screenshots1.name }}**

<ul class="project--features--screenshot">
{% for screenshot in job.screenshots1.thumbs %}
  <li class="project--features--screenshot--item">
    <a href="project--features--screenshot--item--link">
      <img src="/images/projects/{{ job.screenshots1.folder }}/thumb/{{ screenshot }}" markdown="1" />
    </a>
  </li>
{% endfor %}
</ul>

{% if job.screenshots2 %}

**{{ job.screenshots2.name }}**

<ul class="project--features--screenshot">
{% for screenshot in job.screenshots2.thumbs %}
  <li class="project--features--screenshot--item">
    <a href="project--features--screenshot--item--link">
      <img src="/images/projects/{{ job.screenshots2.folder }}/thumb/{{ screenshot }}" markdown="1" />
    </a>
  </li>
{% endfor %}
</ul>

{% endif %}

{% endif %}
</div>
</div>

---
{% endfor %}
