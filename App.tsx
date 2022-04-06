import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { StreamChat } from 'stream-chat'
import { OverlayProvider, Chat, ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const API_KEY = 'tcw38fr86htp';
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<any>(null)
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: '771806919',
          name: 'Babacar',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('771806919'),
      );
      const channel = client.channel("messaging", "Glsi", { name: "master 2" })
      await channel.watch();

      setIsReady(true);

    };

    connectUser();


  }, []);

  console.log(isReady);
  const onChannelPress = (channel: any) => {
    setSelectedChannel(channel);
  }

  if (!isLoadingComplete || !isReady) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <OverlayProvider giphyVersion={'original'}>
          <Chat client={client}>
            {selectedChannel ? (
              <Channel channel={selectedChannel}>
                <Text onPress={() => selectedChannel(null)}> Return </Text>
                <MessageList/>
                <MessageInput/>
              </Channel>
            ) : (
              <ChannelList onSelect={onChannelPress} />
            )};

          </Chat>
        </OverlayProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
