
export interface IGmlCredentials {
  username: string;
  password: string;
}

// Physically same as GmlApi but logically distinct
class AuthApi {
  private apiUrl: string;
  private credentials?: IGmlCredentials;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  checkCredentials(credentials: IGmlCredentials): Promise<boolean> {
    const request = new Request(`${this.apiUrl}/check-auth`, { headers: this.createAuthHeader(credentials) });
    return fetch(request).then(response => {

      this.credentials = credentials;
      return response.ok;
    });
  }

  getAuthHeader() {
    return this.createAuthHeader(this.credentials);
  }

  private createAuthHeader(credentials?: IGmlCredentials) {
    const headers = new Headers();

    if (credentials != null) {
      const auth = `${credentials.username}:${credentials.password}`;
      headers.set('Authorization', 'Basic ' + window.btoa(auth));
    }

    return headers;
  }
}

export default AuthApi;
