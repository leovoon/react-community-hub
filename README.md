# React Community Hub

## About this project
A simple app for React developers to search repositories in the [React Community](https://github.com/reactjs). It is built with Vite and React. For state management, it uses Redux ([Redux toolkit](https://redux-toolkit.js.org/rtk-query/api/created-api/overview#api-slice-overview)) combined with [Redux Saga](https://redux-saga.js.org/). For styling, it uses [Pico CSS](https://picocss.com/).

## Demo
[https://react-community-hub.vercel.app/](https://react-community-hub.vercel.app/)

## Folder Structure

```
src/
┣ app <-- Core folder, it contains api services and state management
┣ assets <-- Contains images, fonts, etc.
┣ common <-- Common utilities, helpers, constants, etc.
┣ components <-- Contains components
┣ features <-- Components by features
┣ pages <-- Pages components
┣ styles <-- CSS files
┣ App.tsx <-- Main app component
┣ index.scss
┗ index.tsx <-- This is the entry point of the project
```

## How to run the project:

1. Clone the repo
2. This project uses `bun` as package manager

```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL
```
or if you have npm installed, you can
```bash
npm install -g bun
```

3. Install dependencies

```bash
bun install
```

4. Run the project

```bash
bun dev
```

5. Open the project in your browser at http://localhost:3000

## Build command

```bash
bun run build
```

## Test command

```bash
bun run test
```

## Run the preview build locally

```bash
bun run preview
```
