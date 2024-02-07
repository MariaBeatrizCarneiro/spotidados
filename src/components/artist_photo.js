import React, { useState, useEffect } from 'react';

function ArtistPhoto({ artistName }) {
  const [artistPhoto, setArtistPhoto] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArtistPhoto = async () => {
      setLoading(true);
      try {
        // Fetching artist information from Deezer API
        const response = await fetch(
          `https://api.deezer.com/search/artist?q=${encodeURIComponent(artistName)}`
        );
        const data = await response.json();

        // Checking if there are artists in the response
        if (data.data && data.data.length > 0) {
          // Extracting the image URL from the first artist item
          const imageUrl = data.data[0].picture_big || '';

          // Set the artist photo state with the retrieved image URL
          setArtistPhoto(imageUrl);
        } else {
          setArtistPhoto('');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtistPhoto();
  }, [artistName]);

  return (
    <div className="ArtistPhoto">
      {loading && <p>Loading...</p>}
      {artistPhoto && (
        <div>
          <img src={artistPhoto} alt={artistName} />
        </div>
      )}
    </div>
  );
}

export default ArtistPhoto;
