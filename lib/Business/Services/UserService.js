var jwt = require("jsonwebtoken");
var UnitOfWork = require("./../../Infraestructure/UnitOfWork/UnitOfWork");
var UserService = (function () {
    function UserService() {
        this._db = new UnitOfWork();
    }
    UserService.prototype.Get = function (callback) {
        this._db.User.Get(callback);
    };
    UserService.prototype.GetById = function (id, callback) {
        this._db.User.GetById(id, callback);
    };
    UserService.prototype.Insert = function (item, callback) {
        if (item.Login != '' && item.Password != '' && item.Role != '') {
            this._db.User.Insert(item, callback);
        }
        else {
            callback({ error: 'Erro na validação.' }, null);
        }
    };
    UserService.prototype.Update = function (id, item, callback) {
        this._db.User.Update(id, item, callback);
    };
    UserService.prototype.Delete = function (id, callback) {
        this._db.User.Delete(id, callback);
    };
    UserService.prototype.Login = function (login, callback) {
        if (login.Login != '' && login.Password != '') {
            var response = function (error, result) {
                if (!result) {
                    callback({ message: 'Usuario ou senha invalido.' }, null);
                }
                else if (login.Login == result.Login && login.Password == result.Password) {
                    var token = jwt.sign({
                        Login: result.Login,
                        Password: result.Password,
                        Role: result.Role }, 'shhhhh', { expiresIn: "1d" });
                    callback(null, { access_token: token });
                }
                else {
                    callback({ message: 'Usuario ou senha invalido.' }, null);
                }
            };
            this._db.User.Login(login, response);
        }
        else {
            callback({ message: 'Usuario ou senha invalido.' }, null);
        }
    };
    return UserService;
})();
module.exports = UserService;
//# sourceMappingURL=UserService.js.map