import { Router } from 'express';

const routers = Router();

routers.get("/", (req, res) => res.send("Hello World"));

export default routers;