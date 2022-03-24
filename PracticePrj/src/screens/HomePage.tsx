import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomePage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Demo</Text>
                <Button title={'Demo button'} />
            </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        justifyContent: 'center',
    }
})

export default HomePage;
