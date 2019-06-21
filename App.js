import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends Component {
  constructor() {
    super();
    this.state= { 
      tareas: [],
      texto: ''
    };
  }

  establecerTexto = (value) => {
    console.log(`Lega ${value}`)
    this.setState({ texto: value })
  }

  agregarTarea = (tarea) => {
    this.setState({
      tareas: [...this.state.tareas, tarea],
      texto: ''
    });
    console.log(this.state.tareas.length)
  }

  render(){
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />
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
