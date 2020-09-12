# Mongo Video Review

Projeto da Pós de Especialização em Desenvolvimento Web. Ele consiste em um banco mongo para que Usuários possam cadastrar filmes e séries que gostem para que ele e outros usuários possam avaliar e dar feedback. Mais detalhes podem ser conferidos na documentação na pasta `/docs`.

## Equipe

- [Elton Leite](https://github.com/borelanjo);
- [Juan Carlos](https://github.com/juancarllos88);
- [Fagner Limna](https://github.com/fagnerlima).

## Instruções

Esse projeto foi feito utilizando docker + mongodb. Casos você tenha o docker e o docker-compose instalado você pode executar o comando:

```bash
docker-compose up -d
```

Esse comando iniciará um container mongo e executará o conteúdo do `mongo-init.js` que criarar os usuários administradores `borelanjo`, `juancarllos88` e `fagnerlima`. Além disso ele criará as collections: `usuario`, `video` e  `avaliacao`.

Caso você não tenha o docker instalado você pode executar o `mongo-init.js` em sua própria instância do mongo.

## Consultas

Existem scripts de exemplos de consultas na pasta `migrations`. Eles não são rodados automaticamente e server de referência para saber o que uma futura aplicação rodaria para obter alguns resultados.