import { Routes, Route, NavLink, Link, useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

const premiumProducts = [
  {
    id: 'laurel-canela',
    name: 'Bálsamo de Laurel y Canela',
    category: 'Bálsamo corporal',
    status: 'Próximamente',
    price: 'Precio por confirmar',
    badge: 'En desarrollo',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Una formulación provisional inspirada en la esencia botánica del laurel y la canela, pensada como una experiencia sensorial de cuidado corporal.',
    description:
      'Bálsamo de inspiración botánica creado con una selección cuidadosa de ingredientes naturales y una textura cremosa que aporta una sensación de cuidado y bienestar. Esta ficha es provisional y está sujeta a revisión regulatoria antes de cualquier comercialización.',
    ingredients: ['Aceite de coco ecológico', 'Laurel de producción propia', 'Canela de Ceilán', 'Cera de abeja', 'Vitamina E'],
    format: 'Tarro 50 ml',
    instructions: 'Aplicar en pequeñas cantidades sobre la piel seca o ligeramente húmeda, masajeando con suavidad según el uso previsto en la formulación final.',
    warnings: 'Este producto está en fase de desarrollo. No se asumen propiedades terapéuticas ni resultados clínicos sin una validación técnica y regulatoria completa.',
    origin: 'Laurel seleccionado de nuestros cultivos y canela de Ceilán elegida por su aroma noble y su presencia aromática.',
    availability: 'En desarrollo',
    premium: true,
  },
  {
    id: 'calendula',
    name: 'Producto de Caléndula',
    category: 'Cuidado facial',
    status: 'Próximamente',
    price: 'Precio por confirmar',
    badge: 'Preparación',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Producto botánico orientado a la rutina de cuidado facial con un enfoque delicado y natural.',
    description:
      'Fórmula de inspiración herbal aún en desarrollo, diseñada para ofrecer una experiencia cuidadosa y estética en la rutina de cuidado personal. La composición final debe validarse antes de cualquier lanzamiento.',
    ingredients: ['Ingredientes provisionales en revisión', 'Extractos botánicos', 'Base cosmética adaptable'],
    format: 'Formato provisional',
    instructions: 'Uso indicado para la rutina facial en desarrollo. La aplicación final deberá validarse antes de su comercialización.',
    warnings: 'Sin presunción de propiedades terapéuticas ni resultados médicos asociados.',
    origin: 'Creado a partir de referencias botánicas elegidas para aportar naturalidad y una experiencia sensorial premium.',
    availability: 'Pendiente de validación',
    premium: false,
  },
  {
    id: 'romero',
    name: 'Producto de Romero',
    category: 'Cuidados corporales',
    status: 'Próximamente',
    price: 'Precio por confirmar',
    badge: 'Fase inicial',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Una propuesta botánica inspirada en la frescura del romero y la elegancia de la formulación cosmética.',
    description:
      'Producto en fase de desarrollo con un enfoque de cuidado natural y aromático. Su composición y disponibilidad deben confirmarse antes de la salida al mercado.',
    ingredients: ['Ingredientes provisionales', 'Extracto de romero', 'Base formulada para estudio'],
    format: 'Formato sin confirmar',
    instructions: 'Uso provisional a definir según la formulación final autorizada.',
    warnings: 'No se comercializa ni se promociona como producto final autorizado.',
    origin: 'Selección botánica orientada a la identidad natural de la marca.',
    availability: 'En estudio',
    premium: false,
  },
  {
    id: 'futuros-productos',
    name: 'Futuros productos de cosmética botánica',
    category: 'Próximos lanzamientos',
    status: 'Próximamente',
    price: 'Por anunciar',
    badge: 'Novedades',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    shortDescription:
      'Colección futura con nuevas referencias para fortalecer la identidad botánica y premium de la marca.',
    description:
      'Se preparan futuras referencias con un enfoque premium y natural para ampliar la propuesta cosmética. Los detalles definitivos se completarán según la validación del producto.',
    ingredients: ['Composición pendiente', 'Selección botanical en revisión', 'Materiales seguros y previstos'],
    format: 'Pendiente de definir',
    instructions: 'Información de uso pendiente de validación.',
    warnings: 'No disponible para compra. La fecha de lanzamiento aún no está confirmada.',
    origin: 'Colección en planificación según la evolución de la identidad de la marca.',
    availability: 'Futuros lanzamientos',
    premium: false,
  },
];

const promos = [
  'Descuentos y promociones por confirmar',
  'Cartas de bienvenida para clientes registrados',
  'Novedades y lanzamientos en preparación',
];

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/catalog', label: 'Tienda' },
  { to: '/#essence', label: 'Nuestra esencia' },
  { to: '/#ingredients', label: 'Ingredientes' },
  { to: '/contact', label: 'Contacto' },
];

function App() {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({ name: 'Cliente demo', email: 'cliente@demo.com' });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price === 'Precio por confirmar' ? 0 : Number(item.price) * item.quantity), 0);
  const shipping = cart.length ? 0 : 0;
  const total = subtotal + shipping;

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setCustomer({ name: 'Cliente demo', email: 'cliente@demo.com' });
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();
    setIsAdmin(true);
  };

  return (
    <div className="page-shell">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <main>
        <Routes>
          <Route path="/" element={<Home products={premiumProducts} addToCart={addToCart} />} />
          <Route path="/catalog" element={<Catalog products={premiumProducts} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} products={premiumProducts} />} />
          <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} subtotal={subtotal} shipping={shipping} total={total} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
          <Route path="/account" element={<AccountPage customer={customer} />} />
          <Route path="/admin" element={<AdminPage onAdminLogin={handleAdminLogin} isAdmin={isAdmin} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header({ cartCount, isLoggedIn, isAdmin }) {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link className="brand" to="/">
          <span className="brand-mark">ANKI</span>
          <span className="brand-sub">COSMÉTICA BEAUTY</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/account" className="text-link">{isLoggedIn ? 'Mi cuenta' : 'Iniciar sesión'}</Link>
          {isAdmin && <Link to="/admin" className="text-link">Admin</Link>}
          <Link to="/cart" className="cart-pill">Carrito ({cartCount})</Link>
        </div>
      </div>
    </header>
  );
}

function Home({ products, addToCart }) {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Casa de belleza botánica</p>
            <h1>Belleza natural, esencia propia.</h1>
            <p className="subhead">Cosmética botánica inspirada en la naturaleza.</p>
            <div className="cta-row">
              <Link to="/catalog" className="primary-button">Descubrir productos</Link>
            </div>
            <ul className="hero-notes">
              <li>Ingredientes de origen natural</li>
              <li>Estética premium</li>
              <li>Desarrollo regulatorio</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" alt="Producto cosmético premium" />
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Productos destacados</p>
          <h2>Selección provisional</h2>
        </div>
        <div className="card-grid">
          {featured.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="status-badge">{product.badge}</span>
              </div>
              <div className="product-body">
                <div className="card-row"><span>{product.category}</span><span>{product.status}</span></div>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <div className="card-row price-row"><strong>{product.price}</strong><Link to={`/product/${product.id}`}>Ver ficha</Link></div>
                <button onClick={() => addToCart(product)} className="secondary-button">Añadir al carrito</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt-section" id="essence">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Nuestra esencia</p>
            <h2>Cosmética pensada con naturaleza</h2>
          </div>
          <div>
            <p>
              ANKI COSMÉTICA BEAUTY nace para crear una identidad de belleza natural, sobria y premium. Nuestro enfoque se centra en la inspiración botánica, la atención al detalle y la evolución responsable de cada formulación.
            </p>
          </div>
        </div>
      </section>

      <section className="section container" id="ingredients">
        <div className="section-heading">
          <p className="eyebrow">Ingredientes</p>
          <h2>Selección cuidadosa</h2>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Botánica</h3>
            <p>Inspiración en plantas, hierbas y aromas elegantes con un tratamiento visual premium.</p>
          </div>
          <div className="feature-card">
            <h3>Calidad</h3>
            <p>Seleccionamos materias primas con atención a su origen y trazabilidad.</p>
          </div>
          <div className="feature-card">
            <h3>Regulación</h3>
            <p>Cada referencia se prepara con criterio técnico y revisión normativa antes de salir al mercado.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Novedades</p>
          <h2>Próximos lanzamientos</h2>
        </div>
        <div className="news-grid">
          {promos.map((item) => (
            <div key={item} className="news-card">
              <span>ANKI</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section subscribe-section">
        <div className="container subscribe-box">
          <div>
            <p className="eyebrow">Boletín</p>
            <h2>Recibe novedades</h2>
          </div>
          <form className="subscribe-form">
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit" className="primary-button">Suscribirme</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Catalog({ products, addToCart }) {
  return (
    <section className="container page-section">
      <div className="section-heading wide-header">
        <div>
          <p className="eyebrow">Tienda</p>
          <h2>Catálogo en desarrollo</h2>
        </div>
        <p>Los productos presentes en esta versión son ejemplos provisionales y están marcados como próximos lanzamientos.</p>
      </div>
      <div className="card-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-wrap">
              <img src={product.image} alt={product.name} />
              <span className="status-badge">{product.badge}</span>
            </div>
            <div className="product-body">
              <div className="card-row"><span>{product.category}</span><span>{product.status}</span></div>
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <div className="card-row price-row"><strong>{product.price}</strong><Link to={`/product/${product.id}`}>Ficha</Link></div>
              <button onClick={() => addToCart(product)} className="secondary-button">Añadir al carrito</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id) || products[0];

  return (
    <section className="container page-section product-page">
      <div className="product-layout">
        <div className="product-main-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <span className="pill-status">{product.status}</span>
          <p className="price-tag">{product.price}</p>
          <p>{product.description}</p>
          <div className="buy-actions">
            <button onClick={() => addToCart(product)} className="primary-button disabled-button" disabled>
              Compra no disponible
            </button>
          </div>
          <ul className="detail-list">
            <li><strong>Formato:</strong> {product.format}</li>
            <li><strong>Disponibilidad:</strong> {product.availability}</li>
            <li><strong>Ingredientes:</strong> {product.ingredients.join(', ')}</li>
          </ul>
        </div>
      </div>

      <div className="product-panels">
        <div className="info-panel">
          <h3>Origen y selección</h3>
          <p>{product.origin}</p>
        </div>
        <div className="info-panel">
          <h3>Modo de empleo</h3>
          <p>{product.instructions}</p>
        </div>
        <div className="info-panel">
          <h3>Advertencias y precauciones</h3>
          <p>{product.warnings}</p>
        </div>
      </div>
    </section>
  );
}

function CartPage({ cart, updateQuantity, subtotal, shipping, total }) {
  return (
    <section className="container page-section cart-page">
      <div className="section-heading">
        <p className="eyebrow">Carrito</p>
        <h2>Compra desactivada temporalmente</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <p>Tu carrito está vacío. Los pedidos reales se habilitarán cuando los productos estén listos para la comercialización.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-copy">
                  <h3>{item.name}</h3>
                  <p>{item.status}</p>
                </div>
                <div className="qty-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="summary-panel">
            <h3>Resumen</h3>
            <div className="summary-row"><span>Subtotal</span><span>{subtotal}€</span></div>
            <div className="summary-row"><span>Envío</span><span>{shipping}€</span></div>
            <div className="summary-row total"><span>Total</span><span>{total}€</span></div>
            <input type="text" placeholder="Cupón promocional" className="promo-input" />
            <button className="primary-button" disabled>Confirmar pedido</button>
            <p className="note">La confirmación de compra está bloqueada hasta la validación del producto y la habilitación comercial.</p>
          </aside>
        </div>
      )}
    </section>
  );
}

function LoginPage({ onLogin, isLoggedIn }) {
  return (
    <section className="container page-section auth-box">
      <div className="auth-card">
        <p className="eyebrow">Área de clientes</p>
        <h2>{isLoggedIn ? 'Sesión iniciada' : 'Iniciar sesión'}</h2>
        <form onSubmit={onLogin} className="form-stack">
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="primary-button">Entrar</button>
        </form>
        <div className="auth-links">
          <Link to="/">Recuperar contraseña</Link>
          <Link to="/">Registrarse</Link>
        </div>
      </div>
    </section>
  );
}

function AccountPage({ customer }) {
  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">Mi cuenta</p>
        <h2>Área personal</h2>
      </div>
      <div className="account-grid">
        <div className="account-box">
          <h3>Datos del cliente</h3>
          <p><strong>Nombre:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
        </div>
        <div className="account-box">
          <h3>Pedidos</h3>
          <p>No hay pedidos reales en esta demo.</p>
        </div>
        <div className="account-box">
          <h3>Direcciones</h3>
          <p>Se gestionarán desde la cuenta del cliente cuando se active la tienda.</p>
        </div>
      </div>
    </section>
  );
}

function AdminPage({ onAdminLogin, isAdmin }) {
  if (!isAdmin) {
    return (
      <section className="container page-section auth-box">
        <div className="auth-card">
          <p className="eyebrow">Panel privado</p>
          <h2>Acceso administrador</h2>
          <form onSubmit={onAdminLogin} className="form-stack">
            <input type="email" placeholder="Admin@ankicosmetica.com" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className="primary-button">Entrar</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="container page-section admin-page">
      <div className="section-heading">
        <p className="eyebrow">Administración</p>
        <h2>Panel de control</h2>
      </div>
      <div className="admin-grid">
        <div className="admin-box">
          <h3>Productos</h3>
          <ul>
            <li>Bálsamo de Laurel y Canela</li>
            <li>Producto de Caléndula</li>
            <li>Producto de Romero</li>
          </ul>
        </div>
        <div className="admin-box">
          <h3>Pedidos</h3>
          <p>Sin pedidos reales próximos a la comercialización.</p>
        </div>
        <div className="admin-box">
          <h3>Promociones</h3>
          <p>{promos[0]}</p>
        </div>
        <div className="admin-box">
          <h3>Estadísticas</h3>
          <p>Disponibles cuando existan ventas reales.</p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="container page-section contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contacto</p>
        <h2>Escríbenos</h2>
      </div>
      <div className="contact-card">
        <form className="form-stack">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea rows="5" placeholder="Mensaje" />
          <button type="button" className="primary-button">Enviar</button>
        </form>
      </div>
    </section>
  );
}

function LegalPage() {
  return (
    <section className="container page-section legal-page">
      <h2>Aviso legal</h2>
      <p>Esta web es una versión preliminar de ANKI COSMÉTICA BEAUTY y su contenido es de carácter informativo y de planificación. No se contemplan ventas reales ni información empresarial definitiva.</p>
    </section>
  );
}

function PrivacyPage() {
  return (
    <section className="container page-section legal-page">
      <h2>Política de privacidad</h2>
      <p>La protección de datos personales se implementará conforme a la normativa vigente cuando la tienda se abra al público. En esta fase la demo se usa únicamente con fines de diseño y validación.</p>
    </section>
  );
}

function CookiePage() {
  return (
    <section className="container page-section legal-page">
      <h2>Política de cookies</h2>
      <p>Se preparará la gestión de cookies para asegurar la trazabilidad y atención a la normativa de privacidad y consentimiento.</p>
    </section>
  );
}

function ConditionsPage() {
  return (
    <section className="container page-section legal-page">
      <h2>Condiciones de compra</h2>
      <p>Las condiciones definitivas aún no están activas. Las compras se mantienen bloqueadas hasta cumplirse la revisión de producto, etiquetado y requisitos regulatorios.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>ANKI COSMÉTICA BEAUTY</h3>
          <p>Cosmética botánica inspirada en la naturaleza.</p>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/legal">Aviso legal</Link></li>
            <li><Link to="/privacy">Privacidad</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
            <li><Link to="/conditions">Compra</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><Link to="/contact">Formulario</Link></li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default App;

