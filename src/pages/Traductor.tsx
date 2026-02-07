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

function numeroALetras(n: number): string {
  if (n === 1000) return "mil";
  if (n === 0) return "cero";

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

  const especiales10_19 = [
    "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve",
  ];

  const especiales20_29 = [
    "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro",
    "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve",
  ];

  const decenas = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];

  const centenas = [
    "", "ciento", "doscientos", "trescientos", "cuatrocientos",
    "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos",
  ];

  const convertirMenor100 = (x: number): string => {
    if (x < 10) return unidades[x];
    if (x >= 10 && x <= 19) return especiales10_19[x - 10];
    if (x >= 20 && x <= 29) return especiales20_29[x - 20];

    const d = Math.floor(x / 10);
    const u = x % 10;
    if (u === 0) return decenas[d];
    return `${decenas[d]} y ${unidades[u]}`;
  };

  const c = Math.floor(n / 100);
  const resto = n % 100;

  if (c === 0) return convertirMenor100(resto);
  if (n === 100) return "cien";

  const parteCentenas = centenas[c];
  if (resto === 0) return parteCentenas;

  return `${parteCentenas} ${convertirMenor100(resto)}`;
}

const Traductor: React.FC = () => {
  const [num, setNum] = useState("");
  const [salida, setSalida] = useState<{ numero: number; letras: string } | null>(null);
  const [error, setError] = useState("");

  const convertir = () => {
    setError("");
    setSalida(null);

    if (!num.trim()) return setError("Ingresa un número del 1 al 1000.");

    const n = Number(num);

    if (!Number.isInteger(n)) return setError("Debe ser un número entero (sin decimales).");
    if (n < 1 || n > 1000) return setError("Debe estar entre 1 y 1000.");

    const letras = numeroALetras(n);
    setSalida({ numero: n, letras });
  };

  return (
    <IonPage>
      <IonContent className="app-bg">
        {}
        <div className="page-title">Traductor (1 a 1000)</div>

        <div className="card-glass">
          <IonText>
            <p className="badge">SIN API • 100% LÓGICA LOCAL</p>
            <h2 className="h-title">Número a Letras</h2>
            <p className="p-muted">
              Escribe un número del <strong>1 al 1000</strong> y lo convierto a letras en español.
            </p>
          </IonText>

          <IonItem className="ion-item-rounded" lines="none">
            <IonLabel position="stacked">Número (1–1000)</IonLabel>
            <IonInput
              inputmode="numeric"
              value={num}
              onIonInput={(e) => setNum(e.detail.value ?? "")}
              placeholder="Ej: 569"
            />
          </IonItem>

          <IonButton expand="block" className="btn-pro" onClick={convertir}>
            Convertir
          </IonButton>

          {error && (
            <IonText color="danger">
              <p style={{ marginTop: 10, fontWeight: 800 }}>{error}</p>
            </IonText>
          )}

          {salida && (
            <div className="result-box">
              <IonText>
                <p style={{ margin: 0 }}>
                  <strong>Número:</strong> {salida.numero}
                </p>
                <p style={{ margin: "8px 0 0 0" }}>
                  <strong>En letras:</strong> {salida.letras}
                </p>
              </IonText>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Traductor;