import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { StreamChat } from 'stream-chat'
import { OverlayProvider, Chat, ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo'

import AuthContext from './contexts/Authentification';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const API_KEY = 'tcw38fr86htp';
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  const [userId, setUserId] = useState("")
  const [selectedChannel, setSelectedChannel] = useState<any>(null)
  useEffect(() => {
    
  }, []);

  const onChannelPress = (channel: any) => {
    setSelectedChannel(channel);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContext.Provider value={{userId,setUserId}}>
        <OverlayProvider giphyVersion={'original'}>
          <Chat client={client}>
            <Navigation colorScheme="light" />
          </Chat>
        </OverlayProvider>
        <StatusBar />
        </AuthContext.Provider>
       
      </SafeAreaProvider>
    );
  }
}
