import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

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

  const backToNote = () => {
    navigation.goBack();
    //TODO: add save note
  };

  return (
    <View style={styles.container}>
      <HeaderNavigation
        title={route.params.folderName}
        onClicked={() => backToNote()}
      />
      <TextInput
        style={styles.title}
        placeholder={route.params.isNewNote ? 'Title' : route.params.noteTitle}
      />
      <TextInput style={styles.note} placeholder={'Note'} multiline={true} />
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
