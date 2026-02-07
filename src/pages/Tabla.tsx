import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import { useState } from "react";

const Tabla: React.FC = () => {
  const [num, setNum] = useState("");
  const [tabla, setTabla] = useState<string[]>([]);
  const [error, setError] = useState("");

  const generar = () => {
    setError("");
    setTabla([]);

    if (!num.trim()) {
      setError("Ingresa un número.");
      return;
    }

    const n = Number(num);
    if (!Number.isFinite(n)) {
      setError("Solo se permiten números.");
      return;
    }

    const rows: string[] = [];
    for (let i = 1; i <= 13; i++) {
      rows.push(`${n} × ${i} = ${n * i}`);
    }
    setTabla(rows);
  };

  const limpiar = () => {
    setNum("");
    setTabla([]);
    setError("");
  };

  return (
    <IonPage>
      <IonContent className="app-bg">
        {}
        <div className="page-title">Tabla (hasta 13)</div>

        <div className="card-glass">
          <IonText>
            <p className="badge">MÓDULO • MULTIPLICACIÓN</p>
            <h2 className="h-title">Tabla de multiplicar</h2>
            <p className="p-muted">
              Escribe un número y genera su tabla del <strong>1 al 13</strong>.
            </p>
          </IonText>

          <IonItem className="ion-item-rounded" lines="none">
            <IonLabel position="stacked">Número</IonLabel>
            <IonInput
              inputmode="numeric"
              value={num}
              onIonInput={(e) => setNum(e.detail.value ?? "")}
              placeholder="Ej: 7"
            />
          </IonItem>

          <IonButton expand="block" className="btn-pro" onClick={generar}>
            Generar tabla
          </IonButton>

          <IonButton expand="block" fill="outline" className="btn-outline-pro" onClick={limpiar}>
            Limpiar
          </IonButton>

          {error && (
            <IonText color="danger">
              <p style={{ marginTop: 10, fontWeight: 800 }}>{error}</p>
            </IonText>
          )}

          {tabla.length > 0 && (
            <div className="result-box">
              <IonText>
                <p style={{ margin: 0 }}>
                  <strong>Tabla del:</strong> {num}
                </p>
              </IonText>

              <IonList style={{ marginTop: 10, background: "transparent" }}>
                {tabla.map((row, idx) => (
                  <IonItem key={idx} className="table-row" lines="none">
                    <IonLabel>{row}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tabla;