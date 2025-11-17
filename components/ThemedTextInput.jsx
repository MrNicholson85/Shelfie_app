import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

const ThemedTextInput = ({style, ...props}) => {
  const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
      {...props}
      style={[
        { 
            color: theme.text,
            backgroundColor: theme.uiBackground,
            borderColor: theme.border, 
            borderWidth: 1, 
            padding: 10, 
            borderRadius: 5 }, 
            style]} />
  )
}

export default ThemedTextInput
