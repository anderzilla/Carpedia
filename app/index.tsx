import React, { useState } from 'react';
import { FlatList, Keyboard } from 'react-native';
import { getModels, getAllModelsByMake } from '../services/carQueryAPI';
import CarItem from '../components/CarItem';
import { useRouter } from 'expo-router';
import { useAppContext } from '../context/AppContext';
import styled from 'styled-components/native';
import { Header } from '../components/Header';

export default function HomeScreen() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { addToHistory } = useAppContext();

  const search = async () => {
    Keyboard.dismiss();  // ✅ Esconde o teclado ao iniciar a busca

    if (!make) {
      setMessage('Por favor, informe uma marca.');
      setResults([]);
      return;
    }

    const normalizedMake = make.trim().toLowerCase();
    const normalizedModel = model.trim().toLowerCase();

    try {
      const data = await getModels({ make: normalizedMake, model: normalizedModel, year });

      if (!data || data.length === 0) {
        if (model) {
          setMessage(`Modelo "${model}" não encontrado, confira os modelos disponíveis da marca:`);
          const allModels = await getAllModelsByMake(normalizedMake);
          setResults(allModels);
        } else if (year) {
          setMessage(`Ano "${year}" não corresponde à marca ou modelo.`);
          const allModels = await getAllModelsByMake(normalizedMake);
          setResults(allModels);
        } else {
          setMessage(`Todos os modelos disponíveis para a marca: ${make}`);
          const allModels = await getAllModelsByMake(normalizedMake);
          setResults(allModels);
        }
      } else {
        setMessage(`Encontrado(s) ${data.length} veículo(s):`);
        setResults(data);
      }

      const historyEntry = `${make} ${model} ${year}`.trim();
      addToHistory(historyEntry);

    } catch (error) {
      console.error('Erro ao buscar:', error);
      setMessage('Erro ao buscar informações, tente novamente.');
      setResults([]);
    }
  };

  return (
    <Container>
      <Header />

      <Label>Marca</Label>
      <Input
        placeholder="Ex: Ford"
        placeholderTextColor="#777"
        value={make}
        onChangeText={setMake}
      />

      <Label>Modelo</Label>
      <Input
        placeholder="Ex: Mustang"
        placeholderTextColor="#777"
        value={model}
        onChangeText={setModel}
      />

      <Label>Ano</Label>
      <Input
        placeholder="Ex: 2020"
        placeholderTextColor="#777"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />

      <Button onPress={search}>
        <ButtonText>Buscar</ButtonText>
      </Button>

      <Link onPress={() => router.push('/history')}>
        <LinkText>Ver Histórico</LinkText>
      </Link>

      {message ? <Message>{message}</Message> : null}

      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <CarItem
            model={item}
            onPress={() => router.push({ pathname: '/details', params: { model: JSON.stringify(item) } })}
          />
        )}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
  margin-top: 12px;
  font-size: 16px;
`;

const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.accent};
  padding: 12px 0;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.badgeText};
  font-weight: bold;
  font-size: 16px;
`;

const Link = styled.Pressable`
  margin-top: 20px;
  align-items: center;
`;

const LinkText = styled.Text`
  color: ${({ theme }) => theme.accent};
  font-size: 16px;
`;

const Message = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-style: italic;
`;
