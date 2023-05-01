import styled from 'styled-components/native';
import { View, Text, ImageBackground } from 'react-native';
import woodLt from './assets/images/woodLt.jpeg';
import woodDk from './assets/images/woodDk.jpeg';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import {
  OpenSansCondensed_300Light,
  OpenSansCondensed_300Light_Italic,
  OpenSansCondensed_700Bold,
} from '@expo-google-fonts/open-sans-condensed';
import { Iceland_400Regular } from '@expo-google-fonts/iceland';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Iceland_400Regular,
    OpenSansCondensed_300Light,
    OpenSansCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <Background source={woodDk}>
        <Tray source={woodLt}>
          <Title>Code Breaker!</Title>
        </Tray>
        <Text style={{ fontFamily: 'OpenSansCondensed_700Bold', fontSize: 24 }}>
          OpenSansCondensed_700Bold
        </Text>
        <Text>Default text is 14pt</Text>
      </Background>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  color: white;
  font-family: 'OpenSansCondensed_700Bold';
  font-size: 30pt;
`;

const Background = styled(ImageBackground)`
  flex: 1;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`;

const Title = styled(Text)`
  font-size: 48px;
  color: #d6a584;
  font-family: 'Iceland_400Regular';
  text-shadow: -2px -2px 2px #4b3929 /* #614b34 */ ;
`;

const Tray = styled(ImageBackground)`
  margin: 10px;
  border-color: #B08464;
  border-width: 8px;
  border-radius: 10px;
  align-items: center;
`;
