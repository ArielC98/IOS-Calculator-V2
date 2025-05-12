
import {
  StatusBar,
  View,
} from 'react-native';
import { CalculatorScreen } from './screens/CalculatorScreen';
import { styles } from './presentation/theme/app-theme';



function App() {

  return (
    <View style = {styles.backGround}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen/>
    </View>
  );
}



export default App;
