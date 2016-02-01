var UserService = require("./../Services/UserService");
var UnitOfWork = (function () {
    function UnitOfWork() {
    }
    Object.defineProperty(UnitOfWork.prototype, "User", {
        get: function () {
            if (this._user == null)
                this._user = new UserService();
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    return UnitOfWork;
})();
module.exports = UnitOfWork;
//# sourceMappingURL=UnitOfWork.js.map