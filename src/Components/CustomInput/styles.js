import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputIconBlock: {
    width: 50,
    paddingRight: 10,
    alignItems: 'center'
  },
  inputBlock: {
    height: 45,
    justifyContent: 'center',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    flex: 1
  },
  inputStyle: {
    fontSize: 20,
    color: '#000',
    paddingRight: 30
  },

  showTextBtn: {
    width: 20,
    height: 45,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  circleWrap: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#938987'
  },
  message: {
    color: '#f00',
    fontSize: 11,
    paddingLeft: 50,
    paddingTop: 5,
  }
});
export default styles