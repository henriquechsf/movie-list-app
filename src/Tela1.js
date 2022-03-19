import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import FlatComponent from './components/FlatComponent';
import {filmes} from './data/filmes';

const Tela1 = () => {
  return (
    <View>
      <FlatList
        data={filmes}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </View>
  );
};

export default Tela1;
