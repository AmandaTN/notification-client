
import React from "react";

const Schedules = ({ schedules }) => {
	return (
		<div>
			<h2>Upcoming Events</h2>
			<ul>
				{schedules?.map((schedule) => (
					<li key={schedule.subject}>
						{schedule.title} - {schedule.date}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Schedules;