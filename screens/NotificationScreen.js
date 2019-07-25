import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default class NotificationScreen extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="logo-facebook" size={22} color="#3b5998" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Login to your facebook account</Text>
              </View>
            </View>
          </Touchable>
      </ScrollView>
    );
  }

  _handlePressForums() {
    WebBrowser.openBrowserAsync('http://facebook.com/login');
  }
}

NotificationScreen.navigationOptions = {
  title: 'Notifications',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
