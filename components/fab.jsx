import * as React from 'react';
import { FAB, Portal, Provider, Button, Paragraph, Dialog } from 'react-native-paper';
import { View } from 'react-native';

const Fab = () => {
  const [state, setState] = React.useState({ open: false });
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const onStateChange = ({ open }) => setState({ open });

  return (
    <Provider>
      <Portal>
        <FAB.Group
          icon={'plus'}
          actions={[
            { icon: 'plus', onPress: () => showDialog() },
          ]}
          onStateChange={onStateChange}
          onPress={() => showDialog()}
        />
      </Portal>
      <Dialog style={{marginTop:'-100', justifyContent: 'center', backgroundColor: 'yellow' }} visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>This is simple dialog</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Provider>
  );
};

export default Fab;