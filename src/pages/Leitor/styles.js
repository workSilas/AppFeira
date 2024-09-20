import { StyleSheet } from "react-native";

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const backVH = height * 0.50; // 5vw
const fontSizeVW = width * 0.08; // 5vh


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        marginBottom: "10%",
    },
    image: {
        width: 250,
        height: 250,
    },
    section: {
        width: '100%',
        height: backVH,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
    },
    button: {
        width: '60%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 12
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "900",
        fontSize: fontSizeVW,
    },
    list: {
        gap: 30,
        padding: 20
    }
});

export default styles;