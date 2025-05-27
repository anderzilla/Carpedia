import { ActivityIndicator } from 'react-native';
import * as S from '../styles/styled';
import { getValue } from '../utils/getValue';
import { translateLabel, translateValue } from '../utils/translate';
import { decodeVIN } from '../services/nhtsaAPI';
import { useState } from 'react';

export const CarDetail = ({
  parsedModel,
  brandImage,
  vehicleImage,
  wikiOriginalSummary,
  wikiTranslatedSummary,
  nhtsaModels,
  translating,
  translationError
}: any) => {
  const [vin, setVin] = useState('');
  const [vinData, setVinData] = useState<any | null>(null);

  const handleVINLookup = async () => {
    const data = await decodeVIN(vin);
    setVinData(data);
  };

  const nhtsaModel = nhtsaModels.find(
    (m: any) => m.Model_Name.toLowerCase() === parsedModel.model_name.toLowerCase()
  );

  return (
    <S.Container>
      {brandImage && <S.Logo source={{ uri: brandImage }} />}
      {vehicleImage && <S.VehicleImage source={{ uri: vehicleImage }} />}

      <S.Title>
        {getValue(parsedModel.model_make_id)} {getValue(parsedModel.model_name)} ({getValue(parsedModel.model_year)})
      </S.Title>

      {wikiOriginalSummary && (
        <S.Section>
          <S.SectionTitle>Sobre o veículo</S.SectionTitle>

          {translating && (
            <S.Row>
              <ActivityIndicator size="small" />
              <S.InfoText> Traduzindo…</S.InfoText>
            </S.Row>
          )}

          {translationError && (
            <S.ErrorText>Falha ao traduzir. Mostrando original.</S.ErrorText>
          )}

          {wikiTranslatedSummary && !translating && !translationError && (
            <S.Badge>
              <S.BadgeText>Traduzido do Inglês</S.BadgeText>
            </S.Badge>
          )}

          <S.InfoText>{wikiTranslatedSummary || wikiOriginalSummary}</S.InfoText>
        </S.Section>
      )}

      <S.Section>
        <S.SectionTitle>Ficha Técnica</S.SectionTitle>
        {Object.keys(parsedModel).map((key) => (
          <S.InfoText key={key}>
            {translateLabel(key)}: {translateValue(getValue(parsedModel[key]))}
          </S.InfoText>
        ))}
      </S.Section>

      {nhtsaModel && (
        <S.Section>
          <S.SectionTitle>Homologação NHTSA</S.SectionTitle>
          <S.InfoText>Modelo homologado: {nhtsaModel.Model_Name}</S.InfoText>
        </S.Section>
      )}

      <S.Section>
        <S.SectionTitle>Buscar por VIN</S.SectionTitle>
        <S.Input placeholder="Informe o VIN" value={vin} onChangeText={setVin} />
        <S.Button onPress={handleVINLookup}>
          <S.ButtonText>Buscar VIN</S.ButtonText>
        </S.Button>
        {vinData && (
          <S.Section>
            <S.SectionTitle>Dados do VIN</S.SectionTitle>
            {Object.entries(vinData).map(([key, value]) => (
              <S.InfoText key={key}>
                {translateLabel(key)}: {translateValue(getValue(value))}
              </S.InfoText>
            ))}
          </S.Section>
        )}
      </S.Section>
    </S.Container>
  );
};
