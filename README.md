* {
  box-sizing: border-box;
}

:root {
  --ink: #0d1b2a;
  --ink-soft: #2b3a4b;
  --navy: #101c2f;
  --navy-2: #16263f;
  --gold: #d7b77d;
  --gold-soft: #f1dfb5;
  --ivory: #f7f4ee;
  --cream: #f1ecdf;
  --botanical: #668370;
  --line: rgba(19, 31, 48, 0.08);
  --white: #fff;
  --shadow: 0 20px 45px rgba(13, 27, 42, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: linear-gradient(180deg, var(--ivory), #f9f7f2 16%, var(--white));
  color: var(--ink);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.page-shell {
  min-height: 100vh;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(6px);
  background: rgba(247, 244, 238, 0.8);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;
  gap: 24px;
}

.brand {
  display: flex;
  flex-direction: column;
  line-height: 1;
  padding: 10px 0;
}

.brand-mark {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  letter-spacing: 0.18em;
  font-weight: 700;
  color: var(--navy);
}

.brand-sub {
  font-size: 0.62rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-link {
  color: var(--ink-soft);
  font-size: 0.92rem;
  position: relative;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: var(--gold);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.text-link {
  color: var(--ink-soft);
  font-size: 0.9rem;
}

.cart-pill {
  background: var(--navy);
  color: var(--white);
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 0.85rem;
}

.hero {
  padding: 56px 0 28px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 30px;
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 0.76rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  color: var(--botanical);
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.subhead {
  margin-top: 16px;
  max-width: 40rem;
  font-size: 1.05rem;
  color: var(--ink-soft);
}

.cta-row {
  margin-top: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.6rem;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--navy), var(--navy-2));
  color: var(--white);
  box-shadow: var(--shadow);
}

.secondary-button {
  background: rgba(215, 183, 125, 0.16);
  color: var(--ink);
  border: 1px solid rgba(215, 183, 125, 0.18);
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.hero-notes {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--ink-soft);
  font-size: 0.94rem;
}

.hero-notes li::before {
  content: '•';
  color: var(--gold);
  margin-right: 8px;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  position: relative;
  width: min(100%, 540px);
  padding: 20px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(30, 46, 64, 0.05), rgba(30, 46, 64, 0.12));
  box-shadow: var(--shadow);
}

.visual-card img {
  border-radius: 24px;
  height: 620px;
  object-fit: cover;
}

.section {
  padding: 64px 0;
}

.alt-section {
  background: rgba(101, 130, 112, 0.08);
}

.section-heading {
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 3vw, 3rem);
}

.wide-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.wide-header p:last-child {
  max-width: 540px;
  color: var(--ink-soft);
}

.card-grid,
.feature-grid,
.news-grid,
.admin-grid,
.account-grid {
  display: grid;
  gap: 22px;
}

.card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.product-card {
  overflow: hidden;
  border-radius: 24px;
  background: var(--white);
  border: 1px solid var(--line);
  box-shadow: 0 18px 30px rgba(12, 18, 27, 0.04);
}

.product-image-wrap {
  position: relative;
}

.product-image-wrap img {
  height: 280px;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(17, 28, 44, 0.82);
  color: var(--white);
  border-radius: 999px;
  font-size: 0.7rem;
  padding: 0.5rem 0.75rem;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
}

.product-body {
  padding: 20px;
}

.card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--ink-soft);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
}

.product-body h3 {
  margin: 18px 0 8px;
  font-size: 1.5rem;
}

.product-body p {
  margin: 0 0 18px;
  color: var(--ink-soft);
  line-height: 1.7;
}

.price-row {
  margin-bottom: 16px;
  font-size: 0.8rem;
  letter-spacing: 0;
  text-transform: none;
}

.price-row strong {
  font-size: 1.1rem;
  color: var(--ink);
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 22px;
  align-items: center;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.news-card,
.account-box,
.admin-box,
.info-panel,
.contact-card,
.auth-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
}

.news-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.news-card span {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 0.78rem;
  color: var(--gold);
  letter-spacing: 0.14rem;
  text-transform: uppercase;
}

.news-card p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.7;
}

.subscribe-section {
  background: linear-gradient(135deg, rgba(17, 28, 44, 0.95), rgba(30, 46, 64, 0.8));
  color: var(--white);
}

.subscribe-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.subscribe-form {
  display: flex;
  gap: 12px;
  width: min(100%, 500px);
}

.subscribe-form input,
.form-stack input,
.form-stack textarea,
.promo-input {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.06);
  border-radius: 999px;
  padding: 0.9rem 1rem;
  color: var(--white);
}

.subscribe-form input::placeholder,
.form-stack input::placeholder,
.form-stack textarea::placeholder {
  color: rgba(255,255,255,0.7);
}

.page-section {
  padding: 72px 0;
}

.product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.product-main-image img {
  max-height: 600px;
  object-fit: cover;
  border-radius: 24px;
}

.product-info h1 {
  margin: 0 0 10px;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.7rem, 4vw, 4rem);
}

.pill-status {
  display: inline-flex;
  background: rgba(101, 130, 112, 0.12);
  color: var(--botanical);
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
}

.price-tag {
  margin: 18px 0;
  font-size: 1.9rem;
  font-weight: 700;
}

.buy-actions {
  margin: 20px 0 18px;
}

.disabled-button {
  opacity: 0.76;
  cursor: not-allowed;
}

.detail-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 10px;
  color: var(--ink-soft);
}

.product-panels {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.info-panel h3 {
  margin-top: 0;
}

.cart-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 26px;
}

.cart-list {
  display: grid;
  gap: 18px;
}

.cart-item {
  display: grid;
  grid-template-columns: 110px 1fr auto;
  gap: 16px;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 16px;
}

.cart-item img {
  height: 110px;
  object-fit: cover;
  border-radius: 16px;
}

.cart-item-copy h3 {
  margin: 0 0 8px;
}

.cart-item-copy p {
  margin: 0;
  color: var(--ink-soft);
}

.qty-control {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  border: 1px solid var(--line);
  padding: 8px 12px;
  border-radius: 999px;
}

.qty-control button {
  background: transparent;
  color: var(--ink);
  font-size: 1.2rem;
}

.summary-panel {
  background: var(--ivory);
  border-radius: 24px;
  padding: 24px;
  border: 1px solid var(--line);
  height: fit-content;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  color: var(--ink-soft);
}

.summary-row.total {
  font-weight: 800;
  color: var(--ink);
  border-top: 1px solid var(--line);
  padding-top: 12px;
}

.promo-input {
  color: var(--ink);
  background: var(--white);
  border: 1px solid var(--line);
  margin: 14px 0;
}

.note {
  font-size: 0.82rem;
  color: var(--ink-soft);
  line-height: 1.7;
}

.empty-state {
  padding: 30px;
  background: var(--white);
  border-radius: 24px;
  border: 1px solid var(--line);
}

.auth-box {
  display: flex;
  justify-content: center;
}

.auth-card {
  width: min(100%, 480px);
}

.form-stack {
  display: grid;
  gap: 14px;
}

.form-stack input,
.form-stack textarea {
  color: var(--ink);
  background: var(--ivory);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.9rem 1rem;
}

.form-stack textarea {
  resize: vertical;
  min-height: 130px;
  border-radius: 18px;
}

.auth-links {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  color: var(--ink-soft);
}

.account-grid,
.admin-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.admin-box ul {
  margin: 0;
  padding-left: 18px;
  color: var(--ink-soft);
  line-height: 1.9;
}

.contact-card {
  max-width: 700px;
  margin: 0 auto;
}

.legal-page {
  max-width: 760px;
  margin: 0 auto;
}

.site-footer {
  background: #101c2f;
  color: rgba(255,255,255,0.82);
  padding: 48px 0 32px;
  margin-top: 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 22px;
}

.site-footer h3,
.site-footer h4 {
  color: var(--white);
  margin-top: 0;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

@media (max-width: 1024px) {
  .card-grid,
  .feature-grid,
  .news-grid,
  .account-grid,
  .admin-grid,
  .product-panels,
  .cart-layout,
  .product-layout,
  .split-layout,
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .wide-header,
  .subscribe-box,
  .nav-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .desktop-nav {
    flex-wrap: wrap;
    gap: 12px 18px;
  }
}

@media (max-width: 640px) {
  .topbar {
    position: static;
  }

  .subscribe-form {
    flex-direction: column;
  }

  .cart-item {
    grid-template-columns: 1fr;
  }

  .brand-sub {
    letter-spacing: 0.12rem;
  }
}

