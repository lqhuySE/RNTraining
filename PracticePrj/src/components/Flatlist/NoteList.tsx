import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ItemNoteList from '../Custom/ItemNoteList';

type ItemClickProps = {
  data: any;
  onItemClickCallback: (id: string, title: string, note: string) => void;
};

const NoteList = (props: ItemClickProps) => {
  const onItemClick = (id: string, title: string, note: string) => {
    props.onItemClickCallback(id, title, note);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemList}
            key={item.id}
            onPress={() => onItemClick(item.id, item.title, item.note)}>
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
