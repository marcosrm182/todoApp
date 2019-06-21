import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

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
        <FlatList
          data={this.props.tareas}
          // renderItem={ (elemento) => {
          //ES6 --> podemos sacar directamente el atributo item del objeto elemento
          renderItem={ ({item}) => <Text>{item.texto}</Text> }
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
