import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DataToShow, fetchData } from '../../Services/ApiService';
import DataModule from '../Molecules/DataModule';



export default function RoomData() {
  const [data, setData] = useState<DataToShow | null>(null);

  useEffect(() => {
    fetchData()
      .then((responseData) => setData(responseData))
      .catch((error) => console.error('Errore durante il recupero dei dati:', error));
  }, []);

  const dataToShow: DataToShow = {
    temperature: 30,
    humidity: 10,
    deskHeight: 0
  };


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <DataModule dataLabel="Temperature: " data={data?.temperature || 0} dataUnit="°C" />
      <DataModule dataLabel="Humidity: " data={data?.humidity || 0} dataUnit="%" />
      <DataModule dataLabel="Desk height: " data={data?.deskHeight || 0} dataUnit="cm" />
      <Button title="Refresh" onPress={() => fetchData().then((responseData) => setData(responseData))} />
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
