# Lexífuga 🌪️

**Lexífuga** és una aplicació web ràpida i interactiva (una "centrífuga de paraules") que permet als usuaris trobar totes les paraules reals que es poden formar a partir d'un conjunt de lletres ingressat. Suporta diccionaris en **Espanyol** i **Català**.

[Léelo en Español](README.md)

## ✨ Característiques Principals

- **Dos modes de cerca:**
  - **Per longitud:** Troba paraules que utilitzin *qualsevol subconjunt* de les teves lletres. (Ex: amb "ROCA", troba "OCA", "CARO", etc.)
  - **Només Anagrames:** Troba paraules que utilitzin *exactament* totes les lletres ingressades. (Ex: amb "ROCA", troba "CARO" i "ARCO".)
- **Suport Bilingüe:** Funciona perfectament tant amb un diccionari espanyol ([`an-array-of-spanish-words`](https://github.com/words/an-array-of-spanish-words)) com català ([`an-array-of-catalan-words`](https://github.com/s-letter/an-array-of-catalan-words)).
- **Web Worker integrat:** Tot el processament feixuc i la cerca en el diccionari ocorre en segon pla mitjançant un Web Worker, per no congelar ni bloquejar la interfície d'usuari.
- **Disseny & Animacions:** Interfície gràfica molt polida (Glassmorphism) amb suport per a temes Clar i Fosc (☀️/🌙), completament responsiu i amb divertides animacions mentre calcula els resultats.
- **Estadístiques (Dada Curiosa):** Calcula mitjançant un algoritme recursiu (DFS) totes les permutacions matemàtiques possibles de les teves lletres i les compara amb les paraules reals trobades.

## 🛠️ Tecnologies

- HTML5, Vanilla JavaScript, CSS3
- Web Workers API per a processament en segon pla
- Bundler: [Vite](https://vitejs.dev/)

## 🚀 Instal·lació i Ús Local

1. **Clona aquest repositori:**
   ```bash
   git clone https://github.com/PabloGGuizar/lexifuga.git
   cd lexifuga
   ```

2. **Instal·la les dependències:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desenvolupament:**
   ```bash
   npm run dev
   ```

4. **Obre el teu navegador** a `http://localhost:5173` (o el port que indiqui la terminal).

## 🙏 Agraïments

Aquest projecte utilitza diccionaris basats en l'estructura del projecte original [an-array-of-english-words](https://github.com/words/an-array-of-english-words) de [Zeke Sikelianos](https://github.com/zeke), el qual va servir de base i inspiració per al format dels arrays de paraules de la resta d'idiomes.

## 📄 Llicència

Aquest projecte és de codi obert i està disponible sota la [Llicència MIT](LICENSE).

---
© 2026 Desenvolupat per [Pablo G. Guízar](https://www.linkedin.com/in/pablogguizar/)
