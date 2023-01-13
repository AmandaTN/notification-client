import React, { useState, useEffect } from "react";

const Welcome = ({username}) => {
	const [date, setDate] = useState(new Date());

	const refreshClock = () => setDate(new Date());

	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return () => clearInterval(timerId);
	}, []);

	return (
		<div className='clock__container'>
			<h1 className='welcome'>Welcome {username}!</h1>
			<h2 className='clock'>{date.toLocaleString()}</h2>
		</div>
	);
};

export default Welcome;