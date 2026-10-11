import './style.css';

// gemeinsame Datenstruktur für alle Faktenkarten
interface AnimalFact {
  title: string;
  category: 'Vorurteil' | 'Praxis';
  summary: string;
  detail: string;
}

// Faktenbasis für Suche, Kategorien und dynamische Karten
const facts: AnimalFact[] = [
  {
    title: 'Fotos können den Unterschied machen',
    category: 'Praxis',
    summary: 'Dunkles Fell braucht keinen Filter, sondern gutes Licht.',
    detail: 'Tageslicht und ein ruhiger Hintergrund machen Gesichtsausdruck und Augen besser sichtbar.'
  },
  {
    title: 'Fellfarbe ist kein Charaktertest',
    category: 'Vorurteil',
    summary: 'Schwarz sagt nichts über Temperament, Gesundheit oder Nähe aus.',
    detail: 'Jede Katze hat ihre eigene Geschichte. Verhalten zeigt sich im Kennenlernen, nicht in der Farbe.'
  },
  {
    title: 'Der erste Eindruck ist nicht alles',
    category: 'Vorurteil',
    summary: 'Ein kurzer Blick im Profil ersetzt kein persönliches Treffen.',
    detail: 'Wer länger verweilt und Fragen stellt, entdeckt oft genau die Eigenschaften, die im Bild fehlen.'
  },
  {
    title: 'Teilen schafft Sichtbarkeit',
    category: 'Praxis',
    summary: 'Ein geteiltes Vermittlungsprofil kann die richtige Person erreichen.',
    detail: 'Auch ohne selbst zu adoptieren, kannst du Tierheimen helfen, passende Interessierte zu finden.'
  }
];

// Verbindungen zu den Elementen, die durch TypeScript aktualisiert werden
const factGrid = document.querySelector<HTMLElement>('.fact-grid');
const searchInput = document.querySelector<HTMLInputElement>('#fact-search');
const resultStatus = document.querySelector<HTMLElement>('.results-status');
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-button');
let selectedCategory = 'Alle';

// Suche in Titel, Kurztext und Detailtext eines Fakts
function matchesSearch(fact: AnimalFact, query: string): boolean {
  const searchableText = `${fact.title} ${fact.summary} ${fact.detail}`.toLocaleLowerCase('de');
  return searchableText.includes(query.toLocaleLowerCase('de'));
}

// Darstellung der gefilterten Fakten und Aktualisierung des Ergebnistextes
function renderFacts(items: AnimalFact[]): void {
  if (!factGrid || !resultStatus) {
    return;
  }

  factGrid.innerHTML = items.map((fact) => `
    <article class="fact-card">
      <p class="card-category">${fact.category}</p>
      <h3>${fact.title}</h3>
      <p>${fact.summary}</p>
      <details>
        <summary>Mehr erfahren</summary>
        <p>${fact.detail}</p>
      </details>
    </article>
  `).join('');
  resultStatus.textContent = `${items.length} ${items.length === 1 ? 'Fakt' : 'Fakten'} angezeigt`;
}

// Kombination aus Suchbegriff und ausgewählter Kategorie
function filterFacts(query: string, category: string): AnimalFact[] {
  return facts.filter((fact) => {
    const categoryMatches = category === 'Alle' || fact.category === category;
    return categoryMatches && matchesSearch(fact, query);
  });
}

// aktueller Such- und Filterstand als neue Kartendarstellung
function updateFacts(): void {
  renderFacts(filterFacts(searchInput?.value ?? '', selectedCategory));
}

// Reaktion auf Eingaben und Kategorieauswahl
searchInput?.addEventListener('input', updateFacts);
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedCategory = button.dataset.filter ?? 'Alle';
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    updateFacts();
  });
});

// initiale Darstellung aller Fakten beim Laden der Seite
updateFacts();