import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontSizeVW = width * 0.06; // 5vw
const fontSizeVH = height * 5; // 5vh

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    titulo: {
        textAlign: 'center',
        fontWeight: "900",
        fontSize: 30
    },
    image: {
        width: 200,
        height: 200
    },
    section: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
        padding: '15%',
    },
    aside: {
        width: '100%',
        alignItems: 'flex-end',
        padding: 10
    },
    input: {
        width: '100%',
        gap: 10
    },
    escanear: {
        width: '80%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 12
    },
    textEscanear: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "900",
        fontSize: fontSizeVW,
    },
    consulta: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 12
    },
    textConsulta: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "900",
        fontSize: fontSizeVW,
    }
});

export default styles;