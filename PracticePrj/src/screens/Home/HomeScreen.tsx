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
import CircleImage from '../../components/Image/CircleImage';
import FolderList from '../../components/Flatlist/FolderList';
import AlertDialog from '../../components/Dialog/AlertDialog';
import FirebaseAuthUtils from '../../utils/FirebaseUtils';
import InputDialog from '../../components/Dialog/InputDialog';
import FloatingActionButton from '../../components/Button/FloatingActionButton';
import Color from '../../constants/Color';
import {useDispatch, useSelector} from 'react-redux';
import {folderListSelector} from '../../redux/Selector';
import {addNewFolder} from '../../redux/Actions';
import uuid from 'react-native-uuid';

type ButtonProps = {
  onClicked: (param: any) => void;
};

class Avatar extends Component {
  render() {
    return (
      <View style={styles.avatarContainer}>
        <CircleImage
          image={require('../../assets/user.png')}
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
            source={require('../../assets/logout.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default function HomePage({navigation}: any) {
  const [isAlertDialogShow, setShowAlertDialog] = useState(false);
  const [isInputDialogShow, setShowInputDialog] = useState(false);

  const dispatch = useDispatch();

  const folderList = useSelector(folderListSelector);

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

  const createNewFolder = (value: string) => {
    dispatch(
      addNewFolder({
        id: uuid.v4(),
        title: value,
      }),
    );
    hideInputDialog();
  };

  const goToNote = (value: string) => {
    navigation.navigate('Note', {
      folderName: value,
    });
  };

  const logout = () => {
    FirebaseAuthUtils.signOut().catch(e => {
      console.log(e);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onClicked={() => showAlertDialog()} />
      <Text style={styles.section}>Folders</Text>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic">
        <FolderList
          data={folderList}
          onItemClickCallback={value => goToNote(value)}
        />
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
        title={'New Folder'}
        message={'Enter a name for this folder'}
        negativeButtonTitle={'Cancel'}
        negativeCallback={hideInputDialog}
        positiveButtonTitle={'Save'}
        positiveCallback={value => createNewFolder(value)}
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
