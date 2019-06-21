import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <Text> Header </Text>
        <TextInput 
          style={styles.texto}
          onChangeText={ this.props.cambiarTexto }
          placeholder="Aquí escribe tu texto..."
          onSubmitEditing={ this.props.agregar }
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#00FF00',
      justifyContent: 'center',
    },
    texto: {
      paddingHorizontal: 16,
      fontSize: 24,
    }
});

export default Header;
