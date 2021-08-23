import axios from 'axios'
import { Notification } from 'element-ui';
import messages from '@/utils/messages'

const {


} = process.env

let http = axios.create({ baseURL: env.domain, timeout: 180000 })

http.interceptors.request.use(
    config => {
        if (false) { // está logado
            const { token } = isLogged()

            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token
                config.headers['Accept'] = 'application/json'
            }
        }
        return config;
    },
    error => {
        console.error(error)
        return Promise.reject(new Error(error));
    }
);

http.interceptors.response.use(
    res => {
        const { method } = res.config
        //Para Debugar as requisições POST
        if (process.env.NODE_ENV !== 'production' && method === 'post') {
            console.log(res)
        }
        return res.data
    },
    error => {
        let errorMessage = messages.connectError
        console.error(error.response)

        if (error.response) {
            let { status, data } = error.response;

            const { token } = isLogged()
            if (status && parseInt(status) === 401 && token !== undefined) {
                throwError(messages.unauthenticated)
                return Promise.reject(new Error(messages.unauthenticated));
            } else {
                throwError(errorMessage = data.response
                    ? data.response.message
                    : data.message)
                return Promise.reject(new Error(errorMessage = data.response
                    ? data.response.message
                    : data.message));
            }
        }

    }
)

const throwError = message => {
    Notification.error({
        title: 'Erro!',
        message: message,
        type: 'error',
        duration: 5 * 1000,
    })
}

export default http

