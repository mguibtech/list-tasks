import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {
        fontLoaded ? <Home /> : <Loading />
      }
    </ThemeProvider>
  );
}

