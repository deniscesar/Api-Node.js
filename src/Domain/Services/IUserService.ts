import BaseService = require("./Base");
import IUserModel = require("./../Models/IUserModel");

interface IUserService extends BaseService<IUserModel>
{
    Login: (login: IUserModel, callback: (error: any, result: IUserModel) => void) => void;
}

export = IUserService;