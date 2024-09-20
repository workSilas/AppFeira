import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

export default function Home() {

    const navegacao = useNavigation()
    const { height } = Dimensions.get('window');

    const fontSizeVH = height * 0.68; // 5vh

    const [selected, setSelected] = React.useState("Patio");
    const [salas, setSalas] = React.useState("");

    const data = [
        { key: 'Auditorio', value: 'Auditorio', },
        { key: 'Andar 2', value: 'Andar 2' },
        { key: 'Andar 1', value: 'Andar 1' },
        { key: 'Patio', value: 'Patio', },
    ]
    const Salas = {
        'Patio': [
            { key: '1', value: 'Sala 4', },
            { key: '2', value: 'Sala 6', },
            { key: '3', value: 'Oficina Mecanica', },
            { key: '4', value: 'Oficina Eletrica', },
            { key: '5', value: 'Cedesp', },
            { key: '6', value: 'Fios de Berenice', },
            { key: '7', value: 'Info Escola', },
        ],
        'Andar 1': [
            { key: '9', value: 'Sala 18', },
            { key: '10', value: 'Sala 19', },
            { key: '11', value: 'Sala 20', },
        ],
        'Andar 2': [
            { key: '12', value: 'Sala 24', },
            { key: '13', value: 'Sala 25', },
            { key: '14', value: 'Sala 26', },
            { key: '15', value: 'Sala 27', },
        ],
        'Auditorio': [
            { key: '16', value: 'RH', },
            { key: '17', value: 'CATE', },
            { key: '18', value: 'Entrevista', },
        ],
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ display: 'flex' }}>
                <View style={styles.background}>

                    <View style={styles.header}>
                        <Text style={styles.titulo}>Validação de Entrada</Text>
                        <Image style={styles.image}
                            source={require('../../../assets/images/ilustracaoQr.png')}
                        >
                        </Image>
                    </View>
                    <ImageBackground
                        source={require('../../../assets/images/BackgroundInv.png')}
                        resizeMode="cover"

                        style={{
                            height: fontSizeVH
                        }}
                    >
                        <View style={styles.section}>

                            <TouchableOpacity
                                style={styles.consulta}
                                onPress={() => navegacao.navigate('Consulta', {
                                    sala: salas,
                                    andar: selected
                                })} // estou enviando a sala como se fosse um parametro de "rota", e la na tela "consulta" irei recupera-lo.
                            >

                                <Text style={styles.textConsulta}>CONSULTA</Text>
                            </TouchableOpacity>


                            <View style={styles.input}>

                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    inputStyles={{ color: '#000', fontWeight: '300' }}
                                    dropdownStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    dropdownItemStyles={{ borderStyle: 'solid', borderColor: '#000', borderWidth: 0.5 }}
                                    dropdownTextStyles={{ color: '#000', fontWeight: '300' }}

                                    setSelected={(val) => setSelected(val)}
                                    data={data}
                                    save="value"
                                    defaultOption={'Patio'}
                                />
                                <SelectList
                                    boxStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    inputStyles={{ color: '#000', fontWeight: '300' }}
                                    dropdownStyles={{ borderRadius: 0, backgroundColor: '#fff' }}
                                    dropdownItemStyles={{ borderStyle: 'solid', borderColor: '#000', borderWidth: 0.5 }}
                                    dropdownTextStyles={{ color: '#000', fontWeight: '300' }}

                                    setSelected={(val) => setSalas(val)}
                                    data={Salas[selected]}
                                    save="value"
                                    defaultOption={Salas[selected][0]}
                                />

                            </View>
                            <TouchableOpacity
                                style={styles.escanear}
                                onPress={() => navegacao.navigate('Leitor', {
                                    salaSelecionada: salas,
                                    andarSelecionado: selected
                                })}
                            >

                                <Text style={styles.textEscanear}>ESCANEAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View >
            </ScrollView>
        </SafeAreaView>
    )
}