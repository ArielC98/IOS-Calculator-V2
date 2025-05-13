import { Pressable, Text } from "react-native"
import { colors, styles } from "../theme/app-theme"


interface Props {
  label: string;
  color?: string;
  dougleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}


export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  dougleSize = false,
  blackText = false,
  onPress
}:Props) => {
  return (
    <Pressable 
      onPress = { () => onPress()}
      style={({pressed}) => ({
      ...styles.button,
      backgroundColor: color,
      width: (dougleSize) ? 180 : 80,
      opacity: (pressed) ? 0.8 : 1
    })}>
      <Text style={{
        ...styles.buttonText,
        color: (blackText) ? 'black' : 'white'
      }}>{label}</Text>
    </Pressable>

  )
}
