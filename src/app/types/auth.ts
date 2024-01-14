import { ICustomer } from './customer';

type ILoginResponse = {
    user: ICustomer;
    accessToken: string;
};

type ILogin = {
    email: string;
    password: string;
};

type IRegister = {
    email: string;
    password: string;
    name: string;
    phone: string;
};

export { ILogin, ILoginResponse, IRegister };
