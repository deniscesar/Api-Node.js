var Mongoose = require('mongoose');
var Constants = require('./../../App/config/constants');
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', function () {
            console.log('Conectado ao mongodb.');
        });
        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
})();
DataAccess.connect();
module.exports = DataAccess;
//# sourceMappingURL=DataAccess.js.map