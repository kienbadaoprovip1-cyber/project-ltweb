export default function Home() {
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

        <div className="card-grid">
          <div className="game-card">
            <div className="cover placeholder">Game 1</div>
            <h4>Cyber Adventure</h4>
            <p>Hành động - Thế giới mở</p>
            <span className="price">$29.99</span>
          </div>

          <div className="game-card">
            <div className="cover placeholder">Game 2</div>
            <h4>Racing Pro</h4>
            <p>Đua xe tốc độ cao</p>
            <span className="price">$19.99</span>
          </div>

          <div className="game-card">
            <div className="cover placeholder">Game 3</div>
            <h4>Fantasy RPG</h4>
            <p>Nhập vai phiêu lưu</p>
            <span className="price">$39.99</span>
          </div>

          <div className="game-card">
            <div className="cover placeholder">Game 4</div>
            <h4>Zombie Survival</h4>
            <p>Sinh tồn kinh dị</p>
            <span className="price">$24.99</span>
          </div>
        </div>
      </section>
    </main>
  );
}