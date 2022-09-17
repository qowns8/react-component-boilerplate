# react-component-boilerplate

## why use react-component-boilerplate?
when we make web production by react we have to make too many component (sometime we did create similar)
if you are senior you will make again what has already been done 
it solution is isolated component

so i'm composed react-component development template

# develop setting

## recommend yarn berry
this boilerplate developed on yarn berry

project not use pnp but use package cache
i will have plan nodeLiker to pnp (not yet)

always node_modules bigger any other lang package
if you use yarn-barry you can use zero-install and pnp

[how to install yarn](https://yarnpkg.com/getting-started/install)

```shell
#
npm install -g yarn
```
## build

```shell
yarn workspace @react-component-boilerplate/component install
yarn
yarn build:component # bundle to dist
```

## dir structure
monorepo

```
/.github           # git actions ci script
/.husky            # husky working before commit and push for lint, jest
/.yarn             # if you use yarn-berry
/packages          # monorepo   
    /docs              # storybook repo
    /exmaple           # smaple react site repo
      /src
      /package.json 
    /react-component   # real components
        / dist              # build bundle
        /src               # component code you can use scss and typesciprt
          /index.tsx
          /index.scss
        /rollup.config.js # bundler config if use external dependency check it
/.eslintrc
/.gitgnore
/.prettierignore
/.prettierrc      # formatting like semi, line, break
/package.json
```

## test (not yet)

support unit and e2e both

unit test working on [jest](https://jestjs.io/)
e2e test working on [cypress](https://www.cypress.io/)

```shell
#jest
yarn test:component
```

```shell
#e2e 
#testing dir is /example
#end to end test required react-component dist
yarn workspace @react-component-boilerplate/component install
yarn build:component

# move to example site
yarn 
yarn test:e2e
```


## CI rule (not yet)
when we develop software CI is most important thing
this template use git-action
if you do not want ci removed `./github/workflows`

## storybook
`/packages/docs`



