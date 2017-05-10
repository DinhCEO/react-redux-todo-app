class AuthenticationService {
    /**
     *
     * @param {authUsernamePassword} authUsernamePassword
     */
    constructor(authUsernamePassword){
        this.authUsernamePassword = authUsernamePassword;
    }
    /**
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise}
     */
    authByUsernamePassword(username,password){
        return this.authUsernamePassword.auth(username,password);
    }
}
export default AuthenticationService;