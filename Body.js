import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <Text> Body </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 9,
      backgroundColor: '#98FB98',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Body;
