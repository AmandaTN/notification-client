import React, { useEffect, useState } from "react";
import Welcome from "./components/welcome";
import NotificationSchedule from "./components/notificationSchedule";
import Schedules from "./components/schedules";
import socketIO from "socket.io-client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import { getTokenFromFirebase, onMessageListener } from "./firebase";

const socket = socketIO.connect("http://localhost:5900");

const App = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
		getTokenFromFirebase();

		onMessageListener()
			.then((payload) => {
				console.log("From Message", payload);
			})
			.catch((err) => console.log("failed: ", err));

		socket.on("sendSchedules", (schedules) => {
			setSchedules(schedules);
		});
		socket.on("notification", (data) => {
			toast.success(` It's time for ${data.title}`);
		});
	}, []);
  return (
    <div className='app__container'>
         <Welcome username={"Sevetri"} />
          <NotificationSchedule socket={socket} />
          <Schedules schedules={schedules} />
          <ToastContainer />
      </div>
  );
}
export default App;