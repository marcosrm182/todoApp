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

  agregarTarea = () => {
    this.setState({
      tareas: [...this.state.tareas, {texto: this.state.texto, key: Date.now().toString()}],
      texto: ''
    });
  }

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter((tarea) => {
      return tarea.key !== id;
    });
    this.setState({
      tareas: nuevasTareas,
    })

  }

  render(){
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />
        <Body
          tareas={this.state.tareas}
          eliminar={this.eliminarTarea}
        />
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
