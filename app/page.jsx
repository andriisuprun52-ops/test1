function Card({ title, value, tone = 'default' }) {
  return (
    <div className={`card price-card ${tone}`}>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page">
        <header className="topbar card">
          <div className="brand-wrap">
            <div className="brand-mark">B</div>
            <div>
              <div className="brand">BIDVIN</div>
              <div className="muted small">Auction UI concept</div>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#overview">Overview</a>
            <a href="#details">Vehicle</a>
            <a href="#bidding">Bidding</a>
          </nav>
        </header>

        <section id="overview" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">Vehicle details / auction page</div>
            <h1>One polished auction lot page in Next.js.</h1>
            <p>
              A cleaner single-page interface for car auction inventory: media gallery, key lot data,
              live bid area, pricing cards, and quick details laid out for fast decision making.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#bidding">See bid section</a>
              <a className="btn btn-secondary" href="#details">See vehicle data</a>
            </div>
            <div className="stats-row">
              <Stat label="Status" value="Live auction" />
              <Stat label="Sources" value="Copart / IAAI" />
              <Stat label="Lot sync" value="Near real-time" />
            </div>
          </div>

          <div className="hero-panel card">
            <div className="car-top">
              <div>
                <div className="muted small">Lot # 42819034 · Sale date: Mar 18, 2026</div>
                <h2>2020 BMW X5 xDrive40i</h2>
                <div className="tags">
                  <span>Clean title</span>
                  <span>Run & Drive</span>
                  <span>Primary damage: Front End</span>
                </div>
              </div>
              <div className="timer">13h : 45m : 05s</div>
            </div>

            <div className="gallery-grid">
              <div className="main-shot">
                <div className="car-silhouette" />
                <div className="photo-badge">24 photos</div>
              </div>
              <div className="side-info card soft">
                <h3>Lot summary</h3>
                <div className="info-list">
                  <DetailItem label="Current bid" value="$2,500 USD" />
                  <DetailItem label="Buy now" value="$12,900 USD" />
                  <DetailItem label="Odometer" value="48,221 mi" />
                  <DetailItem label="Location" value="New Jersey, USA" />
                </div>
              </div>
            </div>

            <div className="thumbs">
              <div />
              <div />
              <div />
              <div />
            </div>

            <div id="bidding" className="price-grid">
              <Card title="Current Bid" value="$2,500 USD" />
              <Card title="My Bid" value="$2,750 USD" tone="success" />
            </div>

            <div className="bid-controls card inset">
              <div className="control-head">
                <div>
                  <div className="small muted">Bid step</div>
                  <strong>Select increment and place bid</strong>
                </div>
                <div className="small muted">Proxy bid available</div>
              </div>
              <div className="increment-row">
                <button className="pill">+ $50</button>
                <button className="pill active">+ $250</button>
                <button className="pill">+ $500</button>
                <button className="pill">+ $1000</button>
              </div>
              <div className="control-actions">
                <button className="btn btn-dark">Place Bid</button>
                <button className="btn btn-light">Buy Now</button>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="content-grid">
          <div className="card spec-card">
            <div className="section-head">
              <div>
                <div className="small muted">Vehicle details</div>
                <h3>Core specifications</h3>
              </div>
              <div className="vin-chip">VIN: 5UXCR6C04L9B12345</div>
            </div>
            <div className="spec-list">
              <DetailItem label="Engine" value="3.0L I6 Turbo" />
              <DetailItem label="Transmission" value="Automatic" />
              <DetailItem label="Drive" value="AWD" />
              <DetailItem label="Fuel" value="Gasoline" />
              <DetailItem label="Exterior" value="Black" />
              <DetailItem label="Keys" value="Present" />
            </div>
          </div>

          <div className="card feature-card">
            <div className="small muted">Notes</div>
            <h3>What this page is solving</h3>
            <ul>
              <li>Put the bid, timer, and key damage info above the fold.</li>
              <li>Separate media, specs, and bidding controls into readable blocks.</li>
              <li>Use a layout that can scale into a full marketplace or lot-details flow.</li>
              <li>Keep it export-friendly for GitHub Pages and static deployment.</li>
            </ul>
          </div>
        </section>

        <footer className="footer muted small">
          BIDVIN UI concept · Next.js static page · built for GitHub Pages
        </footer>
      </div>
    </main>
  );
}
