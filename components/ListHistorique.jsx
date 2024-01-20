import * as React from 'react';
import { View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import Avatar from './avatarText';



function ListHistorique({item}) {
  const fistName = (nom)=>{
    const name = nom.substr(0,1);
    return name;
  }
  return(
    <View>
      <List.Item
    title={item.nom}
    description={item.montant}
    left={props => <Avatar title={fistName(item.nom)}/>}
  />
  <Divider/>
    </View>
  )
}

export default ListHistorique;