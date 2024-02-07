import React, { useState, useEffect } from 'react';

const MusicAlbumArt = ({ musicName }) => {
  const [albumArtUrl, setAlbumArtUrl] = useState("Graduation");

  useEffect(() => {
    const fetchAlbumArt = async () => {
      try {
        const response = await fetch(`https://musicbrainz.org/ws/2/release/?query=${encodeURIComponent(musicName)}&fmt=json`);
        const data = await response.json();
        if (data.releases && data.releases.length > 0) {
          const releaseId = data.releases[0].id;
          const coverResponse = await fetch(`https://coverartarchive.org/release/${releaseId}`);
          const coverData = await coverResponse.json();
          if (coverData.images && coverData.images.length > 0) {
            setAlbumArtUrl(coverData.images[0].image);
          }
        }
      } catch (error) {
        console.error('Error fetching album art:', error);
      }
    };

    fetchAlbumArt();

  }, [musicName]);

  return (
    <div>
      {albumArtUrl ? (
        <img src={albumArtUrl} alt="Album Art" />
      ) : (
        <div>No album art found</div>
      )}
    </div>
  );
};

export default MusicAlbumArt;
