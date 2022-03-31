import React, {Component, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import FolderItemData from '../../data/FolderItemData';
import ItemList from '../Custom/CustomItemNoteList';

type ItemClickProps = {
  onItemClickCallback: (id: string) => void;
};

const CustomFlatList = (props: ItemClickProps) => {
  const [id, setId] = useState('');

  const onItemClick = (key: string) => {
    setId(key);
    props.onItemClickCallback(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FolderItemData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemList}
            key={item.id}
            onPress={() => onItemClick(item.id)}>
            <ItemList name={item.title} count={item.itemCount} index={index} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  itemList: {
    borderRadius: 5,
  },
});

export default CustomFlatList;
