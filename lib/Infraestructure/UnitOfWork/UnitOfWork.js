var UserRepository = require("./../Repositories/UserRepository");
var UserSchema = require("./../Schemas/UserSchema");
var UnitOfWork = (function () {
    function UnitOfWork() {
    }
    Object.defineProperty(UnitOfWork.prototype, "User", {
        get: function () {
            if (this._user == null)
                this._user = new UserRepository(UserSchema);
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    return UnitOfWork;
})();
module.exports = UnitOfWork;
//# sourceMappingURL=UnitOfWork.js.map