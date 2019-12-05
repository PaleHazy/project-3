import React from "react";
import Directory from "../../components/directory/directory.component";
import axios from "axios";

import "./homepage.styles.scss";
const mongoGetter = () => {
  return axios({
    url: "/mongoRetrieve",
    method: "post"
  }).then(response => {
    console.log(response.data);
  });
};

const HomePage = () => (
  <div className='homepage'>
    <Directory />
    <button onClick={() => mongoGetter()}>Test Mongo db connection</button>
  </div>
);

export default HomePage;
