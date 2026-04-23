# Imersão Tech | App Controle de Gastos

Aplicação desenvolvida na **Imersão Tech** com **Angular** para controle de gastos pessoais.

## Objetivo

O projeto permite registrar e visualizar gastos, ajudando no acompanhamento financeiro do dia a dia.

## Tecnologias

- Angular 21
- TypeScript
- SCSS
- Vitest (testes unitários)

## Pré-requisitos

- Node.js (recomendado: versão LTS)
- npm
- Angular CLI (opcional, se quiser usar comandos `ng` globalmente)

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Abra no navegador:

```text
http://localhost:4200
```

## Scripts principais

### Subir aplicação em modo desenvolvimento

```bash
npm start
```

### Rodar testes unitários

```bash
npm test
```

### Gerar build de produção

```bash
npm run build
```

## Estrutura base

- `src/app/modules/home`: módulo principal da tela inicial
- `src/app/modules/home/componentes/gasto`: componente de item de gasto
- `src/app/modules/home/componentes/historico`: componente de histórico de gastos

## Comandos úteis do Angular CLI

Gerar um novo componente:

```bash
ng generate component nome-do-componente
```

Ver todos os schematics disponíveis:

```bash
ng generate --help
```

## Referências

- [Angular CLI](https://angular.dev/tools/cli)
- [Documentação oficial do Angular](https://angular.dev)
