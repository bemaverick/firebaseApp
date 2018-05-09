import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  formBlock: {
    marginTop: -50,
    paddingLeft: 30,
    paddingRight: 40,
  },
  buttonWrap: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 80,
    left:0,
    zIndex: 100,
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