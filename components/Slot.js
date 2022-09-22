import {View, Text, StyleSheet, TextInput} from "react-native"
import colors from "../constants/colors"

const Slot = ({time, workers}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.btnContainer2}>
        <Text style={styles.btn2}>-</Text>
      </View>
      <TextInput keyboardType='number-pad' placeholder="Number of workers" style={styles.input} />
      <View style={styles.btnContainer}>
        <Text style={styles.btn}>+</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  input: {
    borderColor: colors.gray,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: .5,
    fontSize: 15,
    width: 170,
    textAlign: "center",
    marginRight: 10
  },
  root: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnContainer: {
    borderWidth: 2.5,
    borderColor: colors.main,
    paddingHorizontal: 5,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    fontSize: 15,
    color: colors.main,
    fontWeight: "bold"
  },
  time: {
    fontSize: 18,
    backgroundColor: colors.white,
    borderWidth: .5,
    borderColor: colors.gray,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 4,
    marginRight: 10
  },
  btn2: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "bold"
  },
  btnContainer2: {
    borderWidth: 2.5,
    borderColor: colors.black,
    paddingHorizontal: 6,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Slot