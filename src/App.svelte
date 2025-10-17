<script>
  import { inview } from './lib/actions/inview'

  const sections = [
    { title: 'Einführung', text: 'Dies ist ein Beispielabschnitt mit Dummy-Inhalten. Er demonstriert die Scroll-Animation.' },
    { title: 'Funktionen', text: 'Hier beschreiben wir mögliche Funktionen deiner Web-App. Nutze diesen Bereich als Platzhalter.' },
    { title: 'Galerie', text: 'Visuelle Inhalte, Screenshots oder Medien können hier präsentiert werden. Nutze Tailwind für das Styling.' },
    { title: 'Kontakt', text: 'Kontaktinformationen oder CTA-Buttons könnten hier platziert werden.' }
  ]
</script>

<main class="bg-white text-gray-900">
  <header class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-extrabold">erbElektrik – Svelte Template</h1>
      <p class="mt-4 text-lg opacity-90">Starter mit Vite, Svelte und Tailwind (Scroll‑In Animationen)</p>
    </div>
  </header>

  <section class="space-y-20 max-w-4xl mx-auto px-6 py-16">
    <div class="stagger">
    {#each sections as s, i}
      <article use:inview={{ once: true }} data-delay={`${i * 80}ms`} class="not-in-view transition-fade bg-white rounded-lg p-8 shadow">
        <h2 class="text-2xl font-bold mb-2">{s.title}</h2>
        <p class="text-gray-700">{s.text}</p>
      </article>
    {/each}
    </div>
  </section>
</main>

<style>
  /* Kleine Ergänzung: erhöhe Übergangszeit für .transition-fade falls benötigt */
</style>
