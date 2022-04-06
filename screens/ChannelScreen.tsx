import { View, Text } from 'react-native'
import React from 'react'
import { MessageInput, MessageList } from 'stream-chat-expo'
import { useRoute } from '@react-navigation/core';

const ChannelScreen = () => {
  const route = useRoute();

  const channel = route.params.?channel;
  if (!channel) {
    return <Text>Channel does not exist.</Text>
  }
  return (
    <ChannelScreen channel={channel}>
      <MessageList/>
      <MessageInput/>
    </ChannelScreen>
  )
}

export default ChannelScreen