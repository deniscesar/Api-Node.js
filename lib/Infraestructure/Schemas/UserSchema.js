var DataAccess = require("./../DataContext/DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = new mongoose.Schema({
                Login: {
                    type: String,
                    require: true
                },
                Password: {
                    type: String,
                    require: true
                },
                Role: {
                    type: String,
                    require: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
})();
var schema = mongooseConnection.model('User', UserSchema.schema, 'User');
module.exports = schema;
//# sourceMappingURL=UserSchema.js.map