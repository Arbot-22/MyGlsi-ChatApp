import { View, Text } from 'react-native'
import React from 'react'
import { MessageInput, MessageList, Channel } from 'stream-chat-expo'
import { useRoute } from '@react-navigation/core';

const ChannelScreen = () => {

  const route = useRoute();
  
  const channel = route.params?.channel

  return (
    <Channel channel={channel}>
      <MessageList/>
      <MessageInput/>
    </Channel>
  )
}

export default ChannelScreen