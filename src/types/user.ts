export interface IUser {
  id?: undefined;
  username: string;
  password: string;
  confirmPassword: string;
  realName: string;
  sex: undefined;
  telephone: string;
  email: string;
  role: undefined;
  remark: string;
  headImg: string;
  gameList: Array<string> | undefined;
}
