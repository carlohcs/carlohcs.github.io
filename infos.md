# Como o Jekyll Trabalha
Front matter - Definição estrutural advinda do YAML, onde você define dados por chave: valor
`
---
layout: default
---
`

Liquid Templates - Engine de template que permite inserir variáveis e outras informações no escopo do HTML

`
{% for post in site.posts %}
{{ content }}
`

Conceitos básicos do Liquid: https://help.shopify.com/themes/liquid/basics
Github Liquid: https://github.com/Shopify/liquid

# Como colocar HTML dentro do markdown
<tag markdown="1">
https://lodge.statamic.com/discussions/1166-html-inside-markdown
