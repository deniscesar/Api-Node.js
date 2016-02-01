import jwt = require("jsonwebtoken");
import IUserService = require("./../../Domain/Services/IUserService");
import IUserModel = require("./../../Domain/Models/IUserModel");

import IUnitOfWork = require("./../../Infraestructure/UnitOfWork/IUnitOfWork");
import UnitOfWork = require("./../../Infraestructure/UnitOfWork/UnitOfWork");

class UserService implements IUserService {
    private _db: IUnitOfWork;

    constructor() {
        this._db = new UnitOfWork();
    }

    Get(callback: (error: any, result: any) => void) {
        this._db.User.Get(callback);
    }

    GetById(id: string, callback: (error: any, result: IUserModel) => void) {
        this._db.User.GetById(id, callback);
    }

    Insert(item: IUserModel, callback: (error: any, result: any) => void) {

        if(item.Login != '' && item.Password != '' && item.Role != '')
        {
            this._db.User.Insert(item, callback);
        }
        else
        {
            callback({ error: 'Erro na validação.' }, null);
        }
    }

    Update(id: string, item: IUserModel, callback: (error: any, result: any) => void) {
        this._db.User.Update(id, item, callback);
    }

    Delete(id: string, callback: (error: any, result: any) => void) {
        this._db.User.Delete(id, callback);
    }

    Login(login: IUserModel, callback: (error: any, result: any) => void) {
        if (login.Login != '' && login.Password != '') {
           
            var response = (error: any, result: IUserModel) =>{
                if(!result)
                {
                    callback({ message: 'Usuario ou senha invalido.' }, null);
                } 
                else if (login.Login == result.Login && login.Password == result.Password) 
                {
                    var token = jwt.sign({ 
                        Login: result.Login,
                        Password: result.Password,
                        Role: result.Role }, 'shhhhh', { expiresIn: "1d" });
                    callback(null, {access_token: token});
                }
                else
                {
                    callback({ message: 'Usuario ou senha invalido.' }, null);
                }
            }
            this._db.User.Login(login, response);
        }
        else {
            callback({ message: 'Usuario ou senha invalido.' }, null);
        }
    }
}

export = UserService