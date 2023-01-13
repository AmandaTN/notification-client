import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import clients from "../data/clients";

const NotificationSchedule = ({ socket }) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [inter, setInter] = useState(1);
 

	useEffect( () => {
		const interval = setInterval(() => {
			console.log()
			if (inter !== clients.length+1) {
				setDate(date.toLocaleString());
				setTitle(clients[inter].category.name);
				setSubject(clients[inter].name);
				setBody("Lorem ipsum");
				setInter(inter => inter + 1)
				console.log(title, date, subject, body);
				sendNotification();
			  } else{
				setInter(1)
			  }
		}, 10000)
		return () => clearInterval(interval);
	},[])

  const sendNotification = () => {
    socket.emit("newSchedule", { date, title, subject, body });
    toast.success(`${title} has been added successfully!`);
    setDate(date.getDate().toLocaleString());
    setTitle("");
    setSubject("");
    setBody("");
  };

  return <div className="notificationchedule__container"></div>;
};

export default NotificationSchedule;
