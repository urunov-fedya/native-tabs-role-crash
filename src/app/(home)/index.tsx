import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/detail">
        <Text style={{ fontSize: 18, color: '#007AFF' }}>Open detail (crashes)</Text>
      </Link>
    </View>
  );
}
