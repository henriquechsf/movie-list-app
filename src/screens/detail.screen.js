import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DetailScreen = () => {
  const route = useRoute();

  const data = route.params.data;

  return (
    <View>
      <Image source={{uri: data.image}} style={styles.image} />
      <Text>Filme: {data.filme}</Text>
      <Text>Ano: {data.ano}</Text>
      <Text>Estilo: {data.estilo}</Text>
      <Text>Direção: {data.direcao}</Text>
      <Text>Descrição: {data.descricao}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 300,
  },
});
