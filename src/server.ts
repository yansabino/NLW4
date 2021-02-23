import express, { response } from 'express'

const app = express()

app.get("/users", (request, response) => {
    return response.json({message: "olaaaa NLW"})
})

app.post("/", (request, response) => {
    return response.json({message: "os dados foram salvos com sucesso"})
})

app.listen(4444, () => console.log("Server is running!"))