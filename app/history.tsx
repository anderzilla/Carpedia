import { useAppContext } from '../context/AppContext';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Header } from '../components/Header';

export default function HistoryScreen() {
  const { history } = useAppContext();

  return (
    <Container>
      <Header />
      {history.length === 0 ? (
        <InfoText>Histórico não disponível.</InfoText>
      ) : (
        <>
          <SectionTitle>Histórico:</SectionTitle>
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <InfoText>{item}</InfoText>}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.accent};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin-bottom: 4px;
`;
