import express from "express";
import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Ola Mundo"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuario salvo com sucesso!"
    })
});

app.listen(3333, () => console.log("Server is running on port 3333"))