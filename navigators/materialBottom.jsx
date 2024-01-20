import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../interfaces/Home';
import Setting from '../interfaces/Settings';
import Compte from '../interfaces/Compte';
import Transfert from '../interfaces/Transfert';
import Historique from '../interfaces/Historique';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'transfert', title: 'Transfert', icon: 'wallet' },
    { key: 'setting', title: 'Setting', icon: 'account-settings' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    setting:Setting,
    compte:Compte,
    transfert:Transfert,
    historique:Historique
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;