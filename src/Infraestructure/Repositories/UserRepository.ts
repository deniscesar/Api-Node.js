import IUserModel = require("./../../Domain/Models/IUserModel");
import IUserRepository = require("./../../Domain/Repositories/IUserRepository");
import mongoose = require("mongoose");

class UserRepository implements IUserRepository {
    private _db: mongoose.Model<IUserModel>;

    constructor(model: mongoose.Model<IUserModel>) {
        this._db = model;
    }

    Get(callback: (error: any, result: any) => void) {
        this._db.find({}, callback);
    }

    GetById(id: string, callback: (error: any, result: IUserModel) => void) {
        this._db.findById(id, callback);
    }

    Insert(item: IUserModel, callback: (error: any, result: any) => void) {
        this._db.create(item, callback);
    }

    Update(id: string, item: IUserModel, callback: (error: any, result: any) => void) {
        this._db.update({ _id: id }, item, { runValidators: true }, (err, res) => callback(err, item));
    }

    Delete(id: string, callback: (error: any, result: any) => void) {
        this._db.remove({ _id: id }, (err) => callback(err, null));
    }

    Login(login: IUserModel, callback: (error: any, result: IUserModel) => void) {
        this._db.findOne({ Login: login.Login, Password: login.Password}, callback);
    }
}

export = UserRepository;