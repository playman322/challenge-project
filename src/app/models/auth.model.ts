export interface AuthToken {
  access_token: string;
}

export enum MessageBanner {
  LoginSuccess = "Logged In!",
  AuthSuccess = "Your registration is successful!",
  LoginError = "Login failed!",
  AuthError = "Registration Failed!",
}

export enum MessageType {
  Success = "Success",
  Error = "Error",
  Info = "Info",
  Warning = "Warning",
}
