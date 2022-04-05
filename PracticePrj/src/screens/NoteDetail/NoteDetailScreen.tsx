import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import noteListSlice from '../../screens/Home/noteSlice';
import DateUtils from '../../utils/DateUtils';
import Color from '../../constants/Color';
import firestore from '@react-native-firebase/firestore';
import {useForm} from 'react-hook-form';

type NavigationProps = {
  title: string;
  onBackButtonClicked: (param: any) => void;
  onSaveButtonClicked: (param: any) => void;
};

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  example: string;
}

const HeaderNavigation = (props: NavigationProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={props.onBackButtonClicked}>
          <Image
            style={styles.image}
            source={require('../../assets/next.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <TouchableWithoutFeedback onPress={props.onSaveButtonClicked}>
        <Text style={styles.textButton}>SAVE</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const NoteDetailScreen = ({navigation}: any) => {
  const route = useRoute();
  const ref = firestore().collection('users');

  const [title, setTitle] = useState(route.params.noteTitle);
  const [noteValue, setNoteValue] = useState(route.params.noteData);

  const dispatch = useDispatch();

  const backToNote = () => {
    navigation.goBack();
  };

  // const saveNote = () => {
  //   console.log('Title' + title + 'note' + noteValue);
  //   dispatch(
  //     noteListSlice.actions.updateNote({
  //       id: route.params.noteId,
  //       title: title,
  //       data: noteValue,
  //       time: DateUtils.getCurrentDateTime(),
  //     }),
  //   );
  // };

  const updateNoteDetail = async () => {
    await ref
      .doc(route.params.noteId)
      .update({
        title: title,
        time: DateUtils.getCurrentDateTime(),
        data: noteValue,
      })
      .then(() => console.log('Done'));
  };

  return (
    <View style={styles.container}>
      <HeaderNavigation
        title="Notes"
        onBackButtonClicked={() => backToNote()}
        onSaveButtonClicked={() => updateNoteDetail()}
      />
      <TextInput
        style={styles.title}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.note}
        placeholder={'Note'}
        multiline={true}
        value={noteValue}
        onChangeText={text => setNoteValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  note: {
    fontSize: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    transform: [{rotate: '180deg'}],
  },
  backButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButtonContainer: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
  textButton: {
    color: Color.lightGreen,
    fontSize: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
});

export default NoteDetailScreen;
