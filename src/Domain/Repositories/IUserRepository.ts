import BaseRepository = require("./Base");
import IUserModel = require("./../Models/IUserModel");

interface IUserRepository extends BaseRepository<IUserModel> {

	Login: (login: IUserModel, callback: (error: any, result: IUserModel) => void) => void;
}

export = IUserRepository;