# erbElektrik

Dieses Repository enthält ein kleines Starter‑Template für eine Webanwendung mit:

- Svelte (UI‑Framework)
- Vite (Dev Server & Build)
- Tailwind CSS (v4.1.14) über das offizielle PostCSS‑Plugin

Ziel: schneller Entwicklungs-Workflow mit HMR und einem einfachen Produktions‑Build.

Voraussetzungen

- Node.js v18+ (empfohlen: v20)
- npm

Schnellstart (PowerShell)

1) Abhängigkeiten installieren

```powershell
npm install
```

2) Dev-Server mit HMR starten

```powershell
npm run dev
```

Öffne danach `http://localhost:5173` im Browser.

3) Produktions-Build

```powershell
npm run build
```

4) Build lokal ansehen (Preview)

```powershell
npm run preview
```

Tailwind / CSS

- Tailwind ist in Version 4.1.14 installiert und wird über `postcss.config.cjs` mit `@tailwindcss/postcss` in den Vite‑Build integriert. Es ist keine separate Tailwind‑CLI mehr nötig.
- Die Tailwind‑Eingabedatei ist `src/styles/tailwind.css`.

CI

- Es gibt einen GitHub Actions Workflow unter `.github/workflows/ci.yml`, der bei Push/PR auf `main` `npm ci` und `npm run build` ausführt.

Projektstruktur (wichtigste Dateien)

- `index.html` – HTML‑Entry (bindet das Svelte‑App‑Mountpoint)
- `src/main.js` – Svelte Einstieg
- `src/App.svelte` – Beispielkomponente
- `src/styles/tailwind.css` – Tailwind Entry
- `tailwind.config.cjs` – Tailwind Konfiguration
- `postcss.config.cjs` – PostCSS Konfiguration
- `vite.config.mjs` – Vite Konfiguration

Fehlerbehebung / Hinweise

- Wenn der Dev-Server nicht startet: prüfe, ob Port 5173 frei ist oder starte mit `--host` für Netzwerkzugriff.
- Bei Problemen mit der Browserslist‑Warnung: `npx update-browserslist-db@latest` ausführen.

Weiteres

- Wenn du ein Deployment (GitHub Pages / Netlify / Vercel) möchtest, kann ich eine Actions‑ oder Deploy‑Konfiguration hinzufügen.

Viel Erfolg beim Entwickeln — sag Bescheid, wenn ich zusätzlich Deployment oder CI‑Erweiterungen anlegen soll.

