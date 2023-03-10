import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { StatusBar } from "react-native";

import { Statistics } from "@screens/Statistics";
// import { Dashboard } from '@screens/Dashboard';
import { Loading } from "@components/Loading";

import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}
