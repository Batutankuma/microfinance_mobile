import * as React from 'react';
import { Avatar } from 'react-native-paper';

const Avatars = ({title}) => (
  <Avatar.Text size={40} label={title} />
);

export default Avatars;