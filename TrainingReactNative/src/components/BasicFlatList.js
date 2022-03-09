import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import flatListData from '../data/FlatListData';

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          padding: 20,
          marginVertical: 5,
          marginHorizontal: 15,
          backgroundColor: this.props.index % 2 === 0 ? 'green' : 'gray',
        }}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.description}>{this.props.item.description}</Text>
      </View>
    );
  }
}

export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            return <FlatListItem item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 20,
  },
});
