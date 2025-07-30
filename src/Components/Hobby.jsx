import React from 'react';
import '../Styles/Hobby.css';

function Hobby() {
  const songs = [
    {
      title: 'Baarish (Yaariyan)',
      file: 'Baarish (Yaariyan).mp3',
      image: '/Images/Baarish%20cover%20image.jpg',
    },
    {
      title: 'Kyun (Baarfi)',
      file: 'Kyun (Baarfi).mp3',
      image: '/Images/Kyun%20cover%20image.jpg',
    },
    {
      title: 'Gaaliyan (Ek Villain)',
      file: 'Gaaliyan (Ek Villan).mp3',
      image: '/Images/Gaaliyan%20cover%20image.jpg',
    },
    {
      title: 'Tere Hawale',
      file: 'TereHawaale.mp3',
      image: '/Images/Tere%20Hawale%20cover%20image.jpg',
    },
    {
      title: 'Aa Zara (Murder 2)',
      file: 'Aa Zara (Murder 2).mp3',
      image: '/Images/Aa%20Zara%20cover%20image.jpg',
    },
    {
      title: 'Shiddat (Shiddat)',
      file: 'Shiddat (Shiddat).mp3',
      image: '/Images/Shiddat%20cover%20image.jpg',
    },
    {
      title: 'Chahu Mai Ya Na (Aashiqui 2)',
      file: 'Chahu Mai Ya Na (Ashiqui 2).mp3',
      image: '/Images/Chahu%20mai%20ya%20na%20cover%20image.jpg',
    },
  ];

  return (
    <>
      <h1 className="hobby-heading">🎤 MY MUSIC COVERS 🎵</h1>

      <div className="cards-container">
        {songs.map((song, index) => (
          <div className="card fade-in" key={index}>
            <div className="card-header">
              <h5>{song.title}</h5>
            </div>
            <div
              className="card-body"
              style={{ backgroundImage: `url(${song.image})` }}
            ></div>
            <div className="card-footer">
              <audio controls>
                <source src={`/Audios/${song.file}`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hobby;
