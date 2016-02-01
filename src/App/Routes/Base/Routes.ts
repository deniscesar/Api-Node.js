import express = require("express");
import UserRoute = require("./../UserRoutes");

var app = express();

class BaseRoutes 
{
    get routes() 
    {
        app.use("/", new UserRoute().routes);
        //app.use("/", new SpartanRoutes().routes);
        return app;
    }
}

export = BaseRoutes;