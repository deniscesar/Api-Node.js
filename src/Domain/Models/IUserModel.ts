import mongoose = require('mongoose');

interface IUserModel extends mongoose.Document {
	Login: string;
	Password: string;
	Role: string;
}

export = IUserModel;