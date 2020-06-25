import { useOktaAuth } from '@okta/okta-react';

export const useLogout = () => {
  // Auth
  const { authState, authService } = useOktaAuth();
  const issuer = 'https://dev-625192.okta.com/oauth2/default';
  const redirectUri = `${window.location.origin}/login`;

  const execute = async () => {
    const idToken = authState.idToken;
    await authService.logout('/');
    
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  };
  return execute;
};
