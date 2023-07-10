This is a API starter is bootstrapped with [`create-api-starter`](https://www.npmjs.com/package/create-api-starter).

## Getting Started

Install npm packages and run the development server:

```
npm install
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## :genie: Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                                           |
| :----------------- | :--------------------------------------------------------------- |
| `npm install`      | Installs dependencies                                            |
| `npm run dev`      | Starts local dev server at `http://localhost:5000`               |
| `npm run build`    | Build your production site to `./build/`                         |
| `npm run start`    | Preview your build locally, before deploying                     |
| `npm run lint`     | Shows linting errors                                             |
| `npm run lint-fix` | Fixes linting errors                                             |
| `npm run json-db`  | Starts JSON DB with [API Endpoints](#json-db-crud-api-endpoints) |

**_Run `npm run dev` and `npm run json-db` concurrently (in separate terminals) from root of the project for the API and JSON DB to be exposed._**

## json-db CRUD API Endpoints

| HTTP Method | Endpoint |
| :---------- | :------- |
| GET         | /users   |
| GET         | /users/1 |
| POST        | /users   |
| PUT         | /users/1 |
| PATCH       | /users/1 |
| DELETE      | /users/1 |

_For filtering, sorting, pagination etc. refer [json-server](https://www.npmjs.com/package/json-server)_
