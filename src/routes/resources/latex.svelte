<script context="module">
  export function load({ url }) {
    return {
      props: {
        path: url.pathname,
      },
    };
  }
</script>

<script>
  import Layout from "$lib/components/Layout.svelte";
  import HomeTitle from "$lib/components/HomeTitle.svelte";
  export let path;
</script>

<svelte:head>
  <title>LaTeX - Resources - Baran Kılıç</title>
  <meta
    name="description"
    content="Useful links. and resources about LaTeX, Beamer, Bibtex."
  />
</svelte:head>

<Layout {path}>
  <div class="mx-auto max-w-screen-md p-4 tracking-inter">
    <HomeTitle>LaTeX</HomeTitle>
    <div
      id="web-dev-tools"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
    >
      <section>
        <h2 class="text-2xl">LaTeX Tutorials</h2>
        <ul>
          <li>
            <a
              href="https://www.learnlatex.org/en/"
              target="_blank"
              rel="noopener noreferrer">Learn LaTeX</a
            >
          </li>
          <li>
            <a
              href="https://en.wikibooks.org/wiki/LaTeX"
              target="_blank"
              rel="noopener noreferrer">LaTeX Wikibook</a
            >
          </li>
          <li>
            <a
              href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes"
              target="_blank"
              rel="noopener noreferrer nofollow">Overleaf LaTeX Tutorial</a
            >
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-2xl">Fonts</h2>
        <ul>
          <li>
            <a
              href="https://tug.org/FontCatalogue/"
              target="_blank"
              rel="noopener noreferrer">The LaTeX Font Catalogue</a
            >
          </li>
          <li>
            <a
              href="https://ctan.org/tex-archive/fonts"
              target="_blank"
              rel="noopener noreferrer">CTAN Font</a
            >
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-2xl">Beamer</h2>
        <ul>
          <li>
            <a
              href="https://www.overleaf.com/learn/latex/Beamer_Presentations:_A_Tutorial_for_Beginners_(Part_1)%E2%80%94Getting_Started"
              target="_blank"
              rel="noopener noreferrer">Overleaf Beamer Tutorial</a
            >
          </li>
          <li>
            <a
              href="https://latex-beamer.com/"
              target="_blank"
              rel="noopener noreferrer">LaTeX-Beamer.com</a
            >
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-2xl">Cheatsheets</h2>
        <ul>
          <li>
            <a
              href="http://www.math.brown.edu/~jhs/ReferenceCards/LaTeXRefCard.v2.0.pdf"
              target="_blank"
              rel="noopener noreferrer">AMS-LaTeX Reference Card</a
            >
          </li>
          <li>
            <a
              href="http://tug.ctan.org/tex-archive/info/latexcheat/latexcheat/latexsheet.pdf"
              target="_blank"
              rel="noopener noreferrer">LaTeX</a
            >
          </li>
          <li>
            <a
              href="https://verbosus.com/bibtex-style-examples.html"
              target="_blank"
              rel="noopener noreferrer">Verbosus Bibtex Examples</a
            >
          </li>
          <li>
            <a
              href="https://www.bibtex.com/e/entry-types/"
              target="_blank"
              rel="noopener noreferrer">Bibtex.com Entry Types</a
            >
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-2xl">Tools</h2>
        <ul>
          <li>
            <a
              href="https://detexify.kirelabs.org/classify.html"
              target="_blank"
              rel="noopener noreferrer">LaTeX Symbol Recognizer</a
            >
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-2xl">Extensions</h2>
        <ul>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop"
              target="_blank"
              rel="noopener noreferrer">VSCode - LaTeX Workshop</a
            >
          </li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex"
              target="_blank"
              rel="noopener noreferrer">VSCode - LTeX - Grammar/Spell Checker</a
            >
          </li>
        </ul>
      </section>
    </div>
  </div>
</Layout>
