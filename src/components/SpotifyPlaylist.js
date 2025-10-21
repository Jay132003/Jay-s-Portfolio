import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, Volume2, ExternalLink, X } from 'lucide-react';
import './SpotifyPlaylist.css';

const SpotifyPlaylist = ({ isLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Your actual Spotify playlist "Human"
  const playlist = {
    name: "Alive 🕊️",
    cover: "/Alive.webp", // Using Alive.webp image as playlist cover
    spotifyUrl: "https://open.spotify.com/playlist/3fypkHaTRwz5lr7IMAF3q6?si=ae41e87b61554306",
    songs: [
      {
        id: 1,
        title: "Human",
        artist: "Rag'n'Bone Man",
        duration: "3:20",
        album: "Human (Deluxe)",
        image: "https://i.scdn.co/image/ab67616d0000b27390a788beadaad34ff684d3ec"
      },
      {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:20",
        album: "After Hours",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 3,
        title: "Starboy",
        artist: "The Weeknd, Daft Punk",
        duration: "3:50",
        album: "Starboy",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 4,
        title: "Levitating",
        artist: "Dua Lipa",
        duration: "3:24",
        album: "Future Nostalgia",
        image: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
      },
      {
        id: 5,
        title: "Attention",
        artist: "Charlie Puth",
        duration: "3:29",
        album: "Voicenotes",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 6,
        title: "Without Me",
        artist: "Eminem",
        duration: "4:50",
        album: "The Eminem Show",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 7,
        title: "Believer",
        artist: "Imagine Dragons",
        duration: "3:24",
        album: "Evolve",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 8,
        title: "No Lie",
        artist: "Sean Paul, Dua Lipa",
        duration: "3:41",
        album: "Mad Love The Prequel",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 9,
        title: "Beggin'",
        artist: "Måneskin",
        duration: "3:43",
        album: "Chosen",
        image: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
      },
      {
        id: 10,
        title: "New Rules",
        artist: "Dua Lipa",
        duration: "3:29",
        album: "Dua Lipa",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 11,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        duration: "2:54",
        album: "Fine Line",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 12,
        title: "7 Years",
        artist: "Lukas Graham",
        duration: "3:57",
        album: "Lukas Graham",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 13,
        title: "The Nights",
        artist: "Avicii",
        duration: "2:56",
        album: "Stories",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 14,
        title: "Hymn for the Weekend",
        artist: "Coldplay",
        duration: "4:18",
        album: "A Head Full of Dreams",
        image: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
      },
      {
        id: 15,
        title: "Gangsta's Paradise",
        artist: "Coolio, L.V.",
        duration: "4:00",
        album: "Gangsta's Paradise",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 16,
        title: "Way down We Go",
        artist: "KALEO",
        duration: "3:38",
        album: "A/B",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 17,
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: "3:53",
        album: "÷ (Divide)",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 18,
        title: "Take Me To Church",
        artist: "Hozier",
        duration: "4:01",
        album: "Hozier",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 19,
        title: "See You Again (feat. Charlie Puth)",
        artist: "Wiz Khalifa, Charlie Puth",
        duration: "3:49",
        album: "Furious 7 (Original Motion Picture Soundtrack)",
        image: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
      },
      {
        id: 20,
        title: "Fairytale",
        artist: "Alexander Rybak",
        duration: "3:05",
        album: "Fairytales",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 21,
        title: "We Own It (Fast & Furious)",
        artist: "2 Chainz, Wiz Khalifa",
        duration: "3:47",
        album: "Fast & Furious 6 (Original Motion Picture Soundtrack)",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 22,
        title: "Animals",
        artist: "Maroon 5",
        duration: "3:51",
        album: "V",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 23,
        title: "Play Date",
        artist: "Melanie Martinez",
        duration: "2:59",
        album: "Cry Baby",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 24,
        title: "rockstar (feat. 21 Savage)",
        artist: "Post Malone, 21 Savage",
        duration: "3:38",
        album: "beerbongs & bentleys",
        image: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
      },
      {
        id: 25,
        title: "Hips Don't Lie (feat. Wyclef Jean)",
        artist: "Shakira, Wyclef Jean",
        duration: "3:38",
        album: "Oral Fixation, Vol. 2",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 26,
        title: "Thrift Shop (feat. Wanz)",
        artist: "Macklemore & Ryan Lewis, Macklemore, Ryan Lewis, Wanz",
        duration: "3:55",
        album: "The Heist",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
      },
      {
        id: 27,
        title: "INDUSTRY BABY (feat. Jack Harlow)",
        artist: "Lil Nas X, Jack Harlow",
        duration: "3:32",
        album: "MONTERO",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 28,
        title: "Mockingbird",
        artist: "Eminem",
        duration: "4:10",
        album: "Encore",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: 29,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        duration: "3:03",
        album: "AM",
        image: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
      },
      {
        id: 30,
        title: "Die With A Smile",
        artist: "Lady Gaga, Bruno Mars",
        duration: "3:48",
        album: "Die With A Smile",
        image: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91f982b5ad2eeef"
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
      </motion.button>

      {/* Full Screen Playlist Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fullscreen-backdrop ${isLightMode ? 'light-backdrop' : 'dark-backdrop'}`}
              onClick={togglePlaylist}
            />
            
            {/* Full Screen Playlist */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`fullscreen-playlist ${isLightMode ? 'light-mode' : 'dark-mode'}`}
            >
              {/* Close Button */}
              <button 
                onClick={togglePlaylist}
                className="close-btn-fullscreen"
              >
                <X size={24} />
              </button>

              {/* Playlist Header */}
              <div className="fullscreen-playlist-header">
                <div className="playlist-cover-fullscreen">
                  <img src={playlist.cover} alt="Playlist Cover" />
                </div>
                <div className="playlist-info-fullscreen">
                  <h2>{playlist.name}</h2>
                  <p>{playlist.songs.length} songs • My Collection</p>
                  <button 
                    onClick={() => window.open(playlist.spotifyUrl, '_blank')}
                    className="spotify-link-btn-fullscreen"
                  >
                    <ExternalLink size={18} />
                    Open in Spotify
                  </button>
                </div>
              </div>

              {/* Songs List */}
              <div className="fullscreen-songs-list">
                <div className="songs-header-fullscreen">
                  <div className="song-header-number-fullscreen">#</div>
                  <div className="song-header-title-fullscreen">TITLE</div>
                  <div className="song-header-album-fullscreen">ALBUM</div>
                  <div className="song-header-duration-fullscreen">
                    <Music size={16} />
                  </div>
                </div>
                
                <div className="songs-container-fullscreen">
                  {playlist.songs.map((song, index) => (
                    <motion.div
                      key={song.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className={`fullscreen-song-item ${currentSong?.id === song.id ? 'active' : ''}`}
                      onClick={() => playSong(song)}
                    >
                      <div className="song-number-fullscreen">
                        {currentSong?.id === song.id && isPlaying ? (
                          <Volume2 size={18} className="playing-icon" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      
                      <div className="song-info-fullscreen">
                        <div className="song-image-fullscreen">
                          <img 
                            src={song.image} 
                            alt={song.title}
                            onError={(e) => {
                              e.target.src = playlist.cover;
                            }}
                          />
                        </div>
                        <div className="song-details-fullscreen">
                          <h4>{song.title}</h4>
                          <p>{song.artist}</p>
                        </div>
                      </div>
                      
                      <div className="song-album-fullscreen">
                        <span>{song.album}</span>
                      </div>
                      
                      <div className="song-duration-fullscreen">
                        {song.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpotifyPlaylist;