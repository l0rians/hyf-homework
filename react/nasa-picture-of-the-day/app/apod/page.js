import React from "react";

async function fetchAPOD() {
  const apiKey = "zCuPJWwprjQO4xGrgf31m7oM82FFgR8RdgKbrxkl";
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ApodPage() {
  const apodData = await fetchAPOD();

  return (
    <div>
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={apodData.url} alt={apodData.title}></img>
      <h2>{apodData.title}</h2>
      <p>{apodData.explanation}</p>
    </div>
  );
}
