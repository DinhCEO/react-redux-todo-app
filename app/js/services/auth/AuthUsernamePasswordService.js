export default class AuthUsernamePasswordService {
    /**
     *
     * @param {axios} axios
     * @param {config} config
     */
    constructor(axios, config) {
        this.axios = axios;
        this.apiUrl = config['Api_Url'];
    }



    /**
     *
     * @param {string} username
     * @param {string} password
     * @returns {*|Promise<{}>}
     */
    auth(username, password) {
        let request = {
            method : 'POST',
            url : `${this.apiUrl}/login`,
            data : {
                username : username,
                password : password,
            }
        };

        return this.axios(request).then(res => {
            localStorage.setItem('token', res.data);
        }).catch((error) =>{
            console.log(error);
        })
    }
}
