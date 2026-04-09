import "./home.css";

function Home() {
    const whydata = [
    {
      icon: "🎵",
      title: "Curated Collections",
      desc: "Discover hand-picked playlists and albums across all genres, from classical to contemporary.",
    },
    {
      icon: "👥",
      title: "Community Driven",
      desc: "Join a vibrant community of music enthusiasts sharing their passion and discoveries.",
    },
    {
      icon: "📈",
      title: "Trending Tracks",
      desc: "Stay up-to-date with the latest hits and emerging artists making waves in the music world.",
    },
    {
      icon: "❤️",
      title: "Personal Favorites",
      desc: "Create and organize your own collections, save favorites, and build your musical identity.",
    },
    {
      icon: "📡",
      title: "Live Sessions",
      desc: "Experience exclusive live performances and intimate studio sessions from your favorite artists.",
    },
    {
      icon: "💿",
      title: "Vinyl Archive",
      desc: "Explore our extensive digital archive of classic vinyl records and rare finds.",
    },
  ];
    
  
  return (
    <>
        {/*--------------------HERO-----------------------*/}

<div className="home-container">
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 style={{ fontSize: "60px" }}>
            Discover the <span>Rhythm</span> of Life
          </h1>
          <p style={{ fontSize: "25px" }}>
            Explore thousands of curated music collections and connect with music lovers.
          </p>

        <div className="hero-buttons">
          <button className="primary">Start Exploring</button>
          <button   className="secondary">Learn More</button>
        </div>

        <div className="HeroStats">
          <span>50K+ Tracks</span>
          <span>10K+ Artists</span>
          <span>100K+ Users</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="musicgirl">
          <img src="/images/musicgirl.png" alt="music" />
        </div>
          
        </div>
      </div>
    </section>
    </div>

     {/*--------------------WHY-----------------------*/}
        <section className="why">
      <h2>
        Why Choose <span>MusicAlly</span>
      </h2>
      <p className="why-subtitle">
        Experience music like never before with features designed for true music lovers
      </p>

      <div className="why-grid">
        {whydata.map((item, i) => (
          <div className="cards" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    


</>
);
}
export default Home 