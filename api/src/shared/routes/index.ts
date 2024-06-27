import { Router } from 'express';
import UsersRoutes from "@modules/users/routes/users.routes";

const routers = Router();

routers.use("/users", UsersRoutes);

/*
routers.get("/", (req, res) => res.send("Hello World"));
*/

export default routers;