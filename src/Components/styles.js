import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  newsItem: {
    height: 45,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 12,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  newsItemTextWrap: {
    flex: 1,
  },
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
  },
  emptyBlock: {
    padding: 20,
    alignItems: 'center',

  },



  newsSeparator: {
    height: 10,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
  },
  horizontalLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#f3f3f3'
  }


})
export default styles