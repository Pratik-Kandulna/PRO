import "./UrHome.css";



function UrHome(){
    
    const  whydata = [
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


    const genres = [
    { name: "Rock", tracks: "12K+ tracks", color: "linear-gradient(135deg,#ff7a18,#ff4d4d)", icon: "🎸" },
    { name: "Jazz", tracks: "8K+ tracks", color: "linear-gradient(135deg,#00c6ff,#2ecc71)", icon: "🎷" },
    { name: "Electronic", tracks: "15K+ tracks", color: "linear-gradient(135deg,#ff00cc,#8e2de2)", icon: "🎧" },
    { name: "Hip Hop", tracks: "10K+ tracks", color: "linear-gradient(135deg,#ffb347,#ffcc33)", icon: "🎤" },
    { name: "Classical", tracks: "6K+ tracks", color: "linear-gradient(135deg,#6a11cb,#2575fc)", icon: "🎵" },
    { name: "Pop", tracks: "18K+ tracks", color: "linear-gradient(135deg,#ff416c,#ff4b2b)", icon: "🥁" },
    ];


    const artists = [
    {
      name: "Luna Rivers",
      genre: "Electronic Pop",
      followers: "2.4M followers",
      img: "/images/artist1.jpg",
      growth: "+15%",
    },
    {
      name: "DJ Spectrum",
      genre: "House & Techno",
      followers: "1.8M followers",
      img: "/images/artist2.jpg",
      growth: "+22%",
    },
    {
      name: "Ivory Keys",
      genre: "Classical Fusion",
      followers: "980K followers",
      img: "/images/artist3.jpg",
      growth: "+8%",
    },
    {
      name: "The Saxman",
      genre: "Smooth Jazz",
      followers: "1.2M followers",
      img: "/images/artist4.jpg",
      growth: "+12%",
    },
    ];

    const featureddata = [
    {
      icon: "🎵",
      value: "50,000+",
      title: "Music Tracks",
      desc: "Curated from around the globe",
    },
    {
      icon: "👥",
      value: "100K+",
      title: "Active Users",
      desc: "Growing community daily",
    },
    {
      icon: "🌍",
      value: "150+",
      title: "Countries",
      desc: "Worldwide music discovery",
    },
    {
      icon: "🏅",
      value: "10,000+",
      title: "Artists",
      desc: "Talented musicians featured",
    },
    ];

    const statsdata = [
    {
      icon: "🎵",
      value: "50,000+",
      title: "Music Tracks",
      desc: "Curated from around the globe",
    },
    {
      icon: "👥",
      value: "100K+",
      title: "Active Users",
      desc: "Growing community daily",
    },
    {
      icon: "🌍",
      value: "150+",
      title: "Countries",
      desc: "Worldwide music discovery",
    },
    {
      icon: "🏅",
      value: "10,000+",
      title: "Artists",
      desc: "Talented musicians featured",
    },
  ];

    return(
        <>
          

          {/*  HOME PAGE */}
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
        

        {/* WHY */}
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


             {/* FEATURED */}  

            <section className="featured">
      <div className="featured-top">
        <div>
          <h2>Featured Collections</h2>
          <p>Curated by music experts for you</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="featured-grid">
        {featureddata.map((item, i) => (
          <div className="f-card" key={i}>
            <div className="img-box">
              <img src={item.img} alt="" />
              <span className="badge">{item.tracks}</span>
            </div>

            <div className="f-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
          

          {/* GENERE */}
          <section className="genre">
      <h2>Explore by Genre</h2>
      <p className="subtitle">
        Find your sound across diverse musical styles
      </p>

      <div className="genre-grid">
        {genres.map((g, i) => (
          <div className="genre-card" key={i}>
            <div className="icon-box" style={{ background: g.color }}>
              {g.icon}
            </div>
            <h3>{g.name}</h3>
            <p>{g.tracks}</p>
          </div>
        ))}
      </div>
    </section>


        {/* ARTIST */}
        <section className="artists">
      <div className="artists-top">
        <div>
          <h2>Trending Artists</h2>
          <p>Rising stars and chart-toppers</p>
        </div>
        <button className="view-btn">View All Artists</button>
      </div>

      <div className="artists-grid">
        {artists.map((a, i) => (
          <div className="artist-card" key={i}>
            <img src={a.img} alt="" />

            {/* gradient overlay */}
            <div className="overlay"></div>

            {/* growth badge */}
            <span className="badge">↗️ {a.growth}</span>

            {/* content */}
            <div className="artist-info">
              <h3>{a.name}</h3>
              <p>{a.genre}</p>
              <span>{a.followers}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
        

        {/* STATS */}
        <section className="stats">
      <h2>MusicAlly by the Numbers</h2>
      <p className="subtitle">
        Join a thriving global music community
      </p>

      <div className="stats-grid">
        {statsdata.map((item, i) => (
          <div className="stat-card" key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
       </>
    )
}
export default UrHome;