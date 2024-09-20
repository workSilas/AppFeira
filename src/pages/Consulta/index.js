import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Toast from "react-native-toast-message"

export default function Consulta() {
  const navegacao = useNavigation();
  const { params } = useRoute(); // o "useRoute" me da a possibilidade de recuperar parametros enviados."

  const { sala, qrCode, andar } = params; // fazendo desestruturação para pegar apenas o parametro q enviei la na home. Percebe-se que o nome segue o mesmo.
  console.log(qrCode); // no momento estou apenas mostrando no console, mas vc pode mostrar em qualquer lugar do teu codigo.
  console.log(sala);

  const [consulta, setConsulta] = useState([]);

  const url = "https://www.feiradeprofissoes-insf.com.br/api/visita";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZmVpcmEiLCJzZW5oYSI6ImZyMyEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjY3MDMyNDB9.yFTyVjiuoseejMKTj4pTLW0vGG0cvqX_vvUZ9NQZMyc";

  useEffect(() => {
    async function marcarVisita() {
      await axios.post(
        url,
        { andar: andar, sala: sala, qrcode: qrCode },
        { headers: { "x-access-token": token } }
      );
      Toast.show({
        text1: "Visita registrada!",
        type: "success"
      });
    }
    marcarVisita();
  }, []);

  async function listaConsulta() {
    let resp = await axios.get(`${url}/${andar}/${sala}`, {
      headers: { "x-access-token": token },
    });
    setConsulta(resp.data);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/images/Background.png")}
          resizeMode="cover"
        >
          <View style={styles.section}>
            <Image
              style={styles.image}
              source={require("../../../assets/images/LogoFeira.png")}
            />
            <Text style={styles.text}>Consulta</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navegacao.navigate("Home")}
            >
              <Text style={styles.textButton}>VOLTAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionList}>
            <TouchableOpacity
              style={styles.refresh}
              onPress={() => {
                listaConsulta();
              }}
            >
              <Text style={styles.textRefresh}>atualizar</Text>
            </TouchableOpacity>

            <View style={styles.sectionRow}>
              <Text style={styles.title}>Visitas</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.list}
              data={consulta.reverse()}
              renderItem={({ item }) => {
                return (
                  <View style={styles.listView}>
                    <Text style={styles.itemList}>{item.DT_VISITA}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => {
                item.id;
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
