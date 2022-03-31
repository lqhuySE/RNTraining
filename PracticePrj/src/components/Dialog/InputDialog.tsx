import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';

type InputDialogProps = {
  isShown: boolean;
  title: string;
  message: string;
  negativeCallback: () => void;
  positiveCallback: (value: string) => void;
};

const InputDialog = (props: InputDialogProps) => {
  const [value, setValue] = useState<string>('');

  const handleDone = (text: string) => {
    props.positiveCallback(text);
  };

  const handleCancel = () => {
    props.negativeCallback();
  };

  return (
    <View style={styles.dialogContainer}>
      <Dialog.Container visible={props.isShown}>
        <Dialog.Title>{props.title}</Dialog.Title>
        <Dialog.Input
          placeholder={props.message}
          onChangeText={text => setValue(text)}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Done" onPress={() => handleDone(value)} />
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

export default InputDialog;
