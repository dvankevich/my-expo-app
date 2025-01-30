import { Button, View } from "react-native";

import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    if (router.canDismiss()) {
      router.dismiss(count);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Maybe dismiss" onPress={() => handleDismiss(5)} />
    </View>
  );
}
