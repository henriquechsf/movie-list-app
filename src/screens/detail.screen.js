import {useRoute} from '@react-navigation/native';
import {
  Badge,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const DetailScreen = () => {
  const route = useRoute();

  const data = route.params.data;

  return (
    <Flex padding={2}>
      <HStack backgroundColor="white">
        <Image
          source={{uri: data.image}}
          style={styles.image}
          alt="Descrição da imagem"
        />
        <VStack paddingX={2} justifyContent="space-between" padding={2}>
          <Heading>{data.filme}</Heading>
          <Stack space={2}>
            <Badge colorScheme={data.badge}>{data.estilo}</Badge>
            <Badge colorScheme="primary" variant="outline">
              {data.ano}
            </Badge>
          </Stack>
          <Text>Direção: {data.direcao}</Text>
        </VStack>
      </HStack>
      <Text marginTop={4} paddingX={2} textAlign="justify">
        {data.descricao}
      </Text>
    </Flex>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 300,
  },
});
