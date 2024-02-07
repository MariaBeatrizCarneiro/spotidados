import React, { useState, useEffect } from 'react';

function ArtistPhoto({ artistName }) {
  const [artistPhoto, setArtistPhoto] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArtistPhoto = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=prefixsearch&gpssearch=${encodeURIComponent(
            artistName
          )}&formatversion=2&pithumbsize=300&redirects=1&gcmtitle=Category:Musicians|Category:Bands`
        );
        const data = await response.json();
        const pages = data.query.pages;
        if (pages.length === 0 || pages[0].missing) {
          setArtistPhoto('');
        } else {
          setArtistPhoto(pages[0].thumbnail?.source || ''); // Use optional chaining to handle missing thumbnails
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
      <h1>Artist Photo Fetcher</h1>
      {loading && <p>Loading...</p>}
      {artistPhoto && (
        <div>
          <h2>{artistName}</h2>
          <img src={artistPhoto} alt={artistName} />
        </div>
      )}
    </div>
  );
}

export default ArtistPhoto;
