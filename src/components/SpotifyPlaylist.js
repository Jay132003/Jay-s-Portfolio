import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, X, List, Volume2 } from 'lucide-react';
import './SpotifyPlaylist.css';

const SpotifyPlaylist = ({ isLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Your actual Spotify playlist "Human"
  const playlist = {
    name: "Human",
    cover: "/Akatsuki.jpg", // Using Akatsuki as playlist cover
    spotifyUrl: "https://open.spotify.com/playlist/3fypkHaTRwz5lr7IMAF3q6?si=ae41e87b61554306",
    songs: [
      {
        id: 1,
        title: "Human",
        artist: "Rag'n'Bone Man",
        duration: "3:20",
        album: "Human (Deluxe)"
      },
      {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:20",
        album: "After Hours"
      },
      {
        id: 3,
        title: "Starboy",
        artist: "The Weeknd, Daft Punk",
        duration: "3:50",
        album: "Starboy"
      },
      {
        id: 4,
        title: "Levitating",
        artist: "Dua Lipa",
        duration: "3:24",
        album: "Future Nostalgia"
      },
      {
        id: 5,
        title: "Attention",
        artist: "Charlie Puth",
        duration: "3:29",
        album: "Voicenotes"
      },
      {
        id: 6,
        title: "Without Me",
        artist: "Eminem",
        duration: "4:50",
        album: "The Eminem Show"
      },
      {
        id: 7,
        title: "Believer",
        artist: "Imagine Dragons",
        duration: "3:24",
        album: "Evolve"
      },
      {
        id: 8,
        title: "No Lie",
        artist: "Sean Paul, Dua Lipa",
        duration: "3:41",
        album: "Mad Love The Prequel"
      },
      {
        id: 9,
        title: "Beggin'",
        artist: "Måneskin",
        duration: "3:43",
        album: "Chosen"
      },
      {
        id: 10,
        title: "New Rules",
        artist: "Dua Lipa",
        duration: "3:29",
        album: "Dua Lipa"
      },
      {
        id: 11,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        duration: "2:54",
        album: "Fine Line"
      },
      {
        id: 12,
        title: "7 Years",
        artist: "Lukas Graham",
        duration: "3:57",
        album: "Lukas Graham"
      },
      {
        id: 13,
        title: "The Nights",
        artist: "Avicii",
        duration: "2:56",
        album: "Stories"
      },
      {
        id: 14,
        title: "Hymn for the Weekend",
        artist: "Coldplay",
        duration: "4:18",
        album: "A Head Full of Dreams"
      },
      {
        id: 15,
        title: "Gangsta's Paradise",
        artist: "Coolio, L.V.",
        duration: "4:00",
        album: "Gangsta's Paradise"
      },
      {
        id: 16,
        title: "Way down We Go",
        artist: "KALEO",
        duration: "3:38",
        album: "A/B"
      },
      {
        id: 17,
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: "3:53",
        album: "÷ (Divide)"
      },
      {
        id: 18,
        title: "Take Me To Church",
        artist: "Hozier",
        duration: "4:01",
        album: "Hozier"
      },
      {
        id: 19,
        title: "See You Again (feat. Charlie Puth)",
        artist: "Wiz Khalifa, Charlie Puth",
        duration: "3:49",
        album: "Furious 7 (Original Motion Picture Soundtrack)"
      },
      {
        id: 20,
        title: "Fairytale",
        artist: "Alexander Rybak",
        duration: "3:05",
        album: "Fairytales"
      },
      {
        id: 21,
        title: "We Own It (Fast & Furious)",
        artist: "2 Chainz, Wiz Khalifa",
        duration: "3:47",
        album: "Fast & Furious 6 (Original Motion Picture Soundtrack)"
      },
      {
        id: 22,
        title: "Animals",
        artist: "Maroon 5",
        duration: "3:51",
        album: "V"
      },
      {
        id: 23,
        title: "Play Date",
        artist: "Melanie Martinez",
        duration: "2:59",
        album: "Cry Baby"
      },
      {
        id: 24,
        title: "rockstar (feat. 21 Savage)",
        artist: "Post Malone, 21 Savage",
        duration: "3:38",
        album: "beerbongs & bentleys"
      },
      {
        id: 25,
        title: "Hips Don't Lie (feat. Wyclef Jean)",
        artist: "Shakira, Wyclef Jean",
        duration: "3:38",
        album: "Oral Fixation, Vol. 2"
      },
      {
        id: 26,
        title: "Thrift Shop (feat. Wanz)",
        artist: "Macklemore & Ryan Lewis, Macklemore, Ryan Lewis, Wanz",
        duration: "3:55",
        album: "The Heist"
      },
      {
        id: 27,
        title: "INDUSTRY BABY (feat. Jack Harlow)",
        artist: "Lil Nas X, Jack Harlow",
        duration: "3:32",
        album: "MONTERO"
      },
      {
        id: 28,
        title: "Mockingbird",
        artist: "Eminem",
        duration: "4:10",
        album: "Encore"
      },
      {
        id: 29,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        duration: "3:03",
        album: "AM"
      },
      {
        id: 30,
        title: "Die With A Smile",
        artist: "Lady Gaga, Bruno Mars",
        duration: "3:48",
        album: "Die With A Smile"
      }
    ]
  };

  const togglePlaylist = () => {
    setIsOpen(!isOpen);
  };

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // Open the song on Spotify
    window.open(playlist.spotifyUrl, '_blank');
    console.log(`Playing: ${song.title} by ${song.artist}`);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const resumeSong = () => {
    setIsPlaying(true);
  };

  return (
    <div className="spotify-playlist-container">
      {/* Blur Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`blur-background ${isLightMode ? 'light-blur' : 'dark-blur'}`}
            onClick={togglePlaylist}
          />
        )}
      </AnimatePresence>

      {/* Playlist Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlaylist}
        className="playlist-toggle-btn"
      >
        <Music size={20} />
        My Playlist
        <List size={16} />
      </motion.button>

      {/* Playlist Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="playlist-modal"
          >
            {/* Modal Header */}
            <div className="playlist-header">
              <div className="playlist-cover">
                <img src={playlist.cover} alt="Playlist Cover" />
              </div>
              <div className="playlist-info">
                <h3>{playlist.name}</h3>
                <p>{playlist.songs.length} songs</p>
                <button 
                  onClick={() => window.open(playlist.spotifyUrl, '_blank')}
                  className="spotify-link-btn"
                >
                  Open in Spotify
                </button>
              </div>
              <button 
                onClick={togglePlaylist}
                className="close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Songs List */}
            <div className="songs-list">
              <h4>All Songs</h4>
              <div className="songs-container">
                {playlist.songs.map((song, index) => (
                  <motion.div
                    key={song.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
                    onClick={() => playSong(song)}
                  >
                    <div className="song-number">
                      {currentSong?.id === song.id && isPlaying ? (
                        <Volume2 size={16} className="playing-icon" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <div className="song-image">
                      <img src={playlist.cover} alt={song.title} />
                    </div>
                    <div className="song-details">
                      <h5>{song.title}</h5>
                      <p>{song.artist} • {song.album}</p>
                    </div>
                    <div className="song-duration">
                      {song.duration}
                    </div>
                    <div className="song-play-btn">
                      <Play size={14} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpotifyPlaylist;
