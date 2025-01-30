import { Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <Link href="../" asChild>
      <Pressable>
        <Text>to Home from Home?</Text>
      </Pressable>
    </Link>
  );
}
