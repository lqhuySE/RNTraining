import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import CircleImage from '../components/Image/CircleImage';
import FirebaseAuthUtils from '../utils/FirebaseUtils';
import FolderList from '../components/Flatlist/FolderList';
import CustomAlertDialog from '../components/Dialog/CustomAlertDialog';

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

class LoginWithThirdParty extends Component<ButtonProps> {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button title={'show dialog'} onPress={this.props.onClicked} />
      </View>
    );
  }
}

export default function HomePage() {
  const [isAlertDialogShow, setShowAlertDialog] = useState(false);

  const showAlertDialog = () => {
    setShowAlertDialog(true);
  };

  const hideAlertDialog = () => {
    setShowAlertDialog(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onClicked={() => showAlertDialog()} />
      <Text style={styles.section}>Folders</Text>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.scrollViewContainer}
        contentInsetAdjustmentBehavior="automatic">
        <FolderList />
      </ScrollView>
      <LoginWithThirdParty onClicked={() => showAlertDialog()} />
      <CustomAlertDialog
        isShowed={isAlertDialogShow}
        callback={hideAlertDialog}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
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
