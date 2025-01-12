import axios, { AxiosResponse } from 'axios';

// Definisci il tipo per la risposta dei dati che prevedi di ricevere
export interface DataToShow {
  temperature: number
  humidity: number,
  deskHeight: number
}

// Funzione per effettuare una chiamata GET all'API
export const fetchData = async (): Promise<DataToShow> => {
  try {
    const response: AxiosResponse<DataToShow> = await axios.get<DataToShow>('http://192.168.25.97/desk-data');
    return response.data;
  } catch (error) {
    console.error('Errore durante la chiamata API: ', error);
    throw new Error('Errore durante la chiamata API: ' + error);
  }
};
