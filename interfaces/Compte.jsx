import { Text, View,FlatList } from "react-native";
import React from 'react';
import ListCompte from "../components/listCompte";
import SearchBar from "../components/searchBar";
import Fab from "../components/fab";
import { useFetchCompte } from "../tools/controllers/compte";

function Compte() {
  const {compte,isLoading} = useFetchCompte('http://localhost:3000/api/v1/compte');
    return(
        <View style={{flex:1}}>
            <SearchBar title="Compte"/>
            <FlatList
                data={compte}
                renderItem={ListCompte}
                keyExtractor={(item) => item._id}
      />
      <Fab/>
        </View>
    )
}

export default Compte;

