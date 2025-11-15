"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  
  const fetchWelcomeMessage = async () => {
    try {
      const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
      return response.data;
    } catch (error) {
      return "Error fetching message";
    }
  };
  
  const fetchWelcomeOnClick = async () => {
    const message = await fetchWelcomeMessage();
    setWelcomeOnClick(message);
  };
  
  const fetchWelcomeOnLoad = async () => {
    const welcome = await fetchWelcomeMessage();
    setWelcomeOnLoad(welcome);
  };
  
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);
  
  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      <hr />
      <h4>Requesting on Click</h4>
      <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
        Fetch Welcome
      </button>
      <br />
      Response from server: <b>{welcomeOnClick}</b>
      <hr />
      <h4>Requesting on Load</h4>
      Response from server: <b>{welcomeOnLoad}</b>
      <hr />
    </div>
  );
}