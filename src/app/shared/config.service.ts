import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        return 'https://sso-identity-server.herokuapp.com/api';
    }    
     
    get resourceApiURI() {
        return 'http://localhost:5050/api';
    }  
}