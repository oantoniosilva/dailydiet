import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { Loading } from '@components/Loading';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Text>Working in Daily Diet app!</Text> : <Loading /> }
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

