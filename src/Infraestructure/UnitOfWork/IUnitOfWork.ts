import IUserRepository = require("./../../Domain/Interfaces/Repositories/User");

interface IUnitOfWork {
    User: IUserRepository;
}

export = IUnitOfWork;