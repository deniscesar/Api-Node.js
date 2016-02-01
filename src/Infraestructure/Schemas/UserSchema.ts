import DataAccess = require("./../DataContext/DataAccess");
import IUserModel = require('./../../Domain/Models/IUserModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

	static get schema() {
		var schema = new mongoose.Schema ({
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
	}

}
var schema = mongooseConnection.model<IUserModel>('User', UserSchema.schema, 'User');
export = schema;