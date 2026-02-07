import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
} from "@ionic/react";
import { useState } from "react";

const Sumadora: React.FC = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState("");

  const sumar = () => {
    setError("");
    setResultado(null);

    if (!a.trim() || !b.trim()) {
      setError("Completa ambos campos.");
      return;
    }

    const na = Number(a);
    const nb = Number(b);

    if (Number.isNaN(na) || Number.isNaN(nb)) {
      setError("Solo se permiten números.");
      return;
    }

    setResultado(na + nb);
  };

  const limpiar = () => {
    setA("");
    setB("");
    setResultado(null);
    setError("");
  };

  return (
    <IonPage>
      <IonContent className="app-bg">
        {}
        <div className="page-title">Sumadora</div>

        <div className="card-glass">
          <IonText>
            <p className="badge">MÓDULO • OPERACIONES</p>
            <h2 className="h-title">Suma de dos números</h2>
            <p className="p-muted">Ingresa dos valores y calcula el resultado al instante.</p>
          </IonText>

          <IonItem className="ion-item-rounded" lines="none">
            <IonLabel position="stacked">Número 1</IonLabel>
            <IonInput
              inputmode="numeric"
              value={a}
              onIonInput={(e) => setA(e.detail.value ?? "")}
              placeholder="Ej: 25"
            />
          </IonItem>

          <IonItem className="ion-item-rounded" lines="none">
            <IonLabel position="stacked">Número 2</IonLabel>
            <IonInput
              inputmode="numeric"
              value={b}
              onIonInput={(e) => setB(e.detail.value ?? "")}
              placeholder="Ej: 15"
            />
          </IonItem>

          <IonButton expand="block" className="btn-pro" onClick={sumar}>
            Calcular suma
          </IonButton>

          <IonButton expand="block" fill="outline" className="btn-outline-pro" onClick={limpiar}>
            Limpiar
          </IonButton>

          {error && (
            <IonText color="danger">
              <p style={{ marginTop: 10, fontWeight: 800 }}>{error}</p>
            </IonText>
          )}

          {resultado !== null && (
            <div className="result-box">
              <IonText>
                <p style={{ margin: 0 }}>
                  <strong>Número 1:</strong> {a}
                </p>
                <p style={{ margin: "6px 0 0 0" }}>
                  <strong>Número 2:</strong> {b}
                </p>
                <p style={{ margin: "10px 0 0 0", fontSize: 18 }}>
                  <strong>Resultado:</strong> {resultado}
                </p>
              </IonText>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sumadora;