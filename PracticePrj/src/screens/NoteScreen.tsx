import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import FolderList from '../components/Flatlist/FolderList';
import Color from '../constants/Color';
import {useRoute} from '@react-navigation/native';
import NoteList from '../components/Flatlist/NoteList';

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
        <Image style={styles.image} source={require('../assets/next.png')} />
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
          source={require('../assets/new_file.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function NoteScreen({navigation}: any) {
  const route = useRoute();

  const goToNoteDetail = (
    folderName: string,
    noteTitle: string,
    isNewNote: boolean,
  ) => {
    navigation.navigate('NoteDetail', {
      folderName: folderName,
      noteTitle: noteTitle,
      isNewNote: isNewNote,
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
          onItemClickCallback={value =>
            goToNoteDetail(route.params.folderName, value, false)
          }
        />
      </ScrollView>
      <NewNote
        onClicked={() => goToNoteDetail(route.params.folderName, '', true)}
      />
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
