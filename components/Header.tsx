import styled from 'styled-components/native';
import { useRouter, useSegments } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

export const Header = () => {
  const router = useRouter();
  const segments = useSegments();
  const theme = useTheme();

  const notHome = segments.length > 1;

  return (
    <SafeAreaView style={{ backgroundColor: theme.background }}>
      <Container>
        {notHome && (
          <ButtonsContainer>
            <IconButton onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={20} color={theme.text} />
            </IconButton>
            <IconButton onPress={() => router.push('/')}>
              <Ionicons name="home" size={20} color={theme.text} />
            </IconButton>
          </ButtonsContainer>
        )}
        <Title>CarPédia</Title>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 8px 12px; /* ✅ Reduzido: altura menor */
  flex-direction: row;
  align-items: center;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-right: 8px;
`;

const IconButton = styled(Pressable)`
  margin-right: 6px;
`;

const Title = styled.Text`
  font-size: 18px; /* ✅ Reduzido: antes 24px */
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
