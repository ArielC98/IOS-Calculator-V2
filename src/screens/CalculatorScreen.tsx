import { Pressable, Text, View } from "react-native"
import { colors, styles } from "../presentation/theme/app-theme"
import { CalculatorButton } from '../presentation/components/CalculatorButton';


export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton label="C" color={colors.lightGray} />
        <CalculatorButton label="+/-" color={colors.lightGray} />
        <CalculatorButton label="del" color={colors.lightGray} />
        <CalculatorButton label="÷" color={colors.orange} />

      </View>

    </View>
  )
}
