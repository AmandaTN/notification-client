import React, { useState, useEffect } from "react";

const Welcome = ({username}) => {
	const [date, setDate] = useState(new Date());

	const refreshClock = () => setDate(new Date());

	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return () => clearInterval(timerId);
	}, []);

	return (
		<div className='header__container'>
			<h1 className='welcome'>Welcome {username}!</h1>
		</div>
	);
};

export default Welcome;