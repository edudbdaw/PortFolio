/**
 * Eduardo Duran — Recruiter & Developer Compatibility Quiz Module
 */

import { getLanguage } from './i18n.js';

let currentQuestion = 0;
let userAnswers = [];

const quizData = {
  en: [
    {
      q: "Do you need a developer who writes clean, maintainable Laravel & PHP code instead of temporary duct-tape patches?",
      yesLabel: "Yes, absolutely",
      noLabel: "No, we like chaos",
      yesReply: "Great choice! Clean architecture and maintainable code from day 1.",
      noReply: "Careful with those Friday 5 PM deploys..."
    },
    {
      q: "Do your projects require solid database design (PostgreSQL/MySQL) and Docker without production panic?",
      yesLabel: "Definitely",
      noLabel: "We prefer praying before deploys",
      yesReply: "Smart. Production-grade stability matters.",
      noReply: "Bold strategy! Hope your backups are fresh."
    },
    {
      q: "Do you value proven experience with international research (Aarhus Univ) & government projects (La Palma)?",
      yesLabel: "Yes, high value!",
      noLabel: "No, we seek people who confuse Git with Word",
      yesReply: "Awesome! Real project impact is what counts.",
      noReply: "Mmmm... suspicious candidate standards!"
    },
    {
      q: "Are you looking for a proactive Higher Technician (DAW) ready to deliver results from day 1?",
      yesLabel: "Exactly what we need",
      noLabel: "No, we prefer 3-month onboarding",
      yesReply: "Perfect fit! Self-driven learning and fast execution guaranteed.",
      noReply: "Time is money, but to each their own!"
    }
  ],
  es: [
    {
      q: "¿Buscas a un desarrollador que escriba código Laravel y PHP limpio en lugar de parches pegados con cinta aislante?",
      yesLabel: "Sí, por supuesto",
      noLabel: "No, preferimos el caos",
      yesReply: "¡Buena elección! Arquitectura limpia y código mantenible desde el primer día.",
      noReply: "Cuidado con los deploys de los viernes a las 17:00..."
    },
    {
      q: "¿Tus proyectos requieren bases de datos sólidas (PostgreSQL/MySQL) y Docker sin dramas en producción?",
      yesLabel: "Definitivamente",
      noLabel: "Preferimos rezar antes de desplegar",
      yesReply: "Inteligente. La estabilidad en producción es lo primero.",
      noReply: "¡Estrategia arriesgada! Esperemos que los backups estén al día."
    },
    {
      q: "¿Valoras la experiencia demostrada en investigación internacional (Univ. Aarhus) y administración pública (La Palma)?",
      yesLabel: "Sí, ¡mucho!",
      noLabel: "No, buscamos a quien confunda Git con Word",
      yesReply: "¡Genial! El impacto real en proyectos es lo que cuenta.",
      noReply: "Mmmm... unos estándares de selección algo sospechosos."
    },
    {
      q: "¿Buscas a un Técnico Superior DAW proactivo listo para aportar valor desde el primer día?",
      yesLabel: "Justo lo que necesitamos",
      noLabel: "No, preferimos 3 meses de adaptación",
      yesReply: "¡Encaje perfecto! Aprendizaje autónomo y ejecución rápida garantizados.",
      noReply: "El tiempo es oro, pero cada uno a su ritmo..."
    }
  ]
};

export function initCompatibilityQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  currentQuestion = 0;
  userAnswers = [];
  renderQuizStep();
}

function renderQuizStep() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  const lang = getLanguage();
  const questions = quizData[lang] || quizData.en;

  if (currentQuestion >= questions.length) {
    renderQuizResults(container, lang, questions);
    return;
  }

  const item = questions[currentQuestion];
  const progressPercent = Math.round((currentQuestion / questions.length) * 100);

  container.innerHTML = `
    <div class="quiz-card glass-card reveal visible">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span class="badge badge-emerald">${lang === 'es' ? 'Test de Compatibilidad' : 'Compatibility Quiz'}</span>
        <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
          ${lang === 'es' ? 'Pregunta' : 'Question'} ${currentQuestion + 1} / ${questions.length}
        </span>
      </div>

      <!-- Progress bar -->
      <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; margin-bottom: 20px; overflow: hidden;">
        <div style="width: ${progressPercent}%; height: 100%; background: #4ade80; transition: width 0.3s ease;"></div>
      </div>

      <h3 style="font-size: 1.15rem; font-weight: 600; color: #fff; margin-bottom: 20px; line-height: 1.5;">
        ${item.q}
      </h3>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button id="quizYesBtn" class="btn btn-primary" style="flex: 1; min-width: 160px;">
          ${item.yesLabel}
        </button>
        <button id="quizNoBtn" class="btn btn-secondary" style="flex: 1; min-width: 160px;">
          ${item.noLabel}
        </button>
      </div>

      <div id="quizFeedback" style="margin-top: 16px; font-size: 0.85rem; color: var(--text-secondary); min-height: 24px; font-style: italic;"></div>
    </div>
  `;

  document.getElementById('quizYesBtn').addEventListener('click', () => handleAnswer(true, item.yesReply));
  document.getElementById('quizNoBtn').addEventListener('click', () => handleAnswer(false, item.noReply));
}

function handleAnswer(isYes, feedback) {
  userAnswers.push(isYes);
  const feedbackEl = document.getElementById('quizFeedback');
  if (feedbackEl) {
    feedbackEl.textContent = feedback;
    feedbackEl.style.color = isYes ? '#4ade80' : '#f43f5e';
  }

  setTimeout(() => {
    currentQuestion++;
    renderQuizStep();
  }, 900);
}

function renderQuizResults(container, lang, questions) {
  const yesCount = userAnswers.filter(Boolean).length;
  const scorePercent = Math.round((yesCount / questions.length) * 100);

  let title = '';
  let desc = '';
  let badgeColor = '';

  if (scorePercent === 100) {
    badgeColor = 'badge-emerald';
    title = lang === 'es' ? '100% Compatibilidad — ¡Encaje Perfecto!' : '100% Match — Perfect Fit Detected!';
    desc = lang === 'es' 
      ? 'Buscas a un desarrollador proactivo (Técnico Superior DAW) que escribe software limpio y estable. Eduardo es ideal para tu equipo.' 
      : 'You are looking for a proactive DAW developer who delivers clean, reliable software. Eduardo is ready for your team!';
  } else if (scorePercent >= 50) {
    badgeColor = 'badge-amber';
    title = lang === 'es' ? `${scorePercent}% Compatibilidad — Gran Alineación` : `${scorePercent}% Match — Great Alignment`;
    desc = lang === 'es'
      ? 'Coincidimos en la gran mayoría de puntos clave. Revisemos los detalles de tu proyecto.'
      : 'We match on key requirements. Let\'s discuss your project details!';
  } else {
    badgeColor = 'badge';
    title = lang === 'es' ? `${scorePercent}% Compatibilidad — Zona de Riesgo 😉` : `${scorePercent}% Match — Danger Zone 😉`;
    desc = lang === 'es'
      ? 'Parece que te gustan los deploys caóticos de los viernes... Pero si alguna vez decides apostar por código limpio y fiable, ¡mi contacto está disponible!'
      : 'It seems you enjoy broken Friday builds... But if you ever decide to switch to reliable engineering, Eduardo\'s email is ready!';
  }

  container.innerHTML = `
    <div class="quiz-card glass-card reveal visible" style="text-align: center; padding: 36px 24px;">
      <span class="badge ${badgeColor}" style="margin-bottom: 12px; font-size: 0.8rem;">
        ${scorePercent}% ${lang === 'es' ? 'Puntuación de Compatibilidad' : 'Compatibility Score'}
      </span>
      <h3 style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 12px;">
        ${title}
      </h3>
      <p style="font-size: 0.92rem; color: var(--text-secondary); max-width: 520px; margin: 0 auto 24px auto; line-height: 1.6;">
        ${desc}
      </p>

      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <a href="#contact" class="btn btn-primary">
          ${lang === 'es' ? 'Contactar con Eduardo' : 'Get in Touch with Eduardo'}
        </a>
        <button id="restartQuizBtn" class="btn btn-secondary">
          ${lang === 'es' ? 'Repetir Test' : 'Retake Quiz'}
        </button>
      </div>
    </div>
  `;

  document.getElementById('restartQuizBtn').addEventListener('click', () => {
    currentQuestion = 0;
    userAnswers = [];
    renderQuizStep();
  });
}
