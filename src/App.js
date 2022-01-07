import React from 'react';
import { Route, Switch, BrowserRouter as Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import AddReminder from './components/AddReminder';
import Reminderlist from './components/Reminderlist';
import EditReminder from './components/EditReminder';
import Cache from './components/Cache';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {Unmatched} from './components/Unmatched';



const App = () => {
  
  const [reminders, setReminders] = Cache('reminders', []);

    return (
      <Routes>
        <div>
          <Navigation />

          <div className="main">
            <Switch>
            <Route
              render={(props) => (
                <Reminderlist {...props} reminders={reminders} setReminders={setReminders} />
              )}
              path="/"
              exact={true}
            />

            <Route
              render={(props) => (
                  <AddReminder {...props} reminders={reminders} setReminders={setReminders} />
                )}
              path="/add"
            />

            <Route
              render={(props) => (
                <EditReminder {...props} reminders={reminders} setReminders={setReminders} />
              )}
              path="/edit/:id"
            />

          
          <Route path="/About" component={About} />

          <Route path="/ContactUs" component={ContactUs} />
          
            
          <Route path='*'>
              <Unmatched />
            </Route>  

            </Switch>

          </div>
        </div>

      </Routes>

    );
};

  export default App;