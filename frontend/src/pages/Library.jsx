import React, { useState, useEffect } from 'react';
import api from '../api'; 

function Library() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await api.get('/game');
        setGames(response.data);
      } catch (err) {
        console.error("Lỗi khi tải danh sách game:", err);
        setError("Không thể tải dữ liệu từ server.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []); 

  if (loading) return <div>Đang tải danh sách game...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Thư viện Game</h1>
      <div className="game-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <h3>{game.title}</h3>
            <p>Giá: ${game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;