import React, {Component} from 'react';
import {FlatList, Image, Text, View, StyleSheet} from 'react-native';
import ImageFlatListData from '../data/ImageFlatListData';

class ItemList extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: this.props.index % 2 === 0 ? 'white' : 'gray',
          marginHorizontal: 10,
          padding: 5,
        }}>
        <Image
          style={styles.imageItem}
          source={require('../assets/pixel.jpg')}
        />
        <View style={styles.infoItem}>
          <Text>{this.props.item.title}</Text>
          <Text>{this.props.item.description}</Text>
        </View>
      </View>
    );
  }
}

export default class ImageFlatList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={ImageFlatListData}
          renderItem={({item, index}) => {
            return <ItemList item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageItem: {
    width: '25%',
    height: 100,
    resizeMode: 'contain',
  },
  infoItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
