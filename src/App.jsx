import { useState } from "react";
import "./index.css";

const dishes = [
  {
    name: "Truffle Mushroom Pasta",
    description: "Creamy pasta with wild mushrooms & truffle oil",
    price: "₦18,500",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85",
    alt: "Truffle mushroom pasta"
  },
  {
    name: "Grilled Ribeye Steak",
    description: "Juicy grilled steak with garlic butter & vegetables",
    price: "₦28,500",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85",
    alt: "Grilled ribeye steak"
  },
  {
    name: "Mediterranean Bowl",
    description: "Fresh greens, olives, feta & seasonal vegetables",
    price: "₦15,500",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
    alt: "Mediterranean salad bowl",
    tag: "VEG"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with vanilla ice cream",
    price: "₦9,500",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    alt: "Chocolate cake"
  }
];

const testimonials = [
  ["Jessica M.", "Amazing food and wonderful ambience. Dave Bite is my new favorite place!"],
  ["David L.", "Every dish was bursting with flavor. Highly recommend the grilled steak!"],
  ["Sophia R.", "Perfect place for a cozy dinner. Great service and friendly staff!"]
];

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="Dave Bite home">
      <span className="brand-leaf">❧</span>
      <span className="brand-name">DAVE BITE</span>
      <small>R E S T A U R A N T</small>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Home", "#home"], ["About us", "#about"], ["Menu", "#menu"], ["Reservation", "#reservation"], ["Gallery", "#gallery"], ["Events", "#events"], ["Contact", "#contact"]];
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>⌖ &nbsp;45 Culinary Street, Gourmet City</span>
          <span>◷ &nbsp;Mon – Sun: 10:00 AM – 11:00 PM</span>
          <span>☎ &nbsp;+234 800 000 0000</span>
          <div className="social-mini"><a href="#contact">f</a><a href="#contact">◎</a><a href="#contact">♪</a></div>
        </div>
      </div>
      <header className="site-header">
        <Brand />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>☰</button>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href], i) => <a key={label} className={i === 0 ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#reservation" onClick={() => setOpen(false)}>Book a table</a>
        </nav>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="script">Welcome to Dave Bite</p>
        <h1>Food that delights,<br /><em>Moments that stay.</em></h1>
        <p className="hero-description">Discover a beautiful blend of flavor, ambiance<br className="desktop-only" /> and hospitality. Every dish is prepared with care<br className="desktop-only" /> using fresh, quality ingredients.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#menu">Explore menu</a><a className="btn btn-outline" href="#reservation">Book a table <span>▦</span></a></div>
        <div className="slider-dots"><i className="selected" /><i /><i /></div>
      </div>
      <div className="hero-art">
        <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=88" alt="Beautifully plated grilled salmon dish" />
        <div className="hero-leaf">✧</div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    ["♧", "Fresh Ingredients", "We choose fresh, quality<br/>ingredients for every dish."],
    ["♨", "Expert Chefs", "Our chefs bring passion<br/>and creativity to every plate."],
    ["♧", "Cozy Ambience", "A warm and inviting place<br/>for every occasion."],
    ["✿", "Great Hospitality", "Your satisfaction is our<br/>priority. Always."]
  ];
  return <section className="features section-wrap">{items.map(([icon, title, copy]) => <article key={title}><span className="feature-icon">{icon}</span><div><h3>{title}</h3><p dangerouslySetInnerHTML={{ __html: copy }} /></div></article>)}</section>;
}

function About() {
  return (
    <section className="about section-wrap" id="about">
      <div className="about-photos" id="gallery">
        <img className="about-main" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85" alt="Warm and inviting restaurant interior" />
        <img className="about-inset" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=85" alt="Chef preparing food in a kitchen" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">About us</p><h2>Crafting Delicious<br />Stories Since 2010</h2>
        <div className="tiny-rule" />
        <p>At Dave Bite, we believe that great food brings people together. Our menu is inspired by exciting flavors and made to create unforgettable dining experiences.</p>
        <div className="stats"><div><b>♜ &nbsp;150+</b><small>Dishes</small></div><div><b>♧ &nbsp;10K+</b><small>Happy Guests</small></div><div><b>☆ &nbsp;4.8</b><small>Guest Rating</small></div></div>
        <a className="btn btn-primary" href="#events">Learn more about us</a>
      </div>
    </section>
  );
}

function Menu() {
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");
  return (
    <section className="menu-section section-wrap" id="menu">
      <div className="section-heading"><div><p className="eyebrow">Our menu highlights</p><h2>Chef's Specials</h2></div><a href="#menu-grid" className="text-link">View full menu <span>→</span></a></div>
      <div className="menu-grid" id="menu-grid">
        {dishes.map(dish => <article className="dish-card" key={dish.name}>
          <img src={dish.image} alt={dish.alt} />
          <div className="dish-info"><h3>{dish.name}</h3><p>{dish.description}</p>
            <div className="dish-bottom"><strong>{dish.price}</strong>{dish.tag && <span className="tag">{dish.tag}</span>}
              <button className="add-btn" aria-label={`Add ${dish.name} to sample order`} onClick={() => { setCount(count + 1); setLastAdded(dish.name); }}>+</button>
            </div>
          </div>
        </article>)}
      </div>
      <p className="cart-note" role="status" aria-live="polite">{lastAdded ? `${lastAdded} added to your sample order. Items selected: ${count}.` : ""}</p>
    </section>
  );
}

function Reservation() {
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setMessage(`Thanks, ${data.get("name")}! Your reservation request is ready. Connect a booking service to receive real bookings.`);
    event.currentTarget.reset();
  }
  return (
    <section className="reservation section-wrap" id="reservation">
      <div className="reservation-intro"><p className="eyebrow">Reserve your table</p><h2>Good Food. Great Time.</h2><p>From casual lunches to special celebrations,<br />we've got the perfect table for you.</p></div>
      <form className="booking-form" onSubmit={submit}>
        <label><span className="sr-only">Full name</span><input name="name" placeholder="Full Name" required /></label>
        <label><span className="sr-only">Phone number</span><input name="phone" type="tel" placeholder="Phone Number" required /></label>
        <label><span className="sr-only">Date</span><input name="date" type="date" min={new Date().toISOString().split("T")[0]} required /></label>
        <label><span className="sr-only">Time</span><select name="time" defaultValue="" required><option value="" disabled>Time</option>{["10:00 AM","12:00 PM","2:00 PM","6:00 PM","8:00 PM","9:30 PM"].map(t => <option key={t}>{t}</option>)}</select></label>
        <label><span className="sr-only">Number of guests</span><select name="guests" defaultValue="" required><option value="" disabled>Guests</option>{["1 Guest","2 Guests","3 Guests","4 Guests","5 Guests","6+ Guests"].map(g => <option key={g}>{g}</option>)}</select></label>
        <button className="btn btn-primary" type="submit">Book now &nbsp;▦</button>
      </form>
      <p className="booking-note" role="status" aria-live="polite">{message}</p><div className="table-art" aria-hidden="true">♧<span>◯</span>♧</div>
    </section>
  );
}

function Testimonials() {
  return <section className="testimonials section-wrap" id="events">
    <p className="eyebrow centered">What our guests say</p>
    <div className="testimonial-grid">{testimonials.map(([name, quote]) => <article key={name}><div className="quote-mark">“</div><div className="stars">★★★★★</div><p>{quote}</p><b>{name}</b></article>)}</div>
  </section>;
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return <footer className="footer" id="contact">
    <div className="footer-inner">
      <div className="footer-brand"><Brand light /><p>Dave Bite is more than just a restaurant. It's a celebration of food, people and moments.</p><div className="footer-social"><a href="#contact">f</a><a href="#contact">◎</a><a href="#contact">♪</a></div></div>
      <div><h4>Quick links</h4><a href="#home">Home</a><a href="#about">About us</a><a href="#menu">Menu</a><a href="#reservation">Reservation</a><a href="#gallery">Gallery</a><a href="#contact">Contact us</a></div>
      <div><h4>Explore menu</h4><a href="#menu">Starters</a><a href="#menu">Main course</a><a href="#menu">Desserts</a><a href="#menu">Beverages</a><a href="#menu">Chef's specials</a></div>
      <div><h4>Contact us</h4><p>⌖ &nbsp;45 Culinary Street,<br />&nbsp;&nbsp;&nbsp;&nbsp;Gourmet City, Nigeria</p><p>☎ &nbsp;+234 800 000 0000</p><p>✉ &nbsp;hello@davebite.com</p></div>
      <div className="newsletter"><h4>Newsletter</h4><p>Subscribe to get updates on special offers and events.</p><form className="newsletter-form" onSubmit={e => { e.preventDefault(); setSubscribed(true); e.currentTarget.reset(); }}><input type="email" placeholder="Your email address" required /><button aria-label="Subscribe">➤</button></form>{subscribed && <small className="newsletter-note">Thanks for subscribing!</small>}</div>
    </div>
    <div className="copyright"><span>© 2026 Dave Bite. All Rights Reserved.</span><span><a href="#contact">Privacy Policy</a> &nbsp; | &nbsp; <a href="#contact">Terms &amp; Conditions</a></span></div>
  </footer>;
}

export default function App() {
  return <><Header /><main><Hero /><Features /><About /><Menu /><Reservation /><Testimonials /></main><Footer /></>;
}
