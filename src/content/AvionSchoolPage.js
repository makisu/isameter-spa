import React, { useState } from 'react';

// Slider components & styles
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { UnorderedList, ListItem, Tile } from 'carbon-components-react';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function monthlyPayment(monthlySalary) {
	if (monthlySalary < 30000) {
		return 0;
	} else {
		return Math.floor(monthlySalary * 0.17);
	}
}

function totalIsaValue(monthlySalary) {
	let isaValue = monthlySalary * 0.17 * 24;
	if (isaValue <= 185000) {
		return Math.floor(isaValue);
	} else {
		return 185000;
	}
}
function totalMonthlyPayments(monthlySalary) {
	if (monthlySalary < 30000) {
		return null;
	} else {
		return (
			<div>
		  Total <strong>{ numMonthlyPayments(monthlySalary) }</strong> monthly payments
			</div>
		)
	}
}
function totalMonthlyPaymentsNote(monthlySalary) {
	let numPayments = numMonthlyPayments(monthlySalary);
	let highEarner = false;
	if (numPayments < 24) {
		highEarner = true;
	}
	if (monthlySalary < 30000) {
		return (
			<p className={"small-font-size"}>
			Since you potentially make less than P30,000 net/month, your monthly payments are automatically suspended.
			</p>
		)
	} else if (highEarner == false) {
		return null;
	} else {
		return (
			<p className={"small-font-size"}>
			Since your potential earning is high, you might be able to pay off your agreement sooner than 24 months.
			</p>
		)
	}
}

function numMonthlyPayments(monthlySalary) {
	let numPayments = 185000 / monthlyPayment(monthlySalary);
	numPayments = numPayments.toFixed(1);
	if (numPayments > 24) {
		numPayments = 24;
	}
	return numPayments;
}

function AvionSchoolPage() {
	  const [monthlySalary, setMonthlySalary] = useState(42000);
	const marks = {
		  0: 'P0',
		  30000: 'P30K',
		  45000: 'P45K',
		  130000: 'P130K'
	};
	return (
	  <div>
		  <h3 className={"isa-title"}>
		  Income Share Agreement
		  </h3>
		<UnorderedList className={"padding-title"}>
		<ListItem>
		This calculator will show how ISA monthly payments work based on different possible
			  annual incomes you may have.
		</ListItem>
		<ListItem>
			   For more information on the Avion School ISA, please see
			  our FAQs.
		</ListItem>
		</UnorderedList>
		<section className={"center"}>
		  <div className={"padding-stats"}>
		    <div className={"bx--grid bx--grid--condensed"}>
		      <div className={"bx--row"}>
		        <div className={"bx--col-lg-3"}>
			  <Tile className={"center"}>
			  Income Share Percentage <h4><strong>17.00%</strong></h4>
			  </Tile>
			</div>
		      <div className={"bx--col-lg-3"}>
	  <Tile className={"center"}>
	  Required Payments <h4><strong>24 Monthly Payments</strong></h4>
	  </Tile>
		</div>
		    <div className={"bx--col-lg-3"}>
	  <Tile className={"center"}>
	  Payment Cap <h4><strong>P185,000</strong></h4>
	  </Tile>
		</div>
		    <div className={"bx--col-lg-3"}>
	  <Tile className={"center"}>
	  Minimum Income <h4><strong>P30,000</strong></h4>
	  </Tile>
		</div>
		  </div>
		</div>
		</div>
		<div className={"padding-stats"}>
		<div className={"bx--grid bx--grid--condensed"}>
		  <div className={"bx--row"}>
		    <div className={"bx--col"}>
	  <p>
	  Potential Monthly Salary <h3>P{formatNumber(monthlySalary)}</h3>
	  </p>
		</div>
		    <div className={"bx--col"}>
	  <p>
	  Potential Yearly Salary <h3>P{formatNumber(monthlySalary * 12)}</h3>
	  </p>
		</div>
		    <div className={"bx--col"}>
	  <p>
	  Estimated Payment <h3>P{formatNumber(monthlyPayment(monthlySalary))}</h3>
	  </p>
		</div>
		</div>
		</div>
		</div>

		<div className={"width-70"}>
	  <Slider marks={marks} defaultValue={42000} min={0} max={130000} step={500} onChange={(value) => setMonthlySalary(value)} />
		</div>

		<div className={"slider-stats"}>
		  <p>
			  Monthly Income: <strong>P{formatNumber(monthlySalary)}</strong> / month
		  </p>
		  <p>
			  Monthly Payment: <strong>P{formatNumber(monthlyPayment(monthlySalary))}</strong> / month
		  </p>
		  <p>
			  Estimated Total ISA Value: <strong>P{formatNumber(totalIsaValue(monthlySalary))}</strong>
		  </p>
	          <p className={"small-font-size"}>
		    { totalMonthlyPayments(monthlySalary) }
		  </p>
		</div>
			<div className={"center"}>
			  { totalMonthlyPaymentsNote(monthlySalary) }
			</div>

		</section>
		<section>
	  <h3 className={"isa-notes-title"}>
	  Avion School ISA Notes
	  </h3>
		<UnorderedList>
		<ListItem>
	  Payments are due when you have a qualified job making at least P30,000 monthly in gross earned income.
		</ListItem>
	  <ListItem>
	  Payments are in the amount of 17% of gross earned income, monthly.
	  </ListItem>
	  <ListItem>
	  You will have an obligation to report your earned income.
	  </ListItem>
	  <ListItem>
	  Total payments could be up to P185,000, and that is the ISA amount.
	  </ListItem>
	  <ListItem>
	  This is an explainer only, You'll see the contract at the next page.
	  </ListItem>
		</UnorderedList>
		</section>
		</div>
	)
}

export default AvionSchoolPage;
