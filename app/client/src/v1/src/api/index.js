import axios from "axios"
import * as constant from "../constant/api.route"
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

export const instance = axios.create({
    baseURL: constant.BASE_URL,
    withCredentials: true,
    credentials: "include",
})

export const cookie = new Cookies();

export const login =  async (data) => {
    try{
        const response = await instance.post(constant.login, data)

        if(response.status === 200){
            const date = new Date()
            cookie.set(
                "RefreshToken",
                response.data.refreshToken,
                {
                    sameSite: "strict",
                    path: '/',
                    expire: date.getTime() + (7*24*60*60*1000)
                });
            instance.defaults.headers.common["authorization"] = `Bearer ${response.data.accessToken}`;
        }
        return {status: response.status, message: 'logged in'}
    }catch (error) {
        return {status: 500, message: error.message}
    }
}

export const authIssue = async (refreshToken) => {
    try{
        const response = await instance.post(constant.auth + '/issue-access', {refreshToken})

        if(response.status !== 200){
            return {status: response.status}
        }
        instance.defaults.headers.common["authorization"] = `Bearer ${response.data.accessToken}`;

        return {status: response.status}
    }catch(error){
        return {status: 401, message: error.message}
    }
}