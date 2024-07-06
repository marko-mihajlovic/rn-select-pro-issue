import {
  Select,
  SelectProvider,
} from "@mobile-reality/react-native-select-pro";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SelectProvider>
        <SafeAreaView style={styles.container}>
          <Select options={data} />
        </SafeAreaView>
      </SelectProvider>
    </SafeAreaProvider>
  );
}

const data = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
  {
    label: "Option 4",
    value: "option4",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    justifyContent: "center",
  },
});
