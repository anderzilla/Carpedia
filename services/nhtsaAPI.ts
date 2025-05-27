import axios from 'axios';

export const getNHTSAModels = async (make: string) => {
  try {
    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(make)}?format=json`);
    return response.data.Results || [];
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`Falha ao buscar modelos NHTSA para "${make}":`, error.message);
    } else {
      console.warn(`Falha ao buscar modelos NHTSA para "${make}":`, error);
    }
    return [];
  }
};

export const decodeVIN = async (vin: string) => {
  try {
    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`);
    return response.data.Results[0] || null;
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`Falha ao decodificar VIN "${vin}":`, error.message);
    } else {
      console.warn(`Falha ao decodificar VIN "${vin}":`, error);
    }
    return null;
  }
};
