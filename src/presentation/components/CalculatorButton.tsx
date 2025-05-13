import { Pressable, Text } from "react-native"
import { colors, styles } from "../theme/app-theme"


interface Props {
  label: string;
  color?: string;
}


export const CalculatorButton = ({
  label,
  color = colors.dargGray,
}:Props) => {
  return (
    <Pressable style={({pressed}) => ({
      ...styles.button,
      backgroundColor: color,
      opacity: (pressed) ? 0.8 : 1
    })}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>

  )
}
