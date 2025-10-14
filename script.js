import { response } from "./data.js";

const container = document.getElementById("container");

const name = document.createElement("h1");
name.textContent = response.name;

const description = document.createElement("p")
description.textContent = response.description;

const temperatureInC = response.temperature;

const temperature = document.createElement("h3");
temperature.textContent = `${temperatureInC} °C`;

container.appendChild(name);
container.appendChild(description);
container.appendChild(temperature);