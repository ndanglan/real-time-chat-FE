import { EAuthToken } from "../variables"

const handleStorageToken = (data: any)=>{
  localStorage.setItem(EAuthToken.REFRESH_TOKEN,data[EAuthToken.REFRESH_TOKEN])
  localStorage.setItem(EAuthToken.ACCESS_TOKEN,data[EAuthToken.ACCESS_TOKEN])
}

export {
  handleStorageToken
}