import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement

})
export class Plantservice {
  private apiUrl = '/api/v1/plants?token=lCAM0WASC5Izjc_BDhbX-2aMaDAamEQbX2347XtnwDU';
  token:string ="lCAM0WASC5Izjc_BDhbX-2aMaDAamEQbX2347XtnwDU";
  async fetchPlantList(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`); // Utilisation du token avec Authorization
  
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers,
    };
  
    const response = await fetch(this.apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch plant list');
    }
    return response.json();
  }
  
  
}
