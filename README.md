# Lexífuga 🌪️

**Lexífuga** es una aplicación web ràpida e interactiva (una "centrífuga de palabras") que permite a los usuarios encontrar todas las palabras reales que se pueden formar a partir de un conjunto de letras ingresado. Soporta diccionarios en **Español** y **Catalán**.

[Llegeix-ho en Català](README.ca.md)

## ✨ Características Principales

- **Dos modos de búsqueda:**
  - **Por longitud:** Encuentra palabras que usen *cualquier subconjunto* de tus letras. (Ej: con "ROCA", encuentra "OCA", "CARO", etc.)
  - **Solo Anagramas:** Encuentra palabras que usen *exactamente* todas las letras que ingresaste. (Ej: con "ROCA", encuentra "CARO" y "ARCO".)
- **Soporte Bilingüe:** Funciona perfectamente tanto con un diccionario español ([`an-array-of-spanish-words`](https://github.com/words/an-array-of-spanish-words)) como catalán ([`an-array-of-catalan-words`](https://github.com/s-letter/an-array-of-catalan-words)).
- **Web Worker integrado:** Todo el procesamiento pesado y la búsqueda en el diccionario ocurre en segundo plano mediante un Web Worker, para no congelar ni bloquear la interfaz del usuario.
- **Diseño & Animaciones:** Interfaz gráfica muy pulida (Glassmorphism) con soporte para temas Claro y Oscuro (☀️/🌙), completamente responsivo y con divertidas animaciones mientras calcula los resultados.
- **Estadísticas (Dato Curioso):** Calcula mediante un algoritmo recursivo (DFS) todas las permutaciones matemáticas posibles de tus letras y las compara con las palabras reales encontradas.

## 🛠️ Tecnologías

- HTML5, Vanilla JavaScript, CSS3
- Web Workers API para procesamiento en segundo plano
- Bundler: [Vite](https://vitejs.dev/)

## 🚀 Instalación y Uso Local

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/PabloGGuizar/lexifuga.git
   cd lexifuga
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:5173` (o el puerto que indique la terminal).

## 🙏 Agradecimientos

Este proyecto utiliza diccionarios basados en la estructura del proyecto original [an-array-of-english-words](https://github.com/words/an-array-of-english-words) de [Zeke Sikelianos](https://github.com/zeke), el cual sirvió de base e inspiración para el formato de los arreglos de palabras de otros idiomas.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---
© 2026 Desarrollado por [Pablo G. Guízar](https://www.linkedin.com/in/pablogguizar/)
