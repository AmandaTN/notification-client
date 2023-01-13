import clientCategory from "./clientsCategories.js";
import UID from "../util/UID";


const clients = [
  {
    id: UID("Joseph Travis"),
    name: "Joseph Travis",
    category: { id: clientCategory[0].id, name: clientCategory[0].name },
  },
  {
    id: UID("Jenna Scott"),
    name: "Jenna Scott",
    category: { id: clientCategory[1].id, name: clientCategory[1].name },
  },
  {
    id: UID("Claire Martin"),
    name: "Claire Martin",
    category: { id: clientCategory[2].id, name: clientCategory[2].name },
  },
];

export default clients;
