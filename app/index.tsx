import { Link, Stack } from "expo-router";
import {
  Button,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle />,
          headerRight: () => (
            <Button
              onPress={() => setCount((c) => c + 1)}
              title="Update count"
            />
          ),
        }}
      />
      <Text>Count: {count}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Link href={{ pathname: "/details", params: { name: "Bacon" } }}>
          <Text style={styles.buttonText}>Go to Details</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Link href={{ pathname: "/settings", params: { name: "Settings" } }}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Link href={{ pathname: "/user/[id]", params: { id: "123" } }}>
          <Text style={styles.buttonText}>Go to User</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    borderRadius: 5,
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: "#FF5733", // Змініть колір на бажаний
    borderRadius: 10,
    paddingVertical: 15, // Збільшення відступу по вертикалі
    paddingHorizontal: 30, // Збільшення відступу по горизонталі
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18, // Збільшення розміру шрифту
    textAlign: "center",
  },
});
