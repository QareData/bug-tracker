import { getBoardMetrics } from "../../core/state.js?v=20260403-user-scenario-2";

export function renderSummary(board, root) {
  const metrics = getBoardMetrics(board);

  root.innerHTML = `
    <div class="summary-grid">
      <article class="kpi-card tone-slate">
        <div class="kpi-card__head">
          <span class="kpi-card__icon" aria-hidden="true">📦</span>
          <span class="kpi-card__label">Cartes</span>
        </div>
        <strong class="kpi-card__value">${metrics.totalCards}</strong>
        <small class="kpi-card__hint">Périmètre QA</small>
      </article>
      <article class="kpi-card tone-green">
        <div class="kpi-card__head">
          <span class="kpi-card__icon" aria-hidden="true">✅</span>
          <span class="kpi-card__label">Validées</span>
        </div>
        <strong class="kpi-card__value">${metrics.doneCount}</strong>
        <small class="kpi-card__hint">Cartes closes</small>
      </article>
      <article class="kpi-card tone-amber">
        <div class="kpi-card__head">
          <span class="kpi-card__icon" aria-hidden="true">⏳</span>
          <span class="kpi-card__label">En cours</span>
        </div>
        <strong class="kpi-card__value">${metrics.progressCount}</strong>
        <small class="kpi-card__hint">Recette entamée</small>
      </article>
      <article class="kpi-card tone-red">
        <div class="kpi-card__head">
          <span class="kpi-card__icon" aria-hidden="true">❌</span>
          <span class="kpi-card__label">Bloquantes</span>
        </div>
        <strong class="kpi-card__value">${metrics.blockersCount}</strong>
        <small class="kpi-card__hint">Encore ouvertes</small>
      </article>
      <article class="kpi-card tone-blue">
        <div class="kpi-card__head">
          <span class="kpi-card__icon" aria-hidden="true">🎯</span>
          <span class="kpi-card__label">Score QA</span>
        </div>
        <strong class="kpi-card__value">${metrics.qaScore}%</strong>
        <small class="kpi-card__hint">Moyenne globale</small>
      </article>
    </div>
  `;
}
