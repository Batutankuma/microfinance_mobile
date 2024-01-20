import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Card} from 'react-native-paper';

function CardCompte(props) {
  return (
    <View >
      <Card style={styleCard.root}>
        <Card.Content>
            <View style={styleCard.header}>
              <Text style={styleCard.textMontant}>$ {props.item.montant}</Text>
              <Text style={styleCard.textTitle}>SPAY</Text>
            </View>
            <View style={styleCard.codeCompte}>0000 0000 0000 2560 </View>
        </Card.Content>
      </Card>
    </View>
  )
}

/**
 * <Title style={styleCard.textTitle}>{props.item.devise.code}</Title>
          <Paragraph style={styleCard.textMontant}>Montant: {props.item.montant}</Paragraph>
 */


const styleCard = StyleSheet.create({
  root:{
    height:150,
    width: 250,
    marginBottom:5,
    marginHorizontal:10,
    borderRadius: 15,
    backgroundColor:'#2a304b'
  },
  header:{
    marginTop:10,
    height:30,
    alignContent:'space-around',
    flexDirection:'row',
  },
  textTitle:{
    textAlign:"center",
    fontSize:15,
    fontWeight:"800",
    marginStart:20,
    justifyContent:'flex-end',
    flex:2,
    color:'white'
  },
  textMontant:{
    fontSize:15,
    fontWeight:"800",
    flex:4,
    alignItems:'center',
    color:'white'
  },
  codeCompte:{
    marginTop:15,
    fontSize:20,
    fontWeight:"700",
    flex:4,
    color:'white'
  }
})
export default CardCompte;