import React, { useState } from 'react';
import { UnorderedList, ListItem, Link } from 'carbon-components-react';
import './Footer.scss';

const Footer = () => (
	<footer className={"Footer-module--footer"}>
	<div className={"bx--grid Footer-module--grid"}>
		<div className={"bx--row"}>
		<div className={"bx--col-sm-4 bx--col-md-4 bx--col-lg-4"}>
	<div className={"footer-text"}>
	<small>
	Have questions? Email me at xavi+isameter@makisu.co.
	</small>
	<br/>
	<br/>
	<small>
	Makisu Software Consulting Services
	</small>
	<br/>
	<small>
	7F Finman Building
	<br/>
	131 Tordesillas St, Salcedo Village
	<br/>
	Makati City, Metro Manila 1227
	</small>
	</div>
			</div>
		</div>
		<div className={"bx--row"}>
			<div className={"bx--col-md-6 bx--col-lg-6"}>
				<p className={"footer-text"}>Copyright (c) 2020 Makisu Software Consulting Services</p>
			</div>
		</div>
	</div>
	</footer>
);

export default Footer;
