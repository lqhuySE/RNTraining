import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ItemNoteList from '../Custom/ItemNoteList';

type ItemClickProps = {
  noteList: any;
  onItemClickCallback: (
    id: string,
    title: string,
    timeModify: string,
    data: string,
  ) => void;
};

const NoteList = (props: ItemClickProps) => {
  const onItemClick = (
    id: string,
    title: string,
    timeModify: string,
    data: string,
  ) => {
    props.onItemClickCallback(id, title, timeModify, data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.noteList}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemList}
            key={item.id}
            onPress={() =>
              onItemClick(item.id, item.title, item.time, item.data)
            }>
            <ItemNoteList
              id={item.id}
              name={item.title}
              time={item.time}
              index={index}
            />
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
