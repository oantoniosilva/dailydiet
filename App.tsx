import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import theme from 'src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

