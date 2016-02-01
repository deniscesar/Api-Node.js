var UnitOfWork = require("./../../Business/UnitOfWork/UnitOfWork");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.create = function (req, res) {
        try {
            var user = req.body;
            var service = new UnitOfWork();
            service.User.Insert(user, function (error, result) {
                if (error) {
                    res.status(400);
                    res.send(error);
                }
                else {
                    res.status(200);
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    };
    UserController.prototype.update = function (req, res) {
        try {
            var user = req.body;
            var _id = req.params._id;
            var service = new UnitOfWork();
            service.User.Update(_id, user, function (error, result) {
                if (error)
                    res.send(error);
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    };
    UserController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var service = new UnitOfWork();
            var callback = function (error, item) {
                if (item == null) {
                    res.send({ "error": "Registro não encontrado" });
                }
                else {
                    service.User.Delete(_id, function (error, result) {
                        if (error)
                            res.send(error);
                        else
                            res.send(item);
                    });
                }
            };
            service.User.GetById(_id, callback);
        }
        catch (e) {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    };
    UserController.prototype.retrieve = function (req, res) {
        try {
            var service = new UnitOfWork();
            service.User.Get(function (error, result) {
                if (error)
                    res.send(error);
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    };
    UserController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var service = new UnitOfWork();
            service.User.GetById(_id, function (error, result) {
                if (error)
                    res.send(error);
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    };
    UserController.prototype.login = function (req, res) {
        try {
            var login = req.body;
            var service = new UnitOfWork();
            service.User.Login(login, function (error, result) {
                if (error) {
                    res.status(400);
                    res.send(error);
                }
                else {
                    res.status(200);
                    res.send(result);
                }
            });
        }
        catch (e) {
            res.send("Ocorreu um erro na requisição");
        }
    };
    return UserController;
})();
module.exports = UserController;
//# sourceMappingURL=UserController.js.map