import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Особенности", href: "#features" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Загрузка", href: "#download" },
];

const FEATURES = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "До 10 Гбит/с на оптимизированных серверах. Никаких лагов при стриминге и играх.",
    accent: "#00f5a0",
  },
  {
    icon: "Shield",
    title: "Военное шифрование",
    desc: "Протокол AES-256 защищает каждый байт. Ваши данные — только ваши.",
    accent: "#00d9ff",
  },
  {
    icon: "Globe",
    title: "90+ стран",
    desc: "Серверы по всему миру. Выберите любую точку планеты в один клик.",
    accent: "#7c3aed",
  },
  {
    icon: "Eye",
    title: "Нулевые логи",
    desc: "Политика No-Log подтверждена независимым аудитом. Мы не храним историю.",
    accent: "#f59e0b",
  },
  {
    icon: "Smartphone",
    title: "Все устройства",
    desc: "Windows, macOS, iOS, Android, Linux — одна подписка для 10 устройств.",
    accent: "#ec4899",
  },
  {
    icon: "Activity",
    title: "Умная оптимизация",
    desc: "Алгоритм автоматически подбирает быстрейший сервер для вашей задачи.",
    accent: "#10b981",
  },
];

const PLANS = [
  {
    name: "Старт",
    price: "199",
    period: "мес",
    features: ["3 устройства", "50 стран", "100 Мбит/с", "Базовая защита"],
    popular: false,
    cta: "Начать",
  },
  {
    name: "Про",
    price: "399",
    period: "мес",
    features: ["10 устройств", "90+ стран", "1 Гбит/с", "AES-256", "Нулевые логи", "Приоритет поддержки"],
    popular: true,
    cta: "Выбрать Про",
  },
  {
    name: "Бизнес",
    price: "999",
    period: "мес",
    features: ["Безлимит устройств", "90+ стран", "10 Гбит/с", "Выделенный IP", "API доступ", "SLA 99.9%"],
    popular: false,
    cta: "Связаться",
  },
];

const PLATFORMS = [
  { name: "Windows", icon: "Monitor" },
  { name: "macOS", icon: "Laptop" },
  { name: "iOS", icon: "Smartphone" },
  { name: "Android", icon: "Tablet" },
  { name: "Linux", icon: "Terminal" },
];

const STATS = [
  { value: "10M+", label: "Пользователей" },
  { value: "90+", label: "Стран" },
  { value: "99.9%", label: "Аптайм" },
  { value: "0", label: "Логов" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="vpn-root">
      {/* Animated background */}
      <div className="vpn-bg">
        <div className="vpn-orb vpn-orb-1" />
        <div className="vpn-orb vpn-orb-2" />
        <div className="vpn-orb vpn-orb-3" />
        <div className="vpn-grid" />
      </div>

      {/* NAV */}
      <nav className={`vpn-nav ${scrolled ? "vpn-nav--scrolled" : ""}`}>
        <div className="vpn-container vpn-nav__inner">
          <a href="#" className="vpn-logo">
            <span className="vpn-logo__icon">⚡</span>
            <span className="vpn-logo__text">NordSwift</span>
          </a>
          <ul className="vpn-nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="vpn-nav__link">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="vpn-btn vpn-btn--sm">Попробовать</a>
          <button className="vpn-burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="vpn-mobile-menu">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="vpn-mobile-menu__link" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#pricing" className="vpn-btn vpn-btn--sm" style={{ marginTop: 8 }}>Попробовать</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="vpn-hero">
        <div className="vpn-container vpn-hero__inner">
          <div className="vpn-badge animate-fade-in">
            <span className="vpn-badge__dot" />
            10 миллионов пользователей доверяют NordSwift
          </div>
          <h1 className="vpn-hero__title animate-fade-in">
            Интернет без<br />
            <span className="vpn-gradient-text">границ и слежки</span>
          </h1>
          <p className="vpn-hero__subtitle animate-fade-in">
            Молниеносный VPN с оптимизированными серверами в 90+ странах.<br />
            Защита, скорость и свобода — в одном приложении.
          </p>
          <div className="vpn-hero__cta animate-fade-in">
            <a href="#pricing" className="vpn-btn vpn-btn--primary vpn-btn--lg">
              <Icon name="Zap" size={18} />
              Начать за 199 ₽/мес
            </a>
            <a href="#features" className="vpn-btn vpn-btn--ghost vpn-btn--lg">
              Узнать больше
              <Icon name="ChevronDown" size={18} />
            </a>
          </div>
          <div className="vpn-hero__stats animate-fade-in">
            {STATS.map((s) => (
              <div key={s.label} className="vpn-stat">
                <span className="vpn-stat__value">{s.value}</span>
                <span className="vpn-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Hero visual */}
        <div className="vpn-hero__globe">
          <div className="vpn-globe">
            <div className="vpn-globe__ring vpn-globe__ring-1" />
            <div className="vpn-globe__ring vpn-globe__ring-2" />
            <div className="vpn-globe__ring vpn-globe__ring-3" />
            <div className="vpn-globe__core">
              <Icon name="Globe" size={48} />
            </div>
            {["🇩🇪", "🇺🇸", "🇯🇵", "🇬🇧", "🇸🇬", "🇫🇷"].map((flag, i) => (
              <div key={i} className={`vpn-globe__node vpn-globe__node-${i + 1}`}>
                <span>{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="vpn-section">
        <div className="vpn-container">
          <div className="vpn-section__head">
            <span className="vpn-label">Особенности</span>
            <h2 className="vpn-section__title">Почему выбирают NordSwift</h2>
            <p className="vpn-section__sub">Технологии нового поколения для максимальной скорости и защиты</p>
          </div>
          <div className="vpn-features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="vpn-feature-card" style={{ "--accent": f.accent } as React.CSSProperties}>
                <div className="vpn-feature-card__icon">
                  <Icon name={f.icon} size={28} />
                </div>
                <h3 className="vpn-feature-card__title">{f.title}</h3>
                <p className="vpn-feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEED BANNER */}
      <section className="vpn-speed-banner">
        <div className="vpn-container vpn-speed-banner__inner">
          <div className="vpn-speed-banner__text">
            <h2>До <span className="vpn-gradient-text">10 Гбит/с</span></h2>
            <p>Оптимизированные серверы обеспечивают максимальную пропускную способность — без потерь пакетов и задержек.</p>
          </div>
          <div className="vpn-speedometer">
            <div className="vpn-speedometer__arc" />
            <div className="vpn-speedometer__value">
              <span>10</span>
              <span className="vpn-speedometer__unit">Гбит/с</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="vpn-section">
        <div className="vpn-container">
          <div className="vpn-section__head">
            <span className="vpn-label">Тарифы</span>
            <h2 className="vpn-section__title">Выберите свой план</h2>
            <p className="vpn-section__sub">30 дней бесплатно — без ввода карты</p>
          </div>
          <div className="vpn-pricing-grid">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`vpn-plan-card ${plan.popular ? "vpn-plan-card--popular" : ""}`}>
                {plan.popular && <div className="vpn-plan-card__badge">Популярный</div>}
                <div className="vpn-plan-card__name">{plan.name}</div>
                <div className="vpn-plan-card__price">
                  <span className="vpn-plan-card__currency">₽</span>
                  <span className="vpn-plan-card__amount">{plan.price}</span>
                  <span className="vpn-plan-card__period">/{plan.period}</span>
                </div>
                <ul className="vpn-plan-card__features">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <Icon name="Check" size={16} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`vpn-btn ${plan.popular ? "vpn-btn--primary" : "vpn-btn--outline"} vpn-btn--full`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="vpn-section">
        <div className="vpn-container">
          <div className="vpn-section__head">
            <span className="vpn-label">Загрузка</span>
            <h2 className="vpn-section__title">Доступен на всех платформах</h2>
            <p className="vpn-section__sub">Установите за 2 минуты и защититесь прямо сейчас</p>
          </div>
          <div className="vpn-platforms">
            {PLATFORMS.map((p) => (
              <button key={p.name} className="vpn-platform-btn">
                <Icon name={p.icon} size={32} />
                <span>{p.name}</span>
              </button>
            ))}
          </div>
          <div className="vpn-download-cta">
            <p>Один аккаунт — все устройства</p>
            <a href="#pricing" className="vpn-btn vpn-btn--primary vpn-btn--lg">
              <Icon name="Download" size={18} />
              Скачать бесплатно
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="vpn-footer">
        <div className="vpn-container vpn-footer__inner">
          <div className="vpn-logo">
            <span className="vpn-logo__icon">⚡</span>
            <span className="vpn-logo__text">NordSwift</span>
          </div>
          <div className="vpn-footer__links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
            <a href="#">Поддержка</a>
          </div>
          <p className="vpn-footer__copy">© 2026 NordSwift. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
