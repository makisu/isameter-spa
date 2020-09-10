import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import logo from './logo.svg';
import './App.css';

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
	let numPayments = 185000 / monthlyPayment(monthlySalary);
	numPayments = numPayments.toFixed(1);
	let highEarner = false;
	if (numPayments > 24) {
		numPayments = 24;
	} else {
		highEarner = true;
	}
	if (monthlySalary < 30000) {
		return null;
	} else if (highEarner == false) {
		return (
			<p>
			Total {numPayments} monthly payments
			</p>
		)
	} else {
		return (
			<div>
			<p>
			Total {numPayments} monthly payments
			</p>
			<p>
			Since your potential earning is high, you might be able to pay off your agreement sooner than 24 months.
			</p>
			</div>
		)
	}
}
function App() {
  const [monthlySalary, setMonthlySalary] = useState(42000);
  return (
    <div className="App">
	  <br/>
	  <br/>
	  <img src="https://avionschool.com/images/logo.png"/>
	  <p>
	  Income Share Agreement
	  </p>
	  <p>
	  This calculator will show how ISA monthly payments work based on different possible
	  annual incomes you may have. For more information on the Avion School ISA, please see
	  our FAQs.
	  </p>
	  <p>
	  Income Share Percentage: 17.00%
	  </p>
	  <p>
	  Required Payments: 24 Monthly Payments
	  </p>
	  <p>
	  Payment Cap: P185,000
	  </p>
	  <p>
	  Minimum Income: P30,000
	  </p>
	  <p>
	  Potential Monthly Salary P{formatNumber(monthlySalary)}
	  </p>
	  <p>
	  Potential Yearly Salary P{formatNumber(monthlySalary * 12)}
	  </p>
	  <p>
	  Estimated Payment P{formatNumber(monthlyPayment(monthlySalary))}
	  </p>

	  <Slider defaultValue={42000} min={0} max={130000} step={500} onChange={(value) => setMonthlySalary(value)} />
	  <p>
	  Monthly Income: P{formatNumber(monthlySalary)} / month
	  </p>
	  <p>
	  Monthly Payment: P{formatNumber(monthlyPayment(monthlySalary))} / month
	  </p>
	  <p>
	  Total ISA Value: P{formatNumber(totalIsaValue(monthlySalary))}
	  </p>
	  <p>
	  Total ISA Value is an underestimation
	  </p>
	  { totalMonthlyPayments(monthlySalary) }
	  <h1>
	  Avion School ISA Notes
	  </h1>
	  <p>
	  Payments are due when you have a qualified job making at least P30,000 monthly in gross earned income.
	  </p>
	  <p>
	  Payments are in the amount of 17% of gross earned income, monthly.
	  </p>
	  <p>
	  You will have an obligation to report your earned income.
	  </p>
	  <p>
	  Total payments could be up to P185,000, and that is the ISA amount.
	  </p>
	  <p>
	  This is an explainer only, You'll see the contract at the next page.
	  </p>
    </div>
  );
}

export default App;
