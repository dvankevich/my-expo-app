import { Button, View } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  const handleDismissAll = () => {
    router.dismissTo("/");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Button title="Go to first screen" onPress={handleDismissAll} />
      <Button
        title="Go to Details"
        onPress={() => {
          router.dismissTo("/details");
        }}
      />
    </View>
  );
}
