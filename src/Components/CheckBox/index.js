import React, { PureComponent } from "react";
import { Text, View} from "react-native";
import styles from './styles'

class CheckBox extends PureComponent {

  render() {
    const box = (
      <View style={styles.checkBoxItem}>
        <Text style={styles.checkIcon}>&#9744;</Text>
      </View>
    );
    return (
      <View>
        {
          this.props.isChecked ?
            <View style={styles.checkBoxBlock}>
              {box}
              <View style={[styles.checkBoxItem, styles.checkItem]}>
                <Text style={styles.checkIcon}>&#10003;</Text>
              </View>
            </View>
            :
            <View style={styles.checkBoxBlock}>
              {box}
            </View>
        }
      </View>
    );
  }
}

export default CheckBox;