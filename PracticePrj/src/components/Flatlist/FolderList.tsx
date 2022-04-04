import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ItemFolderList from '../Custom/ItemFolderList';

type ItemClickProps = {
  data: any;
  onItemClickCallback: (id: string) => void;
};

const FolderList = (props: ItemClickProps) => {
  const onItemClick = (title: string) => {
    props.onItemClickCallback(title);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemList}
            key={item.id}
            onPress={() => onItemClick(item.title)}>
            <ItemFolderList
              name={item.title}
              count={item.itemCount}
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

export default FolderList;
