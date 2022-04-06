import { useEffect, useState } from 'react';
import { StyleSheet,FlatList } from 'react-native';
import { useChatContext } from 'stream-chat-expo';
import { View } from '../components/Themed';
import UserListItem from '../components/UserListItem';

export default function UsersScreen() {
  const [users, setusers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  const { client } = useChatContext();

  const fetchUsers = async () => {
    setIsLoading(true)
    const response = await client.queryUsers({});
    setusers(response.users);
    setIsLoading(true)
  }
    useEffect(() => {
      fetchUsers();
    }, [])

    return (
      <View style={styles.container}>
        <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem user={item} />}
        refreshing={isLoading}
        onRefresh={fetchUsers}
      />

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    }
  });

