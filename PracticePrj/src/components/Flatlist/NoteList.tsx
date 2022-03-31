import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import NoteItemData from '../../data/NoteItemData';
import ItemNoteList from '../Custom/ItemNoteList';

type ItemClickProps = {
  onItemClickCallback: (id: string) => void;
};

const NoteList = (props: ItemClickProps) => {
  const onItemClick = (title: string) => {
    props.onItemClickCallback(title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={NoteItemData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemList}
            key={item.id}
            onPress={() => onItemClick(item.title)}>
            <ItemNoteList name={item.title} time={item.time} index={index} />
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

export default NoteList;
