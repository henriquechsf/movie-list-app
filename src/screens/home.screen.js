import React from 'react';
import {FlatList, View} from 'react-native';
import FlatComponent from '../components/FlatComponent';
import {filmes} from '../data/filmes';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={filmes}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </View>
  );
};

export default HomeScreen;
