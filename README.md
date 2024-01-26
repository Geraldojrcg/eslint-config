## ESLint configuration for my personal projects

ESLint and prettier configuration all in one

## How to use

### instalation

#### npm

`npm install --save-dev @geraldojrcg/eslint-config`

#### yarn

`yarn add -D @geraldojrcg/eslint-config`

#### bun

`bun add -D @geraldojrcg/eslint-config`

### ESLint config file

Add the eslint-config and prettier in your eslint config file inside `extends` list

```js
module.exports = {
  extends: ["@geraldojrcg/eslint-config", "prettier"],
};
```

### VSCode configuration

Change your vscode configuration creating a local .vscode/settings.json file to enable format on save hook using eslint instead of prettier

```js
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
}
```
