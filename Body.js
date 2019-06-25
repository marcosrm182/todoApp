import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <FlatList
          data={this.props.tareas}
          // renderItem={ (elemento) => {
          //ES6 --> podemos sacar directamente el atributo item del objeto elemento
          renderItem={ ({item}) => <Tarea item={item} eliminar={this.props.eliminar}/> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 9,
      backgroundColor: '#98FB98'
    },
});

export default Body;
