import { FlatList, StyleSheet, View, TouchableOpacity,Button } from "react-native";
import React from 'react';
import CardCompte from "../components/cardCompte";
import ListTaux from "../components/ListTaux";
import SearchBar from "../components/searchBar";
import { useFetchCompte } from "../tools/controllers/compte";
import { useFetchTaux } from "../tools/controllers/taux";
import { Paragraph, Dialog,TextInput } from 'react-native-paper';


function Home() {
  const { compte, isLoading } = useFetchCompte('http://localhost:3000/api/v1/compte');
  const { taux } = useFetchTaux('http://localhost:3000/api/v1/taux');
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [text, setText] = React.useState('');

  return (
    <View style={style.root}>
      <SearchBar title="Home" />
      <View style={{ marginTop: 10, alignItems: 'flex-end', backgroundColor: '#f7f9fc' }}>
        <TouchableOpacity  onPress={showDialog} style={{ fontWeight: "900", backgroundColor: 'white', alignItems: 'center', height: 30, width: 150, borderRadius: 20 }}>Ajouter Compte</TouchableOpacity>
      </View>
      <FlatList
        style={{ marginBottom: 2 }}
        data={compte}
        renderItem={CardCompte}
        keyExtractor={(item) => item._id}
        horizontal="true"
      />
      <FlatList
        style={{ flex: 11 }}
        data={taux}
        renderItem={ListTaux}
        keyExtractor={(item) => item._id}
      />
       <Dialog style={{height:500}} visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
              <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Donedddddddddddddd</Button>
            </Dialog.Actions>
          </Dialog>
    </View>
  )
}

const style = StyleSheet.create({
  root: {
    backgroundColor: '#f7f9fc',
    flex: 1,
  }
})
export default Home;




