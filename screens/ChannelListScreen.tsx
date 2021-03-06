import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ChannelList } from 'stream-chat-expo';

import { RootTabScreenProps } from '../types';

export default function ChannelListScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  const onChannelPressed = (channel: any) => {
    navigation.navigate("Channel", {channel})
  }
  return (
    <ChannelList onSelect={onChannelPressed} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
