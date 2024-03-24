
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Globals from '../Globals';
export default () => {

    return (
        <Text style={styles.logo}>HandManga</Text>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Globals.COLOR.LIGHT.COLOR5,
        paddingVertical: 15,
        position: 'relative'
    },
    logo: {
        color: Globals.COLOR.LIGHT.COLOR2,
        fontFamily: 'OceanRush',
        fontSize: 60
    },
    listScheduling: {
        width: '95%',
        backgroundColor: 'transparent',
        marginTop: 10
    },
    logo: {
        color: Globals.COLOR.LIGHT.COLOR2,
        fontFamily: 'OceanRush',
        fontSize: 30
    },
})