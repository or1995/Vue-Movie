import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
    domain: "dev-kk4nxepd.us.auth0.com",
    clientID: "RYOToVpksXVOeZX79a5flTabVlTUZLol",
    redirectUri: '',
    responseType: 'token id_token',
    scope: "openid profile"
})

let token = {}

export const handleAuth = cb => {
    webAuth.parseHash((error, authRes) => {
        if(authRes && authRes.accessToken && authRes.idToken) {
            token.accessToken = authRes.accessToken;
            token.idToken = authRes.idToken;
            cb();
        } else {
            console.log(error)
        }
    })
} 

export const login = () => {
    console.log('hi');
    webAuth.authorize();
}

