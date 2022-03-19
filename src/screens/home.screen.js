import {Flex} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import FlatComponent from '../components/FlatComponent';
import {filmes} from '../data/filmes';

const HomeScreen = () => {
  return (
    <Flex padding={1}>
      <FlatList
        data={filmes}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </Flex>
  );
};

export default HomeScreen;
