import {useNavigation} from '@react-navigation/native';
import {Badge, Heading, HStack, Image, Stack, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Detalhe', {data});
  };

  return (
    <TouchableOpacity onPress={navegar}>
      <HStack
        space={2}
        mb={2}
        borderWidth={1}
        borderColor="gray.200"
        backgroundColor="white">
        <Image source={{uri: data.image}} style={styles.image} alt="Título" />
        <VStack space={2} py={2} justifyContent="space-between">
          <Heading>{data.filme}</Heading>
          <HStack space={2}>
            <Badge colorScheme="danger">{data.estilo}</Badge>
            <Badge colorScheme="success">{data.ano}</Badge>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default FlatComponent;

const styles = StyleSheet.create({
  image: {width: 100, height: 100},
});
