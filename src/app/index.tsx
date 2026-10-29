import { ScrollView, Text } from "react-native";
import KartaTerminit from "../components/KartaTerminit";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 60 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Terminet e sotme
      </Text>
      <KartaTerminit
        emri="Klienti A"
        ora="10:00"
        sherbimi="Konsultë"
        statusi="konfirmuar"
      />
      <KartaTerminit
        emri="Klienti B"
        ora="11:30"
        sherbimi="Kontroll"
        statusi="në pritje"
      />
      <KartaTerminit
        emri="Klienti C"
        ora="14:00"
        sherbimi="Konsultë"
        statusi="konfirmuar"
      />
    </ScrollView>
  );
}
