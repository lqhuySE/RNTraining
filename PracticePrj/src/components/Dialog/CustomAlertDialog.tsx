import React from 'react';
import {View, Modal, StyleSheet, Text} from 'react-native';
import Color from '../../constants/Color';
import CustomDialogButton from '../Button/CustomDialogButton';
import FirebaseAuthUtils from '../../utils/FirebaseUtils';

type AlertDialogProps = {
  isShown: boolean;
  callback: () => void;
};

const CustomAlertDialog = (props: AlertDialogProps) => {
  const okButtonClick = () => {
    logout();
  };

  const cancelButtonClick = () => {
    props.callback();
  };

  const logout = () => {
    FirebaseAuthUtils.signOut().catch(e => {
      console.log(e);
    });
  };

  return (
    <Modal transparent={true} visible={props.isShown}>
      <View style={styles.dialogContainer}>
        <View style={styles.alertDialog}>
          <Text style={styles.text}>Are you sure, you want to exit ?</Text>
          <View style={styles.bottomButtonContainer}>
            <CustomDialogButton
              onClicked={() => cancelButtonClick()}
              title={'Cancel'}
            />
            <CustomDialogButton
              onClicked={() => okButtonClick()}
              title={'OK'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  alertDialog: {
    width: 350,
    height: 150,
    borderRadius: 5,
    backgroundColor: Color.white,
  },
  text: {
    fontSize: 15,
    margin: 20,
  },
  bottomButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20,
  },
});

export default CustomAlertDialog;

// // home screen
// const [isDialogShowed, setIsDialogShowed] = useState<boolean>(false);
//
// const setIsShow = () => {
//   setIsDialogShowed(false);
// };
//
// // gọi tới custom alert
//
// <CustomAlertDialog isShowed={isDialogShowed} callback={setIsShow} />;
