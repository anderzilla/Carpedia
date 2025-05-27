import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Props {
  model: any;
  onPress: () => void;
}

const labels: Record<string, string> = {
  model_name: 'Modelo',
  model_make_id: 'Fabricante',
  model_year: 'Ano'
};

export const getBrandLogo = (brand: string) => {
  return `https://logo.clearbit.com/${brand.toLowerCase()}.com`;
};

export default function CarItem({ model, onPress }: Props) {
  const brandLogo = getBrandLogo(model.model_make_id);

  return (
    <ItemContainer onPress={onPress}>
      <Logo source={{ uri: brandLogo }} resizeMode="contain" />
      <InfoText>{model.model_name}</InfoText>
      <InfoText>{model.model_make_id}</InfoText>
      <InfoText>{model.model_year}</InfoText>
    </ItemContainer>
  );
}

const ItemContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  padding: 8px;
  margin: 5px;
  align-items: center;
  width: 100px;
`;

const Logo = styled.Image`
  width: 60px;
  height: 30px;
  margin-bottom: 5px;
`;

const InfoText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  text-align: center;
`;
