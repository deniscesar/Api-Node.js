import IUnitOfWork = require("./IUnitOfWork");
import IUserRepository = require("./../../Domain/Repositories/IUserRepository");
import UserRepository = require("./../Repositories/UserRepository");
import UserSchema = require("./../Schemas/UserSchema");

class UnitOfWork implements IUnitOfWork {
    private _user: IUserRepository;

    constructor() {

    }

    get User(): IUserRepository {
        if (this._user == null)
            this._user = new UserRepository(UserSchema);

        return this._user;
    }
}

export = UnitOfWork;