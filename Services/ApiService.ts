import axios, { AxiosResponse } from 'axios';

// Definisci il tipo per la risposta dei dati che prevedi di ricevere
export interface ApiResponse {
  // Definisci qui la struttura dei dati che prevedi di ricevere dalla tua API
}

// Funzione per effettuare una chiamata GET all'API
export const fetchData = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker');
    return response.data;
  } catch (error) {
    console.error('Errore durante la chiamata API: ', error);
    throw new Error('Errore durante la chiamata API: ' + error);
  }
};
