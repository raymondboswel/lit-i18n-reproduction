# Lit i18n reproduction
You probably need to install nx globally, `npm i -g nx@latest`

From the root directory:
> cd libs/lit-library
> npm i

> cd ../../
> npm i
> nx affected -t lint,test,build --parallel=3 --no-cache   

You can uncomment the import in libs/lit-library/src/lib/child.ts 
to see the tests running without error. 

You can also serve the application with `nx serve lit-repro` to see the translation showing (should show 'Skate Park')

# lit-library

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build lit-library` to build the library.

## Running unit tests

Run `nx test lit-library` to execute the unit tests via [Jest](https://jestjs.io).
