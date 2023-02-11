export type TAuthToken={
  accessToken:string;
  refreshToken?:string
}

export type TAuthPayload = {
  email:string;
  password:string;
}