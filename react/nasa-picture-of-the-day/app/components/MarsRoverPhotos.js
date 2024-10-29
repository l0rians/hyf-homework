"use client";
import React, { useState, useEffect } from "react";

function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchPhotos = async () => {
      try {
        const apiKey = "zCuPJWwprjQO4xGrgf31m7oM82FFgR8RdgKbrxkl";
        const res = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`,
          { signal }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setPhotos(data.photos);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Mars Rover Photos</h1>
      <div>
        {photos.slice(0, 10).map((photo) => (
          <div key={photo.id}>
            <img src={photo.img_src} alt={`Mars Rover - ${photo.rover.name}`} />
            <p>
              <strong>Rover:</strong> {photo.rover.name}
            </p>
            <p>
              <strong>Camera:</strong> {photo.camera.full_name}
            </p>
            <p>
              <strong>Date:</strong> {photo.earth_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarsRoverPhotos;
