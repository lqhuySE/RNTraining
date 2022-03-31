import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import CircleImage from '../components/Image/CircleImage';
import FolderList from '../components/Flatlist/FolderList';
import AlertDialog from '../components/Dialog/AlertDialog';
import FirebaseAuthUtils from '../utils/FirebaseUtils';
import InputDialog from '../components/Dialog/InputDialog';
import FloatingActionButton from '../components/Button/FloatingActionButton';
import Color from '../constants/Color';

type ButtonProps = {
  onClicked: (param: any) => void;
};

class Avatar extends Component {
  render() {
    return (
      <View style={styles.avatarContainer}>
        <CircleImage
          image={require('../assets/user.png')}
          size={30}
          isRadius={false}
          radius={40}
        />
        <Text>Hi Huy</Text>
      </View>
    );
  }
}

class Header extends Component<ButtonProps> {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Avatar />
        <TouchableOpacity onPress={this.props.onClicked}>
          <Image
            style={styles.image}
            source={require('../assets/logout.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default function HomePage() {
  const [isAlertDialogShow, setShowAlertDialog] = useState(false);
  const [isInputDialogShow, setShowInputDialog] = useState(false);
  const [noteName, setNoteName] = useState('');

  const showAlertDialog = () => {
    setShowAlertDialog(true);
  };

  const hideAlertDialog = () => {
    setShowAlertDialog(false);
  };

  const showInputDialog = () => {
    setShowInputDialog(true);
  };

  const hideInputDialog = () => {
    setShowInputDialog(false);
  };

  const createNewNote = (value: string) => {
    setNoteName(value);
    hideInputDialog();
  };

  const logout = () => {
    FirebaseAuthUtils.signOut().catch(e => {
      console.log(e);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onClicked={() => showAlertDialog()} />
      <Text style={styles.section}>Folder</Text>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic">
        <FolderList onItemClickCallback={value => createNewNote(value)} />
      </ScrollView>
      <AlertDialog
        isShown={isAlertDialogShow}
        title={'Logging out'}
        message={'Are you sure, you want to exit ?'}
        negativeCallback={hideAlertDialog}
        positiveCallback={logout}
      />
      <InputDialog
        isShown={isInputDialogShow}
        title={'New note'}
        message={'Please enter note name'}
        negativeCallback={hideInputDialog}
        positiveCallback={value => createNewNote(value)}
      />
      <FloatingActionButton onClicked={showInputDialog} />
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
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  section: {
    fontSize: 35,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});
