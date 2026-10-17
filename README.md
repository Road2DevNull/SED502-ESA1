# Black Paws Austria

Eine kleine statische Informationsseite über den **Black-cat bias**: Schwarze Katzen
werden in Tierheimen und bei privaten Vermittlungen häufig übersehen oder mit
Vorurteilen betrachtet. Die Seite informiert, ordnet verbreitete Annahmen ein und
zeigt konkrete Möglichkeiten, Adoptionen fairer zu machen.

## Technische Entscheidungen

- Semantisches HTML mit `header`, `nav`, `main`, `section`, `article`, `aside`,
	`figure`, `figcaption` und `footer`.
- TypeScript steuert eine Live-Suche und filterbare Informationskarten.
- Eine `AnimalFact`-Schnittstelle beschreibt die Datenstruktur; `filter` und `map`
	werden für die dynamische Darstellung verwendet.
- Im Hero wird `Fraunces` als Serifenschrift nur für den Titel eingesetzt. Alle
	übrigen Überschriften und Texte verwenden die serifenlose `Source Sans 3`.
- Die große schwarze Pfote und die orangefarbene Trennlinie sind als zugängliches
	inline SVG umgesetzt und ersetzen dekorative CSS-Rahmen.
- GitHub Copilot in VS Code wurde mit dem Modell `GPT-5.6 Luna` unterstützend bei der
	Erstellung von `main.ts`, bei Formulierungen und bei der Fehlersuche eingesetzt.
	Anforderungen, Daten und Filterlogik wurden vorgegeben und der fertige Code wurde
	anschließend selbst geprüft.
- Vite bundelt die statische Webseite. `npm run build` prüft den TypeScript-Code.

## Lokal starten

```bash
npm install
npm run dev
```

Der Produktions-Build wird mit `npm run build` erstellt.

## Entwicklungsverlauf

Die Entwicklung wurde in nachvollziehbare Schritte aufgeteilt. Die Zeitstempel und
Commit-IDs stammen direkt aus Git:

| Zeitpunkt | Commit | Änderung |
|---|---|---|
| 11.10.2026, 13:23 | `0eb434d` | Projektgrundlage mit Vite und TypeScript eingerichtet |
| 11.10.2026, 14:32 | `46eca25` | Semantische HTML-Struktur erstellt |
| 11.10.2026, 16:01 | `bc32216` | Visuelles Design und responsives Layout gestaltet |
| 11.10.2026, 17:19 | `dc75e07` | TypeScript-Interaktion für den Faktenfilter ergänzt |
| 11.10.2026, 18:57 | `7060903` | Accessibility geprüft und Lighthouse-Nachweis erstellt |
| 12.10.2026, 16:10 | `fde94f7` | README mit Entwicklungsverlauf vervollständigt |
| 18.10.2026, 01:27 | `9b8045c` | Persönliche Reflexion als PDF ergänzt |

## Abgabe-Nachweise

- `lighthouse.png` dokumentiert das Accessibility-Audit mit 100/100 Punkten.
- `reflexion.pdf` enthält die persönliche Reflexion.

Repository: https://github.com/Road2DevNull/SED502-ESA1

Direkter Link zur Reflexion: https://github.com/Road2DevNull/SED502-ESA1/blob/master/reflexion.pdf
