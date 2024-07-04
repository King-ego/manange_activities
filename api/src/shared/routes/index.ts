import { Router } from 'express';
import UsersRoutes from "@modules/users/routes/users.routes";
import GoogleSessionRoutes from "@modules/users/routes/google.session.routes";

const routers = Router();

routers.use("/users", UsersRoutes);
routers.use("/sessions/google", GoogleSessionRoutes);

/*
routers.get("/", (req, res) => res.send("Hello World"));
*/

export default routers;