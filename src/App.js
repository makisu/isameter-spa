import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Carbon Styles and Components
import 'carbon-components/scss/globals/scss/styles.scss'
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './TutorialHeader';
import Footer from './Footer';
import LandingPage from './content/LandingPage';
import AvionSchoolPage from './content/AvionSchoolPage';

// Styles used outside of Carbon Components
import './App.scss';

function App() {
  return (
    <div className="App">
	  <TutorialHeader />
	  <Content>
		  <Switch>
	  <Route exact path="/" component={AvionSchoolPage} />
	  <Route path="/avion-school" component={AvionSchoolPage} />
		  </Switch>
	  </Content>
	  <Footer/>
    </div>
  );
}

export default App;
