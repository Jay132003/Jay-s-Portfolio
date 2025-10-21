import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, X, List, Volume2 } from 'lucide-react';
import './SpotifyPlaylist.css';

const SpotifyPlaylist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample playlist data - replace with your actual Spotify playlist
  const playlist = {
    name: "Jay's Favorites",
    cover: "/Akatsuki.jpg", // Using Akatsuki as playlist cover
    songs: [
      {
        id: 1,
        title: "Naruto Main Theme",
        artist: "Toshio Masuda",
        duration: "3:45",
        album: "Naruto Original Soundtrack"
      },
      {
        id: 2,
        title: "Blue Bird",
        artist: "Ikimono-gakari",
        duration: "4:32",
        album: "Naruto Shippuden Opening"
      },
      {
        id: 3,
        title: "Silhouette",
        artist: "KANA-BOON",
        duration: "3:49",
        album: "Naruto Shippuden Opening"
      },
      {
        id: 4,
        title: "Sign",
        artist: "FLOW",
        duration: "4:05",
        album: "Naruto Shippuden Opening"
      },
      {
        id: 5,
        title: "Hero's Come Back",
        artist: "nobodyknows+",
        duration: "3:58",
        album: "Naruto Shippuden Opening"
      },
      {
        id: 6,
        title: "Closer",
        artist: "Joe Inoue",
        duration: "4:12",
        album: "Naruto Shippuden Opening"
      }
    ]
  };

  const togglePlaylist = () => {
    setIsOpen(!isOpen);
  };

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // In a real implementation, you would integrate with Spotify Web API here
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

      {/* Playlist Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="playlist-sidebar"
          >
            {/* Sidebar Header */}
            <div className="playlist-header">
              <div className="playlist-cover">
                <img src={playlist.cover} alt="Playlist Cover" />
              </div>
              <div className="playlist-info">
                <h3>{playlist.name}</h3>
                <p>{playlist.songs.length} songs</p>
              </div>
              <button 
                onClick={togglePlaylist}
                className="close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Current Playing Song */}
            {currentSong && (
              <div className="current-song">
                <div className="current-song-info">
                  <h4>{currentSong.title}</h4>
                  <p>{currentSong.artist}</p>
                </div>
                <div className="current-song-controls">
                  {isPlaying ? (
                    <button onClick={pauseSong} className="control-btn">
                      <Pause size={16} />
                    </button>
                  ) : (
                    <button onClick={resumeSong} className="control-btn">
                      <Play size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Songs List */}
            <div className="songs-list">
              <h4>All Songs</h4>
              <div className="songs-container">
                {playlist.songs.map((song, index) => (
                  <motion.div
                    key={song.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
