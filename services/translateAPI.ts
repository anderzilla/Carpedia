import axios from 'axios';

export const translateText = async (text: string, targetLang: string = 'pt') => {
  try {
    const response = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    return response.data.translatedText;
  } catch (error) {
    console.warn('Falha ao traduzir texto:', error);
    return text; // Fallback: retorna texto original
  }
};
