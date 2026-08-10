// src/environments/environment.ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8081/bigbisort-imp-exp',
  // TODO: replace with the real OAuth Client ID from Google Cloud Console
  // (APIs & Services > Credentials) — must match the backend's
  // google.oauth2.client-id in application-external.yml. Until then,
  // "Sign in with Google" will render but fail on click.
  googleClientId: 'YOUR_GOOGLE_OAUTH_CLIENT_ID'
};
