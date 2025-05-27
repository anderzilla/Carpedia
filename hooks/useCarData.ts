import { useEffect, useState } from 'react';
import { getWikiImage, getWikiSummary } from '../services/wikiAPI';
import { getNHTSAModels } from '../services/nhtsaAPI';
import { translateText } from '../services/translateAPI';

export const useCarData = (parsedModel: any) => {
  const [brandImage, setBrandImage] = useState<string | null>(null);
  const [vehicleImage, setVehicleImage] = useState<string | null>(null);
  const [wikiOriginalSummary, setWikiOriginalSummary] = useState<string | null>(null);
  const [wikiTranslatedSummary, setWikiTranslatedSummary] = useState<string | null>(null);
  const [nhtsaModels, setNHTSAModels] = useState<any[]>([]);
  const [translating, setTranslating] = useState(false);
  const [translationError, setTranslationError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (parsedModel?.model_make_id) {
        const brandImg = await getWikiImage(parsedModel.model_make_id);
        setBrandImage(brandImg);

        const nhtsaData = await getNHTSAModels(parsedModel.model_make_id);
        setNHTSAModels(nhtsaData);
      }

      if (parsedModel?.model_make_id && parsedModel?.model_name) {
        const vehicleTerm = `${parsedModel.model_make_id} ${parsedModel.model_name}`;
        const vehicleImg = await getWikiImage(vehicleTerm);
        setVehicleImage(vehicleImg);

        const summary = await getWikiSummary(vehicleTerm);
        if (summary) {
          setWikiOriginalSummary(summary);
          setTranslating(true);
          setTranslationError(false);
          try {
            const translated = await translateText(summary, 'pt');
            setWikiTranslatedSummary(translated);
          } catch {
            setTranslationError(true);
          } finally {
            setTranslating(false);
          }
        }
      }
    };
    fetchData();
  }, [parsedModel]);

  return {
    brandImage,
    vehicleImage,
    wikiOriginalSummary,
    wikiTranslatedSummary,
    nhtsaModels,
    translating,
    translationError
  };
};
