import Link from "next/link";

const services = [
  {
    icon: "🗑️",
    title: "Report Waste",
    description: "Report garbage dumped in public places with photos and location details.",
    link: "/report-waste",
    button: "Report Now",
  },
  {
    icon: "📋",
    title: "Track Complaints",
    description: "Check the status of your waste complaints anytime.",
    link: "/complaints",
    button: "Track Now",
  },
  {
    icon: "🚛",
    title: "Collection Schedule",
    description: "View waste collection dates and timings in your area.",
    link: "/schedule",
    button: "View Schedule",
  },
];

export default function Home() {
  return (
    <main style={styles.main}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>♻️ CleanCity</h2>
        <div style={styles.navLinks}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/login" style={styles.navLink}>Login</Link>
          <Link href="/register" style={styles.navButton}>Register</Link>
        </div>
      </nav>

      <section style={styles.hero}>
        <p style={styles.tag}>🌱 A cleaner city starts with us</p>
        <h1 style={styles.heading}>
          Together for a <span style={{color:"#86efac"}}>Cleaner</span>
          <br /> and Greener Future
        </h1>
        <p style={styles.description}>
          Report waste, track complaints and stay updated
          about waste collection in your area.
          Let's make our surroundings clean and healthy.
        </p>
        <Link href="/report-waste" style={styles.heroButton}>
          Report Waste Now →
        </Link>
      </section>

      <section style={styles.services}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <p style={styles.subTitle}>Simple solutions for a cleaner environment</p>

        <div style={styles.cards}>
          {services.map((service) => (
            <div key={service.title} style={styles.card}>
              <div style={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
              <Link href={service.link} style={styles.cardButton}>
                {service.button} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.bottom}>
        <h2>Be Part of the Change!</h2>
        <p>Small actions today can create a cleaner tomorrow.</p>
        <Link href="/report-waste" style={styles.bottomButton}>
          Get Started
        </Link>
      </section>

      <footer style={styles.footer}>
        <h3>♻️ CleanCity – Waste Management System</h3>
        <p>Keep Your City Clean, Green and Healthy.</p>
        <p>© 2026 CleanCity. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    background: "#f0fdf4",
    minHeight: "100vh",
    color: "#14532d",
  },
  navbar: {
    background: "#14532d",
    color: "white",
    padding: "18px 7%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  logo: { margin: 0, fontSize: "25px" },
  navLinks: { display: "flex", alignItems: "center", gap: "25px" },
  navLink: { color: "white", textDecoration: "none" },
  navButton: {
    background: "#86efac",
    color: "#14532d",
    padding: "10px 18px",
    borderRadius: "7px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  hero: {
    background: "linear-gradient(120deg,#14532d,#15803d)",
    color: "white",
    textAlign: "center",
    padding: "85px 20px",
  },
  tag: { color: "#bbf7d0", fontSize: "16px" },
  heading: { fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.2 },
  description: {
    fontSize: "17px",
    lineHeight: 1.8,
    maxWidth: "650px",
    margin: "20px auto 30px",
    color: "#dcfce7",
  },
  heroButton: {
    display: "inline-block",
    background: "#86efac",
    color: "#14532d",
    padding: "14px 25px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  services: { padding: "60px 7%", textAlign: "center" },
  sectionTitle: { fontSize: "32px", marginBottom: "10px" },
  subTitle: { color: "#64748b", marginBottom: "35px" },
  cards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  card: {
    background: "white",
    padding: "30px 22px",
    borderRadius: "14px",
    width: "260px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  icon: { fontSize: "40px" },
  cardText: { color: "#64748b", lineHeight: 1.6, minHeight: "75px" },
  cardButton: {
    display: "inline-block",
    marginTop: "15px",
    background: "#15803d",
    color: "white",
    padding: "11px 18px",
    borderRadius: "7px",
    textDecoration: "none",
  },
  bottom: {
    background: "#dcfce7",
    textAlign: "center",
    padding: "45px 20px",
  },
  bottomButton: {
    display: "inline-block",
    marginTop: "15px",
    background: "#166534",
    color: "white",
    padding: "12px 25px",
    borderRadius: "7px",
    textDecoration: "none",
  },
  footer: {
    background: "#14532d",
    color: "white",
    textAlign: "center",
    padding: "25px 15px",
    lineHeight: 1.7,
  },
};