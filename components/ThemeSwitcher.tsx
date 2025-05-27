import { useAppContext } from '../context/AppContext';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

const themeOptions = ['chatgpt', 'copilot', 'light'] as const;

export const ThemeSwitcher = () => {
  const { setTheme } = useAppContext();
  const theme = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.card, paddingBottom: 10 }}>
      <Container>
        {themeOptions.map((option) => (
          <SwitchButton key={option} onPress={() => setTheme(option)}>
            <SwitchText>{option.charAt(0).toUpperCase() + option.slice(1)}</SwitchText>
          </SwitchButton>
        ))}
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

const SwitchButton = styled.TouchableOpacity`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.accent};
`;

const SwitchText = styled.Text`
  color: ${({ theme }) => theme.badgeText};
  font-weight: bold;
`;
