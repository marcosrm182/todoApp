import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends Component {
  constructor() {
    super();
    this.state= { 
      tareas: [],
      texto: ""
    };
  }

  establecerTexto = (value) => {
    console.log(`Lega ${value}`)
    this.setState({ texto: value })
  }

  render(){
    return (
      <View style={styles.container}>
        <Header cambiarTexto={this.establecerTexto}/>
        <Text>{this.state.texto}</Text>
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
