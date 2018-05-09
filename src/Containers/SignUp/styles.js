import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  formBlock: {
    flex: 1,
    marginTop: -250,
    paddingLeft: 30,
    paddingRight: 40,
  },
  flex1: {
    flex: 1
  },
  buttonWrap: {
    flex: 1,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,

  },
  roundedBtnStyle: {
    height: 55,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 40
  },
  roundedBtnText: {
    color: '#fff',
    fontSize: 20
  },

  mb20: {
    marginBottom: 20
  }




});
export default styles