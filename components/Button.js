import {Pressable, Text, StyleSheet} from "react-native"
import colors from "../constants/colors"

const Button = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [{opacity: pressed ? .7 : 1}, styles.btn]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.main,
    borderRadius: 5,
    width: "90%",
    height: 35,
    justifyContent: "center"
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20
  }
})

export default Button