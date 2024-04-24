/* BIBLIOTECA DE REQUISIÇÕES HTTP

- SEMPRE SE CRIA UMA PASTA QUANDO A BIBLIOTECA É EXTERNA.
*/

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000"
})