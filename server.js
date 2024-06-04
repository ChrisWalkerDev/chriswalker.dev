import express from "express";

const app = express();
const env = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;

app.use(express.static('src'))

app.listen(PORT, () => {
    console.log(`App running on ${PORT} in ${env}`);
});