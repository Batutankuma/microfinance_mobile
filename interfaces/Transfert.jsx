import { View, FlatList, TouchableOpacity } from "react-native";
import React from 'react';
import SearchBar from "../components/searchBar";
import { useFetchOperation, useFetchOperationPost } from "../tools/controllers/operation";
import ListTransfert from "../components/listCompte";
import { Paragraph, Dialog, TextInput, Button } from 'react-native-paper';
import axios from 'axios'

function Transfert() {

    const { operation, isLoading } = useFetchOperation('http://localhost:3000/api/v1/operation');
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const [montant, setMontant] = React.useState();
    const [compte, setCompte] = React.useState('');
    const [destinateur, setDestinateur] = React.useState('');
    const [motif, setMotif] = React.useState('');
    function envoi(name) {
        axios.post(url, {
            "montant": 1,
            "taux": "6170a5a678dc4064246236a5",
            "personne": "6170a096f1ff362a9477cc22",
            "compte": "6170a2da48794a62dcfab6ff",
            "motif": "envoi",
            "destinateur": "61787ac0c8707c43c8e318e2"
        }).then((response)=> console.log("Alphat"))
        .catch((ee)=> console.log("sssss000"));
    }
    return (
        <View style={{ flex: 1 }}>
            <SearchBar title="Compte" />
            <View style={{ marginTop: 10, alignItems: 'flex-end', backgroundColor: '#f7f9fc' }}>
                <TouchableOpacity onPress={showDialog} style={{ fontWeight: "900", backgroundColor: 'white', alignItems: 'center', height: 30, width: 150, borderRadius: 20 }}>Ajouter Compte</TouchableOpacity>
            </View>
            <FlatList
                data={operation}
                renderItem={ListTransfert}
                keyExtractor={(item) => item._id}
            />
            <Dialog style={{ height: 500 }} visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>This is simple dialog</Paragraph>
                    <TextInput
                        label="Montant"
                        value={montant}
                        onChangeText={e => setMontant(e)}
                    />
                    <TextInput
                        label="Compte"
                        value={compte}
                        onChangeText={e => setCompte(e)}
                    />
                    <TextInput
                        label="Destinateur"
                        value={destinateur}
                        onChangeText={e => setDestinateur(e)}
                    />
                    <TextInput
                        label="Motif"
                        value={motif}
                        onChangeText={e => setMotif(e)}
                    />
                </Dialog.Content>
                <Dialog.Actions style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Button onPress={() => envoi("ba")} contentStyle={{ backgroundColor: '#2a304b' }} color="white" style={{ fontWeight: "900", backgroundColor: 'white', alignItems: 'center', height: 30, width: 150, borderRadius: 20 }}>Faire Operation</Button>
                </Dialog.Actions>
            </Dialog>
        </View>
    )
}

export default Transfert;

