import { Text, View, FlatList} from "react-native";
import React from 'react';
import ListHistorique from "../components/ListHistorique";
import SearchBar from "../components/searchBar";
const DATA = [
    {
        id:1,
      nom: "PETER NDENGO",
      montant: "100 USD",
    },
    {
        id:2,
        nom: "JEREMIE EZAGA",
        montant: "500000 CDF",
    },
    {
        id:3,
        nom: "HERMAN GEKU",
        montant: "50 USD",
    },
      {
        id:4,
        nom: "DANNY BALIKO",
        montant: "56 USD",
      },
      {
        id:7,
        nom: "JOSUE MBUYU",
        montant: "560 USD",
      },
      {
        id:5,
        nom: "ONESIME POKE",
        montant: "5600 USD",
      },
      {
        id:6,
        nom: "PIDI GLODY",
        montant: "5 USD",
      },
      {
        id:8,
        nom: "TELVIE TSHIBANGU",
        montant: "780 USD",
      },
  ];

function Historique() {
    return(
        <View>
            <SearchBar title="HISTORIQUE"/>
            <FlatList
                data={DATA}
                renderItem={ListHistorique}
                keyExtractor={(item) => item.id}
      />
        </View>
    )
}

export default Historique;