import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Dialog from 'react-native-dialog';

type InputDialogProps = {
  isShown: boolean;
  title: string;
  message: string;
  negativeButtonTitle: string;
  negativeCallback: () => void;
  positiveButtonTitle: string;
  positiveCallback: (text: string) => void;
};

const InputDialog = (props: InputDialogProps) => {
  const [value, setValue] = useState<string>('');

  const onPositiveButtonClick = (text: string) => {
    if (text === '') {
      Alert.alert('Warning', 'Name of folder is not emptied');
    } else {
      setValue(text);
      props.positiveCallback(value);
      console.log('Input dialog' + value);
    }
  };

  const onNegativeButtonClick = () => {
    props.negativeCallback();
  };

  return (
    <View style={styles.dialogContainer}>
      <Dialog.Container visible={props.isShown}>
        <Dialog.Title style={styles.title}>{props.title}</Dialog.Title>
        <Dialog.Input
          placeholder={props.message}
          onChangeText={text => setValue(text)}
        />
        <Dialog.Button
          label={props.negativeButtonTitle}
          onPress={onNegativeButtonClick}
        />
        <Dialog.Button
          label={props.positiveButtonTitle}
          onPress={() => onPositiveButtonClick(value)}
        />
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
  title: {
    fontWeight: 'bold',
  },
});

export default InputDialog;
