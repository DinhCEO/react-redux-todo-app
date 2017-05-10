import config  from './../../../../http/config'
import axios from 'axios'

import authUsernamePassword from './AuthUsernamePasswordService'
import AuthenticationService from './AuthenticationService'


let AuthUsernamePassword = new authUsernamePassword(axios, config);

export let authenticationService = new AuthenticationService(AuthUsernamePassword);
