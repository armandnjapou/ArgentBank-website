import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const signup = (userInfo) => {
    return axios.post(API_URL + '/user/signup', userInfo);
}

const signin = (email, password) => {
    return axios
        .post(API_URL + '/user/login', { email, password })
        .then((response) => {
            if (response.data.body.token) {
                localStorage.setItem('token', JSON.stringify(response.data.body.token));
            }

            return response.data;
        })
}

const signout = () => {
    localStorage.removeItem('token');
}

export function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        return { 'x-access-token': token };
    } else {
        return {};
    }
}

const authService = {
    signup,
    signin,
    signout
}

export default authService;