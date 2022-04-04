import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Color from '../../constants/Color';
import {useRoute} from '@react-navigation/native';
import NoteList from '../../components/Flatlist/NoteList';
import {useSelector} from 'react-redux';
import {noteListSelector} from '../../redux/Selector';
import {addNewNote} from '../../redux/Actions';
import InputDialog from '../../components/Dialog/InputDialog';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import DateUtils from '../../utils/DateUtils';

type NavigationProps = {
  title: string;
  onClicked: (param: any) => void;
};

type ButtonProps = {
  onClicked: (param: any) => void;
};

const HeaderNavigation = (props: NavigationProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.onClicked}>
        <Image style={styles.image} source={require('../../assets/next.png')} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const NewNote = (props: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onClicked}>
        <Image
          style={styles.imageButton}
          source={require('../../assets/new_file.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function NoteScreen({navigation}: any) {
  const [isInputDialogShow, setShowInputDialog] = useState(false);
  // const [noteId, setNoteId] = useState();
  // const [noteData, setNoteData] = useState('');

  const route = useRoute();

  const dispatch = useDispatch();

  const noteList = useSelector(noteListSelector);

  const showInputDialog = () => {
    setShowInputDialog(true);
  };

  const hideInputDialog = () => {
    setShowInputDialog(false);
  };

  const createUUID = () => {
    return uuid.v4();
  };

  const createNewNote = (noteTitle: string) => {
    dispatch(
      addNewNote({
        id: createUUID(),
        title: noteTitle,
        time: DateUtils.getCurrentDateTime(),
        note: '',
      }),
    );
    goToNoteDetail(route.params.folderName, noteTitle, '');
    hideInputDialog();
  };

  const goToNoteDetail = (folderName: string, title: string, data: string) => {
    navigation.navigate('NoteDetail', {
      folderName: folderName,
      title: title,
      data: data,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigation
        title={'Folders'}
        onClicked={() => navigation.goBack()}
      />
      <Text style={styles.section}>{route.params.folderName}</Text>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic">
        <NoteList
          data={noteList}
          onItemClickCallback={(id, title, note) =>
            goToNoteDetail(route.params.folderName, title, note)
          }
        />
      </ScrollView>
      <InputDialog
        isShown={isInputDialogShow}
        title={'New Note'}
        message={'Enter a name for this note'}
        negativeButtonTitle={'Cancel'}
        negativeCallback={hideInputDialog}
        positiveButtonTitle={'Save'}
        positiveCallback={noteTitle => createNewNote(noteTitle)}
      />
      <NewNote onClicked={() => showInputDialog()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Color.white,
  },
  scrollViewContainer: {
    width: '100%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageButton: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  section: {
    fontSize: 35,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});
