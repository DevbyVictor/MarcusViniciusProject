const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Olá%20Marcus!%20Quero%20saber%20mais%20sobre%20a%20consultoria%20online.";

const plans = [
  {
    name: "Plano Mensal",
    duration: "1 mês",
    price: "R$ 280,00",
    installment: null,
    badge: null,
    featured: false,
    checkout:
      "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=120247&page=120246",
  },
  {
    name: "Plano Bimestral",
    duration: "2 meses",
    price: "R$ 500,00",
    installment: null,
    badge: "Mais escolhido",
    featured: true,
    checkout:
      "https://pages.mfitpersonal.com.br/index?acao=page&tipo=1&page=120246&isCheckout=true",
  },
  {
    name: "Plano Trimestral",
    duration: "3 meses",
    price: "R$ 720,00",
    installment: "ou 3x de R$ 240,00",
    badge: null,
    featured: false,
    checkout:
      "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=120248&page=120246",
  },
  {
    name: "Plano Semestral",
    duration: "6 meses",
    price: "R$ 1.300,00",
    installment: "ou 6x de R$ 216,67",
    badge: "Melhor custo-benefício",
    featured: false,
    checkout:
      "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=120249&page=120246",
  },
];

const benefits = [
  {
    icon: "🏋️",
    title: "Treino personalizado",
    text: "Plano 100% adaptado ao seu objetivo, rotina e nível de experiência.",
  },
  {
    icon: "📈",
    title: "Ajustes constantes",
    text: "Seu treino evolui com você, com ajustes de volume a cada 1 ou 2 semanas.",
  },
  {
    icon: "💬",
    title: "Suporte no WhatsApp",
    text: "Tire dúvidas, envie vídeos e receba orientações sempre que precisar.",
  },
  {
    icon: "📅",
    title: "Reavaliação periódica",
    text: "A cada 8 semanas, uma revisão completa para acompanhar seu progresso.",
  },
];

const steps = [
  {
    number: "01",
    title: "Avaliação",
    text: "Você responde uma anamnese completa com objetivo, rotina, experiência e restrições.",
  },
  {
    number: "02",
    title: "Plano personalizado",
    text: "Seu treino é estruturado dentro do app MFIT conforme sua realidade.",
  },
  {
    number: "03",
    title: "Acompanhamento",
    text: "Ajustes recorrentes, suporte no WhatsApp e correções de execução por vídeo.",
  },
  {
    number: "04",
    title: "Evolução",
    text: "Seu plano acompanha sua evolução para manter consistência e resultado.",
  },
];

const faqs = [
  {
    question: "O treino é genérico ou personalizado?",
    answer:
      "É 100% personalizado. Antes de começar, você responde uma anamnese com experiência, disponibilidade, restrições e objetivo. O treino é montado com base nessas informações.",
  },
  {
    question: "Como funciona o suporte no WhatsApp?",
    answer:
      "Você pode enviar dúvidas e vídeos de execução. O suporte é usado para orientar, corrigir movimentos e manter o treino alinhado com sua evolução.",
  },
  {
    question: "Inclui dieta ou acompanhamento nutricional?",
    answer:
      "Não. A consultoria é voltada ao treinamento físico. Para dieta e prescrição nutricional, procure um nutricionista.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "Escolha um plano, conclua a contratação e preencha a anamnese inicial. Depois disso, o treino será estruturado e liberado no app MFIT.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <header className="header shell">
          <a href="#inicio" className="brand" aria-label="MV Personal Trainer">
            <span className="brand-mark">MV</span>
            <span className="brand-copy">Personal Trainer</span>
          </a>

          <a className="ghost-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </header>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <span className="eyebrow">Consultoria online</span>
            <h1>
              Treino personalizado.
              <strong>Resultados reais.</strong>
            </h1>
            <p>
              Acompanhamento próximo, ajustes constantes e suporte direto para você
              evoluir com estratégia, segurança e consistência.
            </p>

            <div className="hero-points">
              <span>Treino 100% personalizado</span>
              <span>Ajustes frequentes</span>
              <span>Suporte no WhatsApp</span>
            </div>

            <a className="primary-button" href="#planos">
              Escolher meu plano
              <ArrowIcon />
            </a>

            <small>Pagamento seguro pela plataforma MFIT Personal.</small>
          </div>

          <div className="hero-visual" aria-label="Área reservada para foto do personal">
            <div className="orange-glow" />
            <div className="trainer-placeholder">
              <span>Adicione aqui uma foto profissional do Marcus</span>
            </div>
            <div className="credential-card">
              <span className="credential-icon">🏅</span>
              <div>
                <strong>Marcus Vinicius Ramos de Brito</strong>
                <small>CREF: 177246-G/SP</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits section">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Acompanhamento completo</span>
            <h2>
              Tudo o que você precisa para <strong>evoluir</strong>
            </h2>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="feature-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section dark-section">
        <div className="shell">
          <div className="section-heading centered light">
            <span className="eyebrow">Passo a passo</span>
            <h2>
              Como <strong>funciona</strong>
            </h2>
            <p>Um processo simples, eficiente e focado em resultado.</p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results section">
        <div className="shell results-grid">
          <div className="results-copy">
            <span className="eyebrow">Resultados reais</span>
            <h2>
              Pessoas reais.
              <strong>Transformações reais.</strong>
            </h2>
            <p>
              Cada corpo tem seu processo. O objetivo aqui é construir um plano que
              respeite sua realidade e aumente suas chances de alcançar um resultado
              sustentável.
            </p>

            <div className="stats">
              <div><strong>5 anos</strong><span>de experiência</span></div>
              <div><strong>100%</strong><span>personalizado</span></div>
              <div><strong>8 semanas</strong><span>por reavaliação</span></div>
            </div>
          </div>

          <div className="transformations">
            {[1, 2, 3].map((item) => (
              <article className="transformation-card" key={item}>
                <div className="photo-pair">
                  <div>Antes</div>
                  <div>Depois</div>
                </div>
                <strong>Resultado de aluno</strong>
                <span>Substitua pelas fotos autorizadas</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section dark-section" id="planos">
        <div className="shell">
          <div className="section-heading centered light">
            <span className="eyebrow">Planos</span>
            <h2>
              Escolha o plano <strong>ideal para você</strong>
            </h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.badge && <span className="plan-badge">{plan.badge}</span>}
                <span className="plan-duration">{plan.duration}</span>
                <h3>{plan.name}</h3>
                <strong className="price">{plan.price}</strong>
                {plan.installment && <span className="installment">{plan.installment}</span>}

                <ul>
                  <li><CheckIcon /> Treino personalizado no app MFIT</li>
                  <li><CheckIcon /> Ajustes de volume a cada 1 ou 2 semanas</li>
                  <li><CheckIcon /> Suporte via WhatsApp</li>
                  <li><CheckIcon /> Correção de execução por vídeo</li>
                  <li><CheckIcon /> Reavaliação a cada 8 semanas</li>
                </ul>

                <a
                  className={plan.featured ? "primary-button" : "outline-button"}
                  href={plan.checkout}
                >
                  Escolher plano
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <p className="secure-note">🔒 Pagamento seguro via plataforma MFIT Personal</p>
        </div>
      </section>

      <section className="faq section">
        <div className="shell narrow">
          <div className="section-heading centered">
            <span className="eyebrow">Tire suas dúvidas</span>
            <h2>
              Perguntas <strong>frequentes</strong>
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="about section dark-section">
        <div className="shell about-grid">
          <div className="about-photo">
            <span>Foto do Marcus</span>
          </div>

          <div className="about-copy">
            <span className="eyebrow">Sobre mim</span>
            <h2>Treino inteligente, sem achismo e sem modinha.</h2>
            <p>
              Me chamo Marcus Vinicius, tenho 26 anos e sou formado em Educação
              Física. Trabalho como personal trainer há 5 anos, atendendo
              presencialmente e online.
            </p>
            <p>
              Cada aluno recebe um plano construído para sua realidade, e não uma
              planilha genérica copiada da internet. Se você busca resultado de
              verdade, estamos alinhados.
            </p>
          </div>

          <aside className="contact-card">
            <span className="eyebrow">Vamos começar?</span>
            <h3>Fale comigo e tire suas dúvidas.</h3>
            <a className="primary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar no WhatsApp
              <ArrowIcon />
            </a>
            <small>marcus21.vrb@gmail.com</small>
            <small>CREF: 177246-G/SP</small>
          </aside>
        </div>
      </section>

      <footer>
        <div className="shell footer-content">
          <span>© 2026 MV Personal Trainer</span>
          <span>
            A responsabilidade de venda e entrega dos treinos é do Personal Trainer.
          </span>
        </div>
      </footer>
    </main>
  );
}