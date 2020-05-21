const Config = {
    clientId: '0oacpm9hcElIL6a5z4x6',
    issuer: 'https://dev-625192.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
}
export default Config;