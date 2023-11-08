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



