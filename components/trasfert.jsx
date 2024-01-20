import * as React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';

function ListTransfert(props) {
  return (
    <View>
      <Card style={styleCard.root}>
        <Card.Content>
          <Title style={styleCard.textTitle}>{props.item.personne.nom} {props.item.personne.prenom}</Title>
          <Paragraph style={styleCard.textMontant}>Montant: {props.item.montant}</Paragraph>
        </Card.Content>
      </Card>
      <Divider/>
    </View>
  )
}


const styleCard = StyleSheet.create({
  root:{
    height:80,
  },
  textTitle:{
    fontSize:20,
    fontWeight:"400"
  },
  textMontant:{
    fontSize:15,
    fontWeight:"700"
  }
})
export default ListTransfert;