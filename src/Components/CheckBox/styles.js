import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkBoxBlock: {
    width: 40,
    height: 45,
  },
  checkBoxItem: {
    width: 40,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
  },
  checkItem: {
    top: -2,
    left: -1
  },
  checkIcon: {
    fontSize: 18
  }
});
export default styles