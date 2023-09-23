import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Moment from "react-moment";
import "./style.css";

function App() {
	const [value, onChange] = useState(new Date());
	const [cycle, cycleValue] = useState("28");

	const date = value;
	console.log(cycle);
	const cycleLength = parseInt(cycle);

	return (
		<>
			<div className="text-center">
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid text-center d-inline-block">
						{/* <img
			src={logo}
			alt=""
			width="250"
			height="50"
			className="d-inline-block"
			/> */}

						<h4>Period  Calculator</h4>
						<h6>By Vish Foundation</h6>
					</div>
				</nav>

				<label for="cycle">Select your Cycle Length : </label>
				<select
					onChange={(e) => cycleValue(e.target.value)}
					defaultValue={cycle}
					className="m-2"
				>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
					<option value="32">32</option>
					<option value="33">33</option>
					<option value="34">34</option>
					<option value="35">35</option>
					<option value="36">36</option>
					<option value="37">37</option>
					<option value="38">38</option>
					<option value="39">39</option>
					<option value="40">40</option>
					<option value="41">41</option>
					<option value="42">42</option>
					<option value="43">43</option>
					<option value="44">44</option>
					<option value="45">45</option>
				</select>
			</div>

			<p className="text-center">
				Select Your Last Period Start Date from the Calendar
			</p>

			<div className="d-flex justify-content-center ">
				<Calendar onChange={onChange} value={value}
					className="calendar mt-0" />
			</div>

			<div className="text-center mt-4 p-2">
				<div className="row">
					<div class="d-flex justify-content-center">
						<div className="col-md-3 m-3 box ">
							<p>Next Period</p>

							<Moment format="Do MMMM YYYY"
								add={{ days: cycleLength - 1 }}>
								{date}
							</Moment>
						</div>
						<div className="col-md-3 m-3 box ">
							<p> Approximate Ovulation Day</p>

							<Moment
								format="Do MMMM YYYY"
								add={{ days: cycleLength - 1 - 14 }}
							>
								{date}
							</Moment>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
