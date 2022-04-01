import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateNote} from '../../redux/Actions';

type NavigationProps = {
  title: string;
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

const NoteDetailScreen = ({navigation}: any) => {
  const route = useRoute();

  const [title, setTitle] = useState(route.params.title);
  const [noteValue, setNoteValue] = useState(route.params.note);

  const dispatch = useDispatch();

  const backToNote = () => {
    navigation.goBack();
    //saveNote();
  };

  // const getCurrentDate = () => {
  //   const date = new Date().getDate();
  //   const month = new Date().getMonth() + 1;
  //   const year = new Date().getFullYear();
  //   const hour = new Date().getHours();
  //   const min = new Date().getMinutes();
  //   const second = new Date().getSeconds();
  //
  //   return (
  //     date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + second
  //   );
  // };

  // const saveNote = () => {
  //   dispatch(
  //     updateNote({
  //       id: route.params.id,
  //       title: title,
  //       note: noteValue,
  //       time: getCurrentDate(),
  //     }),
  //   );
  // };

  return (
    <View style={styles.container}>
      <HeaderNavigation
        title={route.params.folderName}
        onClicked={() => backToNote()}
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
});

export default NoteDetailScreen;
