import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

type ItemListProp = {
  title: String,
  itemNumber: String,
  index: Number,
};

export default class CustomItemList extends Component<ItemListProp> {
  render() {
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: this.props.index % 2 === 0 ? 'green' : 'gray'},
        ]}>
        <Text style={[styles.text, styles.title]}>{this.props.title}</Text>
        <Text style={[styles.text, styles.number]}>
          {this.props.itemNumber}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 5,
  },
});
