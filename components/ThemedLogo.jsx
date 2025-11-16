import { Image, useColorScheme } from "react-native";

//images
import DarkLogo from '../assets/img/logo_dark.png';
import LightLogo from '../assets/img/logo_light.png';

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const logoSource = colorScheme === 'dark' ? DarkLogo : LightLogo;
  return (
    <Image source={logoSource} style={style} {...props} />
  );
};

export default ThemedLogo;
