import IUnitOfWork = require("./IUnitOfWork");
import IUserService = require("./../../Domain/Services/IUserService");
import UserService = require("./../Services/UserService");

class UnitOfWork implements IUnitOfWork {
    private _user: IUserService;

    constructor() {

    }

    get User(): IUserService {
        if (this._user == null)
            this._user = new UserService();

        return this._user;
    }
}

export = UnitOfWork;