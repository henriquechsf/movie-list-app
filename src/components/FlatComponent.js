import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Detalhe', {data});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navegar}>
      <Image source={{uri: data.image}} style={styles.image} />

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text style={styles.text}>{data.ano}</Text>
        <Text style={styles.text}>{data.estilo}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    marginBottom: 8,
    flexDirection: 'row',
  },
  subcontainer: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  image: {width: 100, height: 100},
});
