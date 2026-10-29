import { StyleSheet, Text, View } from "react-native";

type Props = {
  emri: string;
  ora: string;
  sherbimi: string;
  statusi: "në pritje" | "konfirmuar";
};

export default function KartaTerminit({ emri, ora, sherbimi, statusi }: Props) {
  return (
    <View style={styles.karta}>
      <Text style={styles.emri}>{emri}</Text>
      <Text>
        {ora} · {sherbimi}
      </Text>
      <Text>{statusi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  karta: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
  },
  emri: { fontSize: 18, fontWeight: "bold" },
});
