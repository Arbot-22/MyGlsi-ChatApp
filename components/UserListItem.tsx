import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const UserListItem = ({ user }) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: user.image}}/>
      <Text>{user.name}</Text>
    </View>
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