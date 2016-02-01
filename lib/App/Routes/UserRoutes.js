var express = require("express");
var UserController = require("./../Controllers/UserController");
var auth = require('./../Config/Auth');
var router = express.Router();
var User = (function () {
    function User() {
        this._controller = new UserController();
    }
    Object.defineProperty(User.prototype, "routes", {
        get: function () {
            var controller = this._controller;
            router.get("/user", controller.retrieve);
            router.get("/user/:_id", controller.findById);
            router.post("/user", auth.authorize, controller.create);
            router.put("/user/:_id", auth.isAdmin, controller.update);
            router.delete("/user/:_id", controller.delete);
            router.post("/login", controller.login);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return User;
})();
Object.seal(User);
module.exports = User;
//# sourceMappingURL=UserRoutes.js.map