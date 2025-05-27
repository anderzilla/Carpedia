import axios, { isAxiosError } from 'axios';

export const getWikiImage = async (term: string) => {
  try {
    const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
    return response.data.thumbnail?.source || null;
  } catch (error: any) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) return null;
    }
    console.warn(`Falha ao buscar imagem para "${term}":`, error.message);
    return null;
  }
};

export const getWikiSummary = async (term: string) => {
  try {
    const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
    return response.data.extract || null;
  } catch (error: any) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) return null;
    }
    console.warn(`Falha ao buscar resumo para "${term}":`, error.message);
    return null;
  }
};
