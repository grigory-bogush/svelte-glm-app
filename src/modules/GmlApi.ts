import type AuthApi from "./AuthApi";


export enum IGmlMedal {
  gold="Gold",
  silver="Silver"
}

export interface IGmlRecord {
  id: number;
  name: string;
  platform: string;
  medal: IGmlMedal;
  complete_time_hours: number;
  genre: string;
}


class GmlApi {
  private apiUrl: string;
  private authApi: AuthApi;

  constructor(apiUrl: string, authApi: AuthApi) {
    this.apiUrl = apiUrl;
    this.authApi = authApi;
  }

  listRecords(): Promise<IGmlRecord[]> {
    const request = new Request(`${this.apiUrl}/game-records`, { headers: this.authApi.getAuthHeader() });

    return fetch(request).then(response => {
      if (!response.ok) {
        throw Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(json => json.data)
  }
}

export default GmlApi;
