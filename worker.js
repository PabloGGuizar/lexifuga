import catalanWords from 'an-array-of-catalan-words';
import spanishWords from 'an-array-of-spanish-words';
// Function to remove accents (diacritics) from a string
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Function to get character frequencies
function getCharFrequencies(word) {
  const freqs = {};
  for (const char of word) {
    freqs[char] = (freqs[char] || 0) + 1;
  }
  return freqs;
}

// Function to check if target can be formed by source letters
function canFormWord(targetFreqs, sourceFreqs) {
  for (const char in targetFreqs) {
    if (!sourceFreqs[char] || sourceFreqs[char] < targetFreqs[char]) {
      return false;
    }
  }
  return true;
}

self.onmessage = function(e) {
  const { word, minLength, maxLength, lang } = e.data;
  const dictionary = lang === 'es' ? spanishWords : catalanWords;
  
  // Normalize the input word by removing accents and making it lowercase
  const sourceWord = removeAccents(word.toLowerCase());
  const sourceFreqs = getCharFrequencies(sourceWord);
  
  const resultsSet = new Set();
  
  // Calculate total possible permutations
  function countUniquePermutations(freqs, minLen, maxLen) {
    let totalCount = 0;
    
    function dfs(currentLength) {
      if (currentLength >= minLen && currentLength <= maxLen) {
        totalCount++;
      }
      if (currentLength === maxLen) {
        return;
      }
      
      for (const char in freqs) {
        if (freqs[char] > 0) {
          freqs[char]--;
          dfs(currentLength + 1);
          freqs[char]++;
        }
      }
    }
    
    dfs(0);
    return totalCount;
  }
  
  const totalPermutations = countUniquePermutations({...sourceFreqs}, minLength, maxLength);
  
  // Filter the dictionary
  for (let i = 0; i < dictionary.length; i++) {
    const originalDictWord = dictionary[i];
    
    // Ignore words that have non-alphabetical characters (e.g. spaces or hyphens)
    if (originalDictWord.indexOf(' ') !== -1 || originalDictWord.indexOf('-') !== -1) continue;

    // Normalize dictionary word for comparison
    const dictWord = removeAccents(originalDictWord.toLowerCase());
    
    // Exclude the exact original word from being returned as a result
    if (dictWord === sourceWord) continue;
    
    // Quick length checks
    if (dictWord.length < minLength || dictWord.length > maxLength) {
      continue;
    }
    
    const dictFreqs = getCharFrequencies(dictWord);
    
    if (canFormWord(dictFreqs, sourceFreqs)) {
      // Add the normalized word to avoid duplicates
      resultsSet.add(dictWord);
    }
  }
  
  const results = Array.from(resultsSet);
  
  // Sort by length descending, then alphabetically (already normalized)
  results.sort((a, b) => {
    if (b.length !== a.length) return b.length - a.length;
    return a.localeCompare(b);
  });
  
  self.postMessage({ results, totalPermutations });
};

