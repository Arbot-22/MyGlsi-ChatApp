import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React, { useContext } from 'react'
import { useChatContext } from 'stream-chat-expo';
import AuthContext from '../contexts/Authentification';
import { useNavigation } from '@react-navigation/core';

const UserListItem = ({ user }) => {

  const { client } = useChatContext();
  const { userId } = useContext(AuthContext);
  const navigation = useNavigation();
  
  const onPress= async () => {
    if(!userId || !user.id) {
      return;
    }
    const channel = client.channel("messaging", {members: [user.id,userId]})
    await channel.watch();
    navigation.navigate("Channel", {channel})
  }
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: user.image}}/>
      <Text>{user.name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection:'row',
    margin:'5'
  
  },
  image: {
    width: '50', 
    height: '50',
    backgroundColor:"#dcf8c6",
    borderRadius:50,
    marginRight:'5'
  },

})

export default UserListItem