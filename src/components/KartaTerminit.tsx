import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  emri: string;
  ora: string;
  sherbimi: string;
  statusi: "në pritje" | "konfirmuar";
};

export default function KartaTerminit({ emri, ora, sherbimi, statusi }: Props) {
  const [statusiTani, setStatusiTani] = useState(statusi);

  function ndrysho() {
    setStatusiTani(statusiTani === "në pritje" ? "konfirmuar" : "në pritje");
  }

  return (
    <Pressable onPress={ndrysho} style={styles.karta}>
      <Text style={styles.emri}>{emri}</Text>
      <Text>
        {ora} · {sherbimi}
      </Text>
      <Text>{statusiTani}</Text>
    </Pressable>
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
