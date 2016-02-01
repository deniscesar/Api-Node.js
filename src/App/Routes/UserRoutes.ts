import express = require("express");
import UserController = require("./../Controllers/UserController");
import auth = require('./../Config/Auth');

var router = express.Router();

class User 
{
    private _controller: UserController;
    
    constructor () 
    {
        this._controller = new UserController();   
    }
    
    get routes () 
    {
        var controller = this._controller;
        router.get("/user", controller.retrieve);
        router.get("/user/:_id", controller.findById);
        router.post("/user", auth.authorize, controller.create);
        router.put("/user/:_id", auth.isAdmin, controller.update);
        router.delete("/user/:_id", controller.delete);
        router.post("/login", controller.login);
        
        return router;
    }
}

Object.seal(User);
export = User;