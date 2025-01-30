import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Приведення params.name до типу string
  // const title = Array.isArray(params.name) ? params.name[0] : params.name;
  // or
  // Використання оператора нульового злиття для безпечного отримання рядка
  // const title =
  //   typeof params.name === "string"
  //     ? params.name
  //     : Array.isArray(params.name)
  //     ? params.name[0]
  //     : "Default Title";
  // Використання Optional Chaining та нульового злиття
  const title =
    typeof params.name === "string"
      ? params.name
      : params.name?.[0] ?? "Default Title";
  // Пояснення:
  //   Optional Chaining: params.name?.[0] намагається отримати перший елемент масиву, якщо params.name є масивом. Якщо params.name є undefined або null, результат буде undefined.
  //   Оператор нульового злиття: ?? 'Default Title' задає значення за замовчуванням, якщо результат з Optional Chaining є undefined.

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: title, // Використання приведеного значення
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: "Updated" });
        }}
      >
        Update the title
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
