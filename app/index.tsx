import { Link } from "expo-router";
import { View } from "react-native";

export default function Root() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 25,
      }}
    >
      <Link href="/home/messages">Navigate to nested route /home/messages</Link>
      <Link href="/home/feed">Navigate to nested route /home/feed</Link>
    </View>
  );
}
