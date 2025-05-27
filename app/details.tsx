import { useLocalSearchParams } from 'expo-router';
import { useCarData } from '../hooks/useCarData';
import { CarDetail } from '../components/CarDetail';
import { Header } from '../components/Header';
import styled from 'styled-components/native';

export default function DetailsScreen() {
  const { model } = useLocalSearchParams();
  const parsedModel = model ? JSON.parse(model as string) : null;
  const carData = useCarData(parsedModel);

  if (!parsedModel) {
    return (
      <Container>
        <Header />
        <InfoText>Nenhum modelo selecionado.</InfoText>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <CarDetail parsedModel={parsedModel} {...carData} />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const InfoText = styled.Text`
  color: ${({ theme }) => theme.text};
  padding: 20px;
`;
