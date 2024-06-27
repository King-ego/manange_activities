import "reflect-metadata";
import express from "express";
import cors from "cors";
import AppDataSource from "@shared/AppDataSource";
import routers from "@shared/routes";

import "@shared/container";

const app = express();

AppDataSource.initialize().then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routers);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Error initializing data source", error);
});
