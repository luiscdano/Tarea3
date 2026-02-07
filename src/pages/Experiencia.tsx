import {
  IonButton,
  IonContent,
  IonPage,
  IonText,
} from "@ionic/react";

const YT_URL = "https://youtu.be/8wXVVAwBbH8?si=uLHxtcop6KhFYmAc"; // link 
const YT_EMBED = "https://www.youtube.com/embed/8wXVVAwBbH8"; 

const Experiencia: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="app-bg">
        {}
        <div className="page-title">Experiencia</div>

        <div className="card-glass">
          <IonText>
            <p className="badge">MÓDULO • VIDEO</p>
            <h2 className="h-title">Mi experiencia realizando la tarea</h2>
            <p className="p-muted">
              En este video explico cómo desarrollé la app. El video dura{" "}
              <strong>máximo 5 minutos</strong> y aparece mi rostro en una esquina
              mientras explico.
            </p>
          </IonText>

          {/* Embed */}
          <div
            style={{
              width: "100%",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#000",
              marginTop: 10,
            }}
          >
            <iframe
              width="100%"
              height="315"
              src={YT_EMBED}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <IonButton
            expand="block"
            className="btn-pro"
            href={YT_URL}
            target="_blank"
            rel="noreferrer"
          >
            Abrir video en YouTube
          </IonButton>

          <div className="result-box">
            <IonText>
              <p style={{ margin: 0 }}>
                <strong>Recomendación:</strong> Sube el video como <em>No listado</em>{" "}
                para que el profesor lo pueda ver sin hacerlo público.
              </p>
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Experiencia;