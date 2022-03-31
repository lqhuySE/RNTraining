import React from 'react';
import {View, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';

type AlertDialogProps = {
  isShown: boolean;
  title: string;
  message: string;
  negativeCallback: () => void;
  positiveCallback: () => void;
};

const AlertDialog = (props: AlertDialogProps) => {
  const handleOk = () => {
    props.positiveCallback();
  };

  const handleCancel = () => {
    props.negativeCallback();
  };

  return (
    <View style={styles.dialogContainer}>
      <Dialog.Container visible={props.isShown}>
        <Dialog.Title>{props.title}</Dialog.Title>
        <Dialog.Description>{props.message}</Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="OK" onPress={handleOk} />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AlertDialog;
