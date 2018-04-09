# Razzle React Loadable Example

## Como usar:
- Clone o projeto, rode um `npm install`;

## Comandos:
- Desenvolvimento: "npm run start:dev"
- Produção em desenvolvimento: "npm run start:prod"
- Produção: "npm run start"
- Build: "npm run build"

## Como faz para pré carregar o state da aplicação?
- Basta em qualquer componente que seja uma página, você adicionar essa função estática. Com ela o servidor irá mapear um JSON no mesmo formato que voc passou que fica acessível por meio da variável global: `window.__PRELOADED_STATE__`
```js
  static async getInitialData() {
    return {
      tweets: await fetch('https://twitelum-api.herokuapp.com/tweets').then((response) => response.json())
    }
  }
```

## O que esse boilerplate suporta?

- [x] Componentes Assícronos
- [x] Redux
- [X] Server Side Render
- [ ] Service Worker para Cache Offline

## Inspirações:
Esse projeto é uma evoluço do https://github.com/omariosouto/react-charger, que utiliza o excelente sistema de build do https://github.com/jaredpalmer/razzle/.
O intuito é oferecer uma estrutura minima para qualquer projeto que precise de Server Render com React e que seja fácil de extender.

## Extendendo com novas configurações

Caso queira extender este boilerplate com algo como o Styled Components, recomendo fortemente olhar a lista de exemplos no Razzle e replicar em seu projeto: https://github.com/jaredpalmer/razzle/tree/next/examples 

> OBS: O React Charger por padrão cobre boa parte das coisas mais usadas em projetos react, se tiver alguma sugestão mande um Pull Request :)
