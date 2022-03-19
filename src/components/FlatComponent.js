import {useNavigation} from '@react-navigation/native';
import {Badge, Heading, HStack, Image, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

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
          <Heading size="md">{data.filme}</Heading>
          <VStack space={2} width="96px">
            <Badge colorScheme={data.badge}>{data.estilo}</Badge>
            <Badge colorScheme="primary" variant="outline">
              {data.ano}
            </Badge>
          </VStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default FlatComponent;

const styles = StyleSheet.create({
  image: {width: 100, height: 100},
});
