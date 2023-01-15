import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text } from 'react-native';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Text>Working in Daily Diet app!</Text> : <ActivityIndicator /> }
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

