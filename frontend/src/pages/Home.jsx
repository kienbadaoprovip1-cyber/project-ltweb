import React, { useState, useEffect } from 'react';
import api from '../api'; 

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await api.get('/game'); 
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <main className="main-content">
      {/* Banner */}
      <section className="hero-banner">
        <div className="hero-text">
          <h2>Khám phá thế giới game</h2>
          <p>Hàng ngàn tựa game hấp dẫn đang chờ bạn.</p>
          <button className="buy-btn">Mua ngay</button>
        </div>
      </section>

      {/* Featured Games */}
      <section className="game-section">
        <h3>Game Nổi Bật</h3>

        {loading ? (
          <p>Đang tải game...</p>
        ) : (
          <div className="card-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="cover placeholder">Game {game.id}</div>
                <h4>{game.title}</h4>
                <p>Thế giới mở</p> 
                <span className="price">${game.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}