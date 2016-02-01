import express = require("express");
import IUnitOfWork = require("./../../Business/UnitOfWork/IUnitOfWork");
import UnitOfWork = require("./../../Business/UnitOfWork/UnitOfWork");
import IUserModel = require("./../../Domain/Models/IUserModel");

class UserController
{
    create(req: express.Request, res: express.Response): void 
    {
        try 
        {                             
            var user: IUserModel = <IUserModel>req.body;
            var service = new UnitOfWork();
            
            service.User.Insert(user, (error, result) => {
                if (error){
                    res.status(400);
                    res.send(error);
                }
                else
                {
                    res.status(200);
                    res.send(result);
                }
            });            
        }
        catch (e)  
        {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    }
    
    update(req: express.Request, res: express.Response): void 
    {
        try 
        {
            var user: IUserModel = <IUserModel>req.body;
            var _id: string = req.params._id;
            var service = new UnitOfWork();
            
            service.User.Update(_id, user, (error, result) => {
                if(error) 
                    res.send(error);
                else 
                    res.send(result);
            });   
        }
        catch (e)  
        {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    }
    
    delete(req: express.Request, res: express.Response): void 
    {
        try 
        {  
            var _id: string = req.params._id;
            var service = new UnitOfWork();
            
            var callback = (error: any, item: IUserModel) => {
                if(item == null) {
                    res.send({ "error": "Registro não encontrado" })
                }
                else
                {
                    service.User.Delete(_id, (error, result) => {
                        if(error) 
                            res.send(error);
                        else 
                            res.send(item);
                    });   
                }
            };

            service.User.GetById(_id, callback);
        }
        catch (e)  
        {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    }
    
    retrieve(req: express.Request, res: express.Response): void 
    {
        try 
        {   
            var service = new UnitOfWork();
            
            service.User.Get((error, result) => {
                if(error) 
                    res.send(error);
                else 
                    res.send(result);
            });   
        }
        catch (e)  
        {
            console.log(e);
            res.send("Ocorreu um erro na requisição");
        }
    }
    
    findById(req: express.Request, res: express.Response): void 
    {
        try 
        {
            var _id: string = req.params._id;
            var service = new UnitOfWork();
            
            service.User.GetById(_id, (error, result) => {
                if(error) 
                    res.send(error);
                else 
                    res.send(result);
            });   
        }
        catch (e)  
        {
            console.log(e);
            res.send("Ocorreu um erro na requisição");    
        }
    }

    login(req: express.Request, res: express.Response): void
    {
        try
        {
            var login: IUserModel = <IUserModel>req.body;
            var service = new UnitOfWork();

            service.User.Login(login, (error, result) => {
                if (error)
                {
                    res.status(400);
                    res.send(error);
                }
                else
                {
                    res.status(200);
                    res.send(result);
                }
            });  
        }
        catch (e)
        {
            res.send("Ocorreu um erro na requisição");    
        }
    }

}

export = UserController;