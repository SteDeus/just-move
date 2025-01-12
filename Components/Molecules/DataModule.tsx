import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Definizione delle props con TypeScript
export interface DataModuleProps {
  dataLabel: string;
  data: number | string;
  dataUnit: string;
}

const DataModule: React.FC<DataModuleProps> = ({ dataLabel, data, dataUnit }) => {

  return (
    <View >
      <Text>{dataLabel} {data}{dataUnit}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default DataModule;

const styles = StyleSheet.create({

});
