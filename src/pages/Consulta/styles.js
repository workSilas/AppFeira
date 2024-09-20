import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const listVW = width * 0.90; // 5vw
const listVH = height * 0.55; // 5vh

const fontSizeVW = width * 0.07; // 5vw

const fontListSizeVW = width * 0.05; // 5vw

const refresh = width * 0.05; // 5vw


const styles = StyleSheet.create({
    background: {
        width: '100vw',
        height: '70vh'
    },
    section: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    image: {
        width: 150,
        height: 150,
    },
    text: {
        fontWeight: "900",
        color: '#fff',
        fontSize: 30
    },
    button: {
        width: '50%',
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
    sectionList: {
        backgroundColor: '#fff',
        width: listVW,
        height: listVH,
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20,
        marginTop: 20,
        height: `50%`
    },
    refresh: {
        width: '25%',
        height: 25,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 5,
        marginBottom: 10,
        marginRight: '5%'
    },
    textRefresh: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "400",
        fontSize: refresh,
    },
    sectionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000'
    },
    title: {
        fontWeight: "600",
        color: '#000',
        fontSize: fontListSizeVW
    },
    list: {
        marginTop: 20,
        width: '90%',
        bottom: 0
    },
    listView: {
        display: 'flex',
        width: '90%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 12,
        padding: 20,
        backgroundColor: 'orange',
        width: '100%'
    },
    itemList: {
        fontWeight: "700",
        color: '#fff',
        fontSize: fontListSizeVW
    }
});

export default styles;