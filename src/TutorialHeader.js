import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Header,
	HeaderName,
	HeaderNavigation,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent
} from 'carbon-components-react';
import {
	AppSwitcher20,
	Notification20,
	UserAvatar20
} from '@carbon/icons-react';

const TutorialHeader = () => (
	<Header aria-label="ISA Meter">
	    <SkipToContent />
	    <HeaderName element={Link} to="/" prefix="">
	      ISA Meter
	    </HeaderName>
	//<HeaderNavigation aria-label="Avion School">
	//<HeaderMenuItem element={Link} to="/avion-school">Avion School</HeaderMenuItem>
	//</HeaderNavigation>
  </Header>
);

export default TutorialHeader;
