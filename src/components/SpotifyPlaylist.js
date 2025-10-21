import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, X, List, Volume2 } from 'lucide-react';
import './SpotifyPlaylist.css';

const SpotifyPlaylist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Your actual Spotify playlist "Alive 🕊️"
  const playlist = {
    name: "Alive 🕊️",
    cover: "/Akatsuki.jpg", // Using Akatsuki as playlist cover
    spotifyUrl: "https://open.spotify.com/playlist/72PKk905OzSzSog1N8OLmC?si=4684e546f8bf4cdf",
    songs: [
      {
        id: 1,
        title: "Chalti Hai Kya 9 Se 12",
        artist: "Dev Negi, Neha Kakkar",
        duration: "3:45",
        album: "Alive 🕊️"
      },
      {
        id: 2,
        title: "Main Tera Boyfriend (From \"Raabta\")",
        artist: "Arijit Singh, Neha Kakkar, Meet Bros.",
        duration: "4:12",
        album: "Alive 🕊️"
      },
      {
        id: 3,
        title: "Ainvayi Ainvayi",
        artist: "Salim–Sulaiman, Salim Merchant, Sunidhi Chauhan, Amitabh Bhattacharya",
        duration: "3:58",
        album: "Alive 🕊️"
      },
      {
        id: 4,
        title: "Aadat Se Majboor",
        artist: "Salim–Sulaiman, Benny Dayal, Ranveer Singh, Amitabh Bhattacharya",
        duration: "4:05",
        album: "Alive 🕊️"
      },
      {
        id: 5,
        title: "Asalaam-e-Ishqum",
        artist: "Sohail Sen, Neha Bhasin, Bappi Lahiri, Irshad Kamil",
        duration: "3:42",
        album: "Alive 🕊️"
      },
      {
        id: 6,
        title: "Thug Le",
        artist: "Salim–Sulaiman, Vishal Dadlani, Shweta Pandit, Amitabh Bhattacharya",
        duration: "4:18",
        album: "Alive 🕊️"
      },
      {
        id: 7,
        title: "Jigar Da Tukda",
        artist: "Salim–Sulaiman, Salim Merchant, Shraddha Pandit, Amitabh Bhattacharya",
        duration: "3:35",
        album: "Alive 🕊️"
      },
      {
        id: 8,
        title: "Dhunki",
        artist: "Sohail Sen, Neha Bhasin, Irshad Kamil",
        duration: "3:28",
        album: "Alive 🕊️"
      },
      {
        id: 9,
        title: "Allah Maaf Kare",
        artist: "Pritam, Sonu Nigam, Shilpa Rao",
        duration: "4:15",
        album: "Alive 🕊️"
      },
      {
        id: 10,
        title: "Long Drive",
        artist: "Mika Singh",
        duration: "3:52",
        album: "Alive 🕊️"
      },
      {
        id: 11,
        title: "Kiya Kiya",
        artist: "Anand Raj Anand, Shweta Pandit",
        duration: "3:47",
        album: "Alive 🕊️"
      },
      {
        id: 12,
        title: "No Entry: Ishq Di Galli Vich",
        artist: "Sonu Nigam, Alisha Chinai",
        duration: "4:22",
        album: "Alive 🕊️"
      },
      {
        id: 13,
        title: "Love Me Love Me",
        artist: "Wajid, Amrita Kak",
        duration: "3:38",
        album: "Alive 🕊️"
      },
      {
        id: 14,
        title: "One Bottle Down",
        artist: "Yo Yo Honey Singh",
        duration: "3:25",
        album: "Alive 🕊️"
      },
      {
        id: 15,
        title: "Kisi Disco Mein Jaaye",
        artist: "Alka Yagnik, Udit Narayan",
        duration: "4:08",
        album: "Alive 🕊️"
      },
      {
        id: 16,
        title: "Mujhko Yaad Sataye Teri",
        artist: "Himesh Reshammiya",
        duration: "3:55",
        album: "Alive 🕊️"
      },
      {
        id: 17,
        title: "Daaru Party",
        artist: "Millind Gaba",
        duration: "3:41",
        album: "Alive 🕊️"
      },
      {
        id: 18,
        title: "Ucha Lamba Kad",
        artist: "Anand Raj Anand",
        duration: "3:33",
        album: "Alive 🕊️"
      },
      {
        id: 19,
        title: "Sau Tarah Ke",
        artist: "Pritam, Jonita Gandhi, Amit Mishra, Kumaar, Ashish Pandit",
        duration: "4:30",
        album: "Alive 🕊️"
      },
      {
        id: 20,
        title: "Afghan Jalebi (Ya Baba)",
        artist: "Pritam, Asrar, Akhtar Chinnal",
        duration: "3:44",
        album: "Alive 🕊️"
      },
      {
        id: 21,
        title: "Hawa Hawa",
        artist: "Mika Singh, Prakriti Kakar, Gourov-Roshin",
        duration: "3:29",
        album: "Alive 🕊️"
      },
      {
        id: 22,
        title: "Dil Cheez Tujhe Dedi (From \"Airlift\")",
        artist: "Ankit Tiwari, Arijit Singh",
        duration: "4:12",
        album: "Alive 🕊️"
      },
      {
        id: 23,
        title: "I Hate Luv Storys",
        artist: "Vishal-Shekhar, Vishal Dadlani",
        duration: "3:56",
        album: "Alive 🕊️"
      },
      {
        id: 24,
        title: "Oh Girl You're Mine",
        artist: "Tarun Sagar, Alyssa Mendonsa, Loy Mendonsa",
        duration: "3:48",
        album: "Alive 🕊️"
      },
      {
        id: 25,
        title: "Right Now Now",
        artist: "Wajid, Sunidhi Chauhan, Suzanne D'Mello",
        duration: "3:51",
        album: "Alive 🕊️"
      },
      {
        id: 26,
        title: "Character Dheela",
        artist: "Pritam, Neeraj Shridhar, Amrita Kak",
        duration: "4:05",
        album: "Alive 🕊️"
      },
      {
        id: 27,
        title: "Locha-E-Ulfat",
        artist: "Benny Dayal",
        duration: "3:37",
        album: "Alive 🕊️"
      },
      {
        id: 28,
        title: "Choomantar",
        artist: "Sohail Sen, Benny Dayal, Aditi Singh Sharma, Irshad Kamil",
        duration: "3:42",
        album: "Alive 🕊️"
      },
      {
        id: 29,
        title: "Galat Baat Hai (From \"Main Tera Hero\")",
        artist: "Neeti Mohan, Javed Ali",
        duration: "3:58",
        album: "Alive 🕊️"
      },
      {
        id: 30,
        title: "Pungi",
        artist: "Pritam, Mika Singh, Amitabh Bhattacharya, Nakash Aziz, Javed Jaffrey",
        duration: "4:15",
        album: "Alive 🕊️"
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
