# Shared-form-app

This repository holds the shared front-end components for the insurance checker and triage tool.

## Instructions

### Commands to run

Initial:
```
npm install               #install dependencies

```

To test:
```
npm test
```


To run local (port 3000):
```
npm start
```


To build:
```
npm run build
```

To build (& view your prod artefacts on port 8000):
```
npm run build
python3 -m http.server

```

### Updating shared-form-app npm package

This repository is to be used as a npm package in other projects. There are two entry points to the app - `index.tsx` which is used by `npm start` in order to serve up the UI locally, and `main.ts` which is used as an entry point for the npm package exports

When you make changes to this library, in order to update the npm version so these changes can be used elsewhere, please follow these steps:

1. Login as the `cjc-access-to-justice` user to npm by using `npm login`. You can get the correct login credentials by contacting one of the developers on the project.
2. Bump up the `version` in `package.json`
3. Run `npm publish`

To receive the changes elsewhere, now you can just update the `shared-form-app` npm package.

## Tech

- React
- Typescript
- Jest-Enzyme
