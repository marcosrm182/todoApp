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

  componentDidMount() {
    this.recuperarEnTelefono();
  }

  establecerTexto = (value) => {
    console.log(`Lega ${value}`)
    this.setState({ texto: value })
  }

  agregarTarea = () => {
    const nuevasTareas = [...this.state.tareas, {texto: this.state.texto, key: Date.now().toString()}];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: ''
    });
  }

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    })
  }

  guardarEnTelefono = (tareas) => {
    AsyncStorage.setItem('@AppCurso:tareas', JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  recuperarEnTelefono = () => {

    AsyncStorage.getItem('@AppCurso:tareas')
      .then((valor) => {
        console.log(valor);
        console.log(JSON.parse(valor));
        if(valor !== null) {
          const nuevasTareas = JSON.parse(valor);
          this.setState({
            tareas: nuevasTareas,
          });
        }
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
