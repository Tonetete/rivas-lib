A simple library componets for testing purposes for lottoland code challenge.

# Rivas-lib

## A simple library component for lottoland code challenge.

This library is composed of several components to be used in your projects. Now let's describe the components implemented so far:

### Dropdown

| Props      | Type                                  | Description                                    |
| ---------- | ------------------------------------- | ---------------------------------------------- |
| forLabel   | string                                | htmlFor attribute for the label                |
| titleLabel | string                                | label value                                    |
| options    | [{ display: string; value: string; }] | options for the select to be populated         |
| onChangeCb | () => void                            | callback called whenever an option is selected |

### Table

| Props   | Type                            | Description                   |
| ------- | ------------------------------- | ----------------------------- |
| columns | [{id: string; title: string; }] | columns for the table headers |
| rows    | [{[key: string]: any }]         | rows for the table rows       |

## Requirements.

NodeJS 12.x previously installed.

## How to run in local.

```sh
npm install
npm run storybook-yarn
```

### Build.

```sh
npm run build
```

### Test.

```sh
npm run test
```

### WARN: Upgrade version package before make some push from main branch.

```sh
npm version <major|minor|patch>
```
