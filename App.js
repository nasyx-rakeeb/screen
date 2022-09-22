import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
import Main from "./screens/Main"
import colors from "./constants/colors"

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: 70
  }
})

export default App