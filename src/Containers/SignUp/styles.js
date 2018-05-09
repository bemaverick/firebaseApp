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


  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputIconBlock: {
    width: 50,
    alignItems: 'center'
  },
  inputBlock: {
    height: 45,
    justifyContent: 'center',
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
    flex: 1
  },
  inputStyle: {
    fontSize: 20,
   // color: Colors.textBlackBold,
    color: '#000'

  }

});
export default styles