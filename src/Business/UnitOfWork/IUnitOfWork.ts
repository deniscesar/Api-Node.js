import IUser = require("./../../Domain/Services/IUserService");

interface IUnitOfWork {
    User: IUser;
}

export = IUnitOfWork;