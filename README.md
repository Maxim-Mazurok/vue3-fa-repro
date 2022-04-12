# Vue 3 defineEmits issue reproduction

1. Run `npm ci`
2. Run `npm run typecheck`
3. Observe error:

   ```text
   src/components/HelloWorld.tsx:12:13 - error TS2604: JSX element type 'FontAwesomeIcon' does not have any construct or call signatures.

   12     return <FontAwesomeIcon icon="clock-rotate-left" />;
                  ~~~~~~~~~~~~~~~


   Found 1 error.
   ```

To fix, replace `ComponentPublicInstance` with `DefineComponent` in `node_modules/@fortawesome/vue-fontawesome/index.d.ts`, like so:

```ts
declare const FontAwesomeIcon: DefineComponent<FontAwesomeIconProps>;
declare const FontAwesomeLayers: DefineComponent<FontAwesomeLayersProps>;
declare const FontAwesomeLayersText: DefineComponent<FontAwesomeLayersTextProps>;
```

---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
