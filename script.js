/* ===== RESET Y VARIABLES ===== */
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #60a5fa;
  --secondary: #10b981;
  --secondary-dark: #059669;
  --accent: #8b5cf6;
  --text: #1f2937;
  --text-light: #6b7280;
  --light: #f8fafc;
  --dark: #1e293b;
  --gray: #e5e7eb;
  --gray-dark: #9ca3af;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
  --radius: 12px;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--text);
  background-color: var(--light);
  overflow-x: hidden;
}

/* ===== TIPOGRAFÍA ===== */
h1, h2, h3, h4 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 { font-size: 3.5rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 1.8rem; }
h4 { font-size: 1.3rem; }

p {
  margin-bottom: 1rem;
  color: var(--text-light);
}

.highlight {
  color: var(--primary);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: var(--primary-light);
  opacity: 0.3;
  z-index: -1;
}

/* ===== UTILIDADES ===== */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-padding {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* ===== BOTONES ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.btn-secondary {
  background-color: var(--secondary);
  color: white;
}

.btn-secondary:hover {
  background-color: var(--secondary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.btn-light {
  background-color: white;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-light:hover {
  background-color: var(--primary);
  color: white;
  transform: translateY(-3px);
}

.btn-large {
  padding: 16px 36px;
  font-size: 1.1rem;
}

.btn-login {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--gray);
}

.btn-login:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.btn-register {
  background: var(--primary);
  color: white;
}

/* ===== HEADER ===== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  z-index: 1000;
  padding: 15px 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: 700;
}

.logo i {
  font-size: 2.2rem;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius);
  transition: var(--transition);
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background-color: var(--primary);
  border-radius: 2px;
}

.nav-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}

/* ===== HERO SECTION ===== */
.hero {
  padding: 160px 0 100px;
  background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  background-position: bottom;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: white;
}

.hero-title .highlight {
  color: white;
}

.hero-title .highlight::after {
  background-color: var(--secondary);
  opacity: 0.5;
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  transform: perspective(1000px) rotateY(-10deg);
  transition: var(--transition);
}

.hero-image img:hover {
  transform: perspective(1000px) rotateY(0deg);
}

/* ===== ABOUT SECTION ===== */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 15px;
}

.feature i {
  color: var(--secondary);
  font-size: 1.2rem;
}

.about-image img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* ===== SERVICES SECTION ===== */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.card {
  background: white;
  padding: 40px 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--gray);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var(--primary);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.card:hover::before {
  width: 8px;
  background-color: var(--secondary);
}

.card-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-light), var(--primary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  color: white;
  font-size: 1.8rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark);
}

.card-description {
  margin-bottom: 25px;
  color: var(--text-light);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
  transition: var(--transition);
}

.card-link:hover {
  gap: 15px;
  color: var(--primary-dark);
}

/* ===== TESTIMONIALS ===== */
.testimonial-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.testimonial-card {
  background: white;
  padding: 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.testimonial-content {
  padding: 20px 0;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 25px;
}

.testimonial-content p {
  font-style: italic;
  color: var(--text);
  font-size: 1.1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author h4 {
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.testimonial-author p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0;
}

/* ===== CTA SECTION ===== */
.cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: white;
}

.cta-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 40px;
}

.cta-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ===== FOOTER ===== */
.footer {
  background-color: var(--dark);
  color: white;
  padding: 80px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.footer-section h4 {
  color: white;
  margin-bottom: 25px;
  font-size: 1.3rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  margin: 20px 0;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.social-links a:hover {
  background: var(--primary);
  transform: translateY(-3px);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition);
}

.footer-section ul li a:hover {
  color: white;
  padding-left: 5px;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.contact-info i {
  color: var(--primary-light);
  width: 20px;
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: white;
}

/* ===== BACK TO TOP ===== */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
  z-index: 999;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 992px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.2rem; }
  .section-title { font-size: 2.2rem; }
  
  .hero-content,
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-image {
    order: -1;
  }
  
  .hero-actions,
  .hero-stats,
  .cta-actions {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: space-around;
  }
  
  .hamburger {
    display: flex;
  }
  
  .nav-menu,
  .nav-actions {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background: white;
    flex-direction: column;
    padding: 100px 40px 40px;
    transition: var(--transition);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
  }
  
  .nav-menu.active,
  .nav-actions.active {
    right: 0;
  }
  
  .nav-menu {
    gap: 20px;
  }
  
  .nav-actions {
    gap: 15px;
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}

@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  .section-title { font-size: 2rem; }
  
  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .section-padding {
    padding: 60px 0;
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.8rem; }
  .section-title { font-size: 1.8rem; }
  
  .btn-large {
    width: 100%;
    justify-content: center;
  }
  
  .hero-actions,
  .cta-actions {
    flex-direction: column;
  }
}