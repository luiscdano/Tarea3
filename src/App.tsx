import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import {
  homeOutline,
  addCircleOutline,
  textOutline,
  gridOutline,
  videocamOutline,
} from "ionicons/icons";

import Home from "./pages/Home";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import Tabla from "./pages/Tabla";
import Experiencia from "./pages/Experiencia";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/flex-utils.css";

import "./theme/variables.css";
import "./theme/app.css";

setupIonicReact();

const appPages = [
  { title: "Página Inicial", url: "/home", icon: homeOutline },
  { title: "Sumadora", url: "/sumadora", icon: addCircleOutline },
  { title: "Traductor", url: "/traductor", icon: textOutline },
  { title: "Tabla", url: "/tabla", icon: gridOutline },
  { title: "Experiencia", url: "/experiencia", icon: videocamOutline },
];

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter basename={import.meta.env.BASE_URL}>

        <IonSplitPane contentId="main">

          <IonMenu
            contentId="main"
            type="overlay"
            className="menu-modern"
            style={{ width: "230px" }}
          >
            <IonContent className="menu-content">

              <div className="menu-header">
                <div className="menu-brand">
                  <div className="menu-logo">T3</div>
                  <div>
                    <p className="menu-title">Tarea 3</p>
                    <p className="menu-subtitle">Ionic + React • ITLA</p>
                  </div>
                </div>
              </div>

              <div className="menu-divider"/>

              <IonList style={{ background:"transparent" }}>
                {appPages.map((page) => (
                  <IonMenuToggle key={page.url} autoHide={false}>
                    <IonItem
                      className="menu-item"
                      routerLink={page.url}
                      routerDirection="none"
                      lines="none"
                    >
                      <IonIcon slot="start" icon={page.icon}/>
                      <IonLabel>{page.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                ))}
              </IonList>

            </IonContent>
          </IonMenu>

          <IonPage id="main">
            <IonRouterOutlet id="main">
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>

              <Route exact path="/home" component={Home} />
              <Route exact path="/sumadora" component={Sumadora} />
              <Route exact path="/traductor" component={Traductor} />
              <Route exact path="/tabla" component={Tabla} />
              <Route exact path="/experiencia" component={Experiencia} />
            </IonRouterOutlet>
          </IonPage>

        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
