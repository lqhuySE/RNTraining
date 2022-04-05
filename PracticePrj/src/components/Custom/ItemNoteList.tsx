import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Color from '../../constants/Color';
import CustomImageButtonWithoutBorder from '../Button/CustomImageButtonWithoutBorder';
import {useDispatch} from 'react-redux';
import noteListSlice from '../../screens/Home/noteSlice';
import DateUtils from '../../utils/DateUtils';
import InputDialog from '../Dialog/InputDialog';
import firestore from '@react-native-firebase/firestore';
type ItemNoteProps = {
  id: string;
  name: string;
  time: string;
  index: Number;
};

const ItemNoteList = (props: ItemNoteProps) => {
  const [isInputDialogShow, setShowInputDialog] = useState(false);

  const ref = firestore().collection('users');

  const dispatch = useDispatch();

  // const deleteItem = () => {
  //   console.log(props.index);
  //   dispatch(
  //     noteListSlice.actions.deleteNote({
  //       index: props.index,
  //     }),
  //   );
  // };

  // const updateItemList = (noteTitle: string) => {
  //   dispatch(
  //     noteListSlice.actions.updateNote({
  //       id: props.id,
  //       title: noteTitle,
  //       time: DateUtils.getCurrentDateTime(),
  //       data: '',
  //     }),
  //   );
  //   hideInputDialog();
  // };

  const updateNoteList = async (noteTitle: string) => {
    await ref
      .doc(props.id)
      .update({
        title: noteTitle,
        time: DateUtils.getCurrentDateTime(),
        data: '',
      })
      .then(() => console.log('Done'));
    hideInputDialog();
  };

  const removeItemNoteList = async () => {
    await ref
      .doc(props.id)
      .delete()
      .then(() => console.log('Deleted'));
  };

  const showInputDialog = () => {
    setShowInputDialog(true);
  };

  const hideInputDialog = () => {
    setShowInputDialog(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.iconList}
        source={require('../../assets/note.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.noteName}>{props.name}</Text>
        <Text>{props.time}</Text>
      </View>
      <InputDialog
        isShown={isInputDialogShow}
        title={'New Note'}
        message={props.name}
        negativeButtonTitle={'Cancel'}
        negativeCallback={hideInputDialog}
        positiveButtonTitle={'Save'}
        positiveCallback={noteTitle => updateNoteList(noteTitle)}
      />
      <CustomImageButtonWithoutBorder
        image={require('../../assets/edit.png')}
        onClicked={() => showInputDialog()}
      />
      <CustomImageButtonWithoutBorder
        image={require('../../assets/delete.png')}
        onClicked={() => removeItemNoteList()}
      />
    </View>
  );
};

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
