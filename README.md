# VueJS 3 Composition API

This stack is using Vue 3 + TypeScript + Vite

## Initial project

initial project with template
```bash
npm init vite -- --template vue-ts vuejs3-composition-api
```

```bash
# install dependencies
cd vuejs3-composition-api
npm install
#run project
npm run dev
```

DateTimes with Luxon : https://moment.github.io/luxon/#/install
```bash
npm i --save-dev @types/luxon
```
The state management solution for Vue.js 3 Errata: Installing Pinia :https://pinia.vuejs.org/
```bash
npm install pinia
```

Express is a minimal and flexible Node.js web application framework : https://expressjs.com/
```bash
npm i --save-dev @types/express
```

CORS is a node.js package for providing a Connect/Express middleware
```bash
npm i --save-dev @types/cors
```

ts-node is TypeScript execution and REPL for node.js : https://typestrong.org/ts-node/
```bash
npm install ts-node
```

if cannot execute and found this error `ERR_UNKNOWN_FILE_EXTENSION` you can remove in package.json

```json
{
    ...
    "type": "module",
}
```
and execute with command

```bash
ts-node --esm .\src\server\index.ts
```

Install Vue Router

```
npm install vue-router
```

Markdown

```bash
npm install marked
npm install marked-highlight
npm install highlight.js
```


`Lodash` A modern JavaScript utility library delivering modularity, performance & extras. https://lodash.com/
```bash
npm install lodash
```
`Body Parser` on backend server for using at `app.use(bodyParser.json())`
```bash
npm install body-parser@1.19 @types/body-parser@1.19 --dev
```

to check syntax and running only file .ts

```bash
npx ts-node-esm src/validation.ts
```

## Auhentication and Authorization

prepare to install dependencies

```bash
npm install cookie-parser@1.4.0 @types/cookie-parser@1.4.0 --include=dev

npm install jsonwebtoken@8.5.1 @types/jsonwebtoken@8.5.1 --include=dev

npm install express-session@1.17.3 @types/express-session@1.17.3 --include=dev
```