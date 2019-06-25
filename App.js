import React, {Component} from 'react';
import { StyleSheet, View, AsyncStorage, Button } from 'react-native';
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

  guardarEnTelefono = () => {
    AsyncStorage.setItem('@AppCursoUdemy:arrayUno', JSON.stringify([{key:1, texto:'uno'}, {key:2, texto:'dos'}]))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  recuperarEnTelefono = () => {
    
    AsyncStorage.getItem('@AppCursoUdemy:arrayUno')
      .then((valor) => {
        console.log(valor);
        console.log(JSON.parse(valor));
      })
      .catch((error) => {
        console.log(error);
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
        <Button
          title='guardar'
          onPress={() => {this.guardarEnTelefono()}}
        />
        <Button
          title='recuperar'
          onPress={() => {this.recuperarEnTelefono()}}
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
