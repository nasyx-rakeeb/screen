import {View, StyleSheet, Text} from "react-native"
import colors from "../constants/colors"
import Button from "../components/Button"
import CalendarPicker from 'react-native-calendar-picker'
import Slot from "../components/Slot"

const Main = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Add available date and time</Text>
      <CalendarPicker dayShape="square" startFromMonday={true} todayBackgroundColor={colors.main} selectedDayColor={colors.main} selectedDayTextColor={colors.white} />
      <Text style={styles.subHeading}>Slots available</Text>
      <Slot time="09:00 AM" />
      <Slot time="09:00 AM" />
      <Slot time="09:00 AM" />
      <Slot time="09:00 AM" />
      <Slot time="09:00 AM" />
      <Slot time="09:00 AM" />
      <Button title="Save" />
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%"
  },
  subHeading: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.main,
    width: "90%",
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 2,
    fontSize: 15
  },
  heading: {
    fontSize: 22
  }
})

export default Main