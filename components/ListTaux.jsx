import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListTaux = ({ item }) => (
  <View style={styled.root}>
    <View style={styled.icons}>icons</View>
    <View style={styled.description}>
      <View style={styled.header}>
        <Text style={{ fontSize: 16, fontWeight: '800',color:'#2a304b' }}>Batuta nkuma</Text>
        <Text style={{ fontSize: 15, fontWeight: '800',color:'#2a304b' }}>$ 4000</Text>
      </View>
      <View style={styled.footer}>
        <Text style={{ fontSize: 15, fontWeight: '400', color:'#2a304b' }}>01/11/2021</Text>
        <Text style={{ fontSize: 15, fontWeight: '400',color:'#2a304b' }}>taux 17.5%</Text>
      </View>
    </View>
  </View>
);


const styled = StyleSheet.create({
  root: {
    height: 70,
    flexDirection: 'row',
    backgroundColor:'white'
  },
  icons: {
    justifyContent:'center',
    alignItems:'center',
    flex: 2
  },
  description: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default ListTaux;