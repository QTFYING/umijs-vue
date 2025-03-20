export interface LoginParamsType {
    username: string;
    password: string;
}

export type StateType = {
    currentUser: ILoginUser,
};

export interface ILoginUser {
    username: string;
    realName: string;
    sex: string;
    sexValue: string;
    telephone: string;
    email: number;
    roleCode: string;
    roleValue: string;
    remark: string;
    headImg: number;
}