import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Color from '../../constants/Color';
type ItemNoteProps = {
  name: String;
  count: Number;
  index: Number;
};

class ItemNoteList extends Component<ItemNoteProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.iconList}
          source={require('../../assets/folder.png')}
        />
        <Text style={styles.folderName}>{this.props.name}</Text>
        {/*<Text style={styles.numberItem}>{this.props.count}</Text>*/}
        <Image
          style={styles.iconList}
          source={require('../../assets/next.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.lightBlueW50,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginVertical: 2,
  },
  iconList: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  folderName: {
    flex: 1,
    fontSize: 15,
  },
  numberItem: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
  },
});

export default ItemNoteList;
