import './App.css';
import { Outlet } from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import { IonHeader, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';

import './theme/variables.css'
setupIonicReact();

function App() {
  return (
    <>
    <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Pranav's App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Outlet/>
    </>
    
    
  );
}

export default App;
