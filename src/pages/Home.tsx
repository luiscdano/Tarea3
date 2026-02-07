import {
  IonContent,
  IonPage,
  IonText,
  IonIcon,
} from "@ionic/react";
import {
  codeOutline,
  shieldCheckmarkOutline,
  sparklesOutline,
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="app-bg">
        {}
        <div className="page-title">Página Inicial</div>

        <div className="card-glass">
          {/* Header tipo perfil */}
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 16,
                overflow: "hidden",
                border: "2px solid rgba(0,0,0,0.08)",
                background: "#fff",
                flexShrink: 0,
              }}
            >
              <img
                src="/assets/foto01.jpg"
                alt="Foto 2x2"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div>
              <IonText>
                <p className="badge">TAREA 3 • IONIC REACT</p>
                <h2 className="h-title" style={{ marginTop: 8 }}>
                  Luis Emilio Cedano - Matr. 2024-0128
                </h2>
                <p className="p-muted" style={{ marginBottom: 0 }}>
                  <strong>Correo:</strong> 20240128@itla.edu.do
                </p>
              </IonText>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <IonText>
              <h3 style={{ margin: "10px 0 6px 0", fontWeight: 900 }}>
                Sobre esta aplicación
              </h3>
              <p className="p-muted">
                Esta app fue desarrollada con <strong>Ionic + React</strong> y contiene un menú con 5 módulos:
                Página Inicial, Sumadora, Traductor (1–1000), Tabla de Multiplicar (hasta 13) y Experiencia Personal.
              </p>
            </IonText>

            <div className="result-box" style={{ background: "rgba(255,255,255,0.65)" }}>
              <IonText>
                <h3 style={{ margin: 0, fontWeight: 900 }}>Funcionalidades</h3>

                <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <IonIcon icon={codeOutline} />
                    <span>
                    <strong>Sumadora:</strong> suma dos números y muestra el resultado.
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <IonIcon icon={sparklesOutline} />
                    <span>
                    <strong>Traductor 1–1000:</strong> convierte números a letras en español{" "}
                      <strong>sin usar APIs</strong>.
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <IonIcon icon={shieldCheckmarkOutline} />
                    <span>
                    <strong>Tabla:</strong> genera la tabla de multiplicar hasta el 13.
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span>
                      <strong>Experiencia:</strong> video YouTube explicando el proceso (≤ 5 min).
                    </span>
                  </div>
                </div>
              </IonText>
            </div>

            <IonText>
              <p className="p-muted" style={{ marginTop: 12 }}>
                <strong>Nota:</strong> El módulo Traductor fue implementado con lógica local en TypeScript cumpliendo el requisito
                de “no APIs”.
              </p>
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;