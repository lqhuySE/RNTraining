import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Color from '../../constants/Color';
type ItemNoteProps = {
  name: String;
  time: String;
  index: Number;
};

class ItemNoteList extends Component<ItemNoteProps> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.iconList}
          source={require('../../assets/note.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.noteName}>{this.props.name}</Text>
          <Text>{this.props.time}</Text>
        </View>
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
    marginVertical: 3,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  iconList: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  noteName: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  numberItem: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
  },
});

export default ItemNoteList;
