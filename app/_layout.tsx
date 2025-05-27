import { Stack } from 'expo-router';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { useAppContext, AppProvider } from '../context/AppContext';
import { themes } from '../themes';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import styled from 'styled-components/native';

function Layout() {
  const { theme } = useAppContext();
  const selectedTheme = themes[theme] || themes['chatgpt'];  // ✅ fallback seguro

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <Container>
        <Stack screenOptions={{ headerShown: false }} />
        <ThemeSwitcherWrapper>
          <ThemeSwitcher />
        </ThemeSwitcherWrapper>
      </Container>
    </StyledThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

const Container = styled.View`
  flex: 1;
`;

const ThemeSwitcherWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
