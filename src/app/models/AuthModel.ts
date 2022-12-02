import BaseModel from "./BaseModel";

class AuthModel extends BaseModel {
    public username?: string;
    public password?: string;
    public errUsername?: string;
    public errPassword?: string;
    public active_token?: string;
}

export default AuthModel;