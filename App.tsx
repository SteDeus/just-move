import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApiResponse, fetchData } from './Services/ApiService';

export default function App() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetchData()
      .then((responseData) => setData(responseData))
      .catch((error) => console.error('Errore durante il recupero dei dati:', error));
  }, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Fetched data: {data ? JSON.stringify(data) : 'Nessun dato'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
