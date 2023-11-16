# Overview

- This document provides information about React Practice
- [Documentation details](https://docs.google.com/document/d/1EbAyzRCHAkfTcfHfmZjkQ0wwMqUAxY0BO4Yk0B55Gs0/edit#heading=h.ar0k1bmftkqn)
- Deploy link: [link](https://react-big-practice-ngocnguyen.vercel.app/)
- Storybook Deploy link: [link](https://big-practice-ngocnguyenquang.vercel.app/?path=/story/components-button--default)

## Table of Contents

- [Main app features](#main-app-features)
- [Targets](#targets)
- [Timeline](#timeline)
- [Tech Stacks](#tech-stacks)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone repository](#clone-repository)
  - [Installation commands](#installation-commands)

## Main app features

- User can view products list
- User can view product details
- User can sort products
  - Sort by price: Low to High
  - Sort by price: High to Low
- User can filter products by categories
- User can search products
- User can add products to cart
- User can remove products out of cart
- User can update quantity of products in cart
- User can checkout and fill shipping form

## Targets

- Apply all React knowledge learned
- Apply Jest and React Testing Library for unit testing
- Unit test coverage should greater than 80%
- Apply SWR for fetching data
- Deploy with Vercel
- Pagespeed score greater than 98 score

## Timeline

- Estimate time: 8 days of working
- Actual time: 20 days of working 

## Tech Stacks

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [React](https://reactjs.org/): A powerful JavaScript library for building user interfaces.
- [TailwindCSS](https://tailwindcss.com/): Tailwind CSS makes it quicker to write and maintain the code of your application
- [Storybook](https://storybook.js.org/): Storybook is a frontend workshop for building UI components and pages in isolation
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects
- [SWR](https://swr.vercel.app/docs/getting-started): SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data
- [Jest](https://jestjs.io/docs/getting-started): Jest is a delightful JavaScript Testing Framework with a focus on simplicity
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): The testing library family of packages helps you test UI components in a user-centric way.
- [React Router](https://reactrouter.com/en/main): Enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.

# Getting Started

### Prerequisites

- Node (v.16.0.0 or higher)
  - Install Node [here](https://nodejs.org/en/)

### Clone repository

- Step 1: Clone repository with SSH

```
git clone git@gitlab.asoft-python.com:ngoc.nguyenquang/react-training.git
```

- Step 2: Go to folder react-training

```
cd react-training
```

- Step 3: Checkout branch

```
git checkout feat/big-practice
```

- Step 4: Go to folder big-practice

```
cd practices/big-practice
```

### Installation Commands

All commands are run from the root of the project, from a terminal:

| **Command**             | **Action**                                   |
| ----------------------- | -------------------------------------------- |
| npm i                   | Installs dependencies                        |
| npm run dev             | Starts local dev server                      |
| npm run build           | Build your production site to `./dist/`      |
| npm run preview         | Preview your build locally, before deploying |
| npm run storybook       | Start Storybook dev at: `localhost: 6006`    |
| npm run build-storybook | Build Storybook                              |
| npm run test            | Start testing                                |
| npm run test:update     | Start testing and update snapshot            |
| npm run lint            | Detect code format error                     |
| npm run lint:fix        | Detect and fix code format error             |
| npm run test            | Run unit tests                               |
| npm run server          | Run json-server at: `localhost: 3000`        |
