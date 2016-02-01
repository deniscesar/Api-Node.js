var UserRepository = (function () {
    function UserRepository(model) {
        this._db = model;
    }
    UserRepository.prototype.Get = function (callback) {
        this._db.find({}, callback);
    };
    UserRepository.prototype.GetById = function (id, callback) {
        this._db.findById(id, callback);
    };
    UserRepository.prototype.Insert = function (item, callback) {
        this._db.create(item, callback);
    };
    UserRepository.prototype.Update = function (id, item, callback) {
        this._db.update({ _id: id }, item, { runValidators: true }, function (err, res) { return callback(err, item); });
    };
    UserRepository.prototype.Delete = function (id, callback) {
        this._db.remove({ _id: id }, function (err) { return callback(err, null); });
    };
    UserRepository.prototype.Login = function (login, callback) {
        this._db.findOne({ Login: login.Login, Password: login.Password }, callback);
    };
    return UserRepository;
})();
module.exports = UserRepository;
//# sourceMappingURL=UserRepository.js.map