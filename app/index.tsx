import { Link, Stack } from "expo-router";
import { Button, Text, Image, StyleSheet, View } from "react-native";
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
      <Link href={{ pathname: "/details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
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
});
