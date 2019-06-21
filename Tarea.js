import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.item.texto}</Text>
        <Ionicons
            name="md-trash"
            size={24}
            color="gray"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    texto: {
        fontSize: 24,
    }
});

export default Tarea;
