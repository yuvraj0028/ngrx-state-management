# Ngrx State Management

A simple movie rating angular website to understand concepts of ngrx state management.

- ## NgRx Store

  1. Centralized store for managing application state.
  2. Provides a single source of truth accessible from any component.
  3. Utilizes RxJS observables to derive state.

- ## NgRx Actions, Effects, and Selectors:

  - ### Actions

    1. Define different events or changes in the application.
    2. Represent user interactions, API responses, etc.
    3. Dispatched by components or effects to trigger state changes.

  - ### Selectors

    1. Query the state consistently and efficiently.
    2. Extract specific data from the store (e.g., rated movies, average rating).
    3. Used in components to retrieve data.

  - ### Effects
    1. Isolate side effects (e.g., API calls) from components.
    2. Connect observables of actions to the store.

- ## Benefits
  1. Predictable and scalable state management.
  2. Clean separation between components and side effects.

## Related

I have explained ngrx state management thoroughly in my [Medium Article](https://github.com/matiassingers/awesome-readme)

## Run Locally

Clone the project

```bash
  git clone https://github.com/yuvraj0028/ngrx-state-management.git
```

Go to the project directory

```bash
  cd ngrx-state-management
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng serve
```

## Tech Stack

**Angular, Ngrx-Store**

## Acknowledgements

- [Angular Docs](https://angular.dev/overview)
- [Ngrx Docs](https://ngrx.io/guide/store)

![ngrx](https://ngrx.io/assets/images/badge.svg)
