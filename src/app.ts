import express from 'express';

const server = express();

server.listen("4000", () => console.log(`Listening on http://localhost:4000`));