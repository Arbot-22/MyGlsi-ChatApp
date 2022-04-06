import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useChatContext } from 'stream-chat-expo'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthContext from '../contexts/Authentification'

const SignUpScreen = () => {
  const [number, setnumber] = useState("");
  const [name, setname] = useState(""); 

  const { setUserId } = useContext(AuthContext)
  const { client } = useChatContext();

    const connectUser = async (name: string, number: string) => {
      await client.connectUser(
        {
          id: number,
          name: name,
          //image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken(number),
      );
      const channel = client.channel("livestream", "Glsi", { name: "master 2" })
      await channel.watch();

      setUserId("number")
    };


  const signUp = () =>{ 
    connectUser(name, number); 
  } ; 
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          placeholder="name"
          onChangeText={setname}
          style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={number}
          placeholder="number"
          onChangeText={setnumber}
          style={styles.input}
        />
      </View>
      <Pressable onPress={signUp} style={styles.button}>
        <Text>Sign Up</Text>
      </Pressable>
    </SafeAreaView>



  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10
  },
  input: {
    borderRadius: 5
  },
  button: {
    backgroundColor: "#128c7e",
    padding: 15,
    alignItems: "center",
    margin: 10,
    borderRadius: 5
  }

})
export default SignUpScreen