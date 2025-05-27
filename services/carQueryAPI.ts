import axios from 'axios';

const BASE_URL = 'https://www.carqueryapi.com/api/0.3/';

interface CarQueryParams {
  make?: string;
  model?: string;
  year?: string;
}

export const getModels = async (params: CarQueryParams) => {
  let query = `${BASE_URL}?cmd=getModels`;

  if (params.make) query += `&make=${params.make}`;
  if (params.model) query += `&model=${params.model}`;
  if (params.year) query += `&year=${params.year}`;

  const response = await axios.get(query);
  return response.data.Models;
};

export const getAllModelsByMake = async (make: string) => {
  const response = await axios.get(`${BASE_URL}?cmd=getModels&make=${make}`);
  return response.data.Models;
};
