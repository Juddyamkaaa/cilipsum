function permute(source, keys) {
  const result = [];
  
  function generatePermutations(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const next = current.concat(remaining[i]);
        const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
        generatePermutations(next, newRemaining);
      }
    }
  }

  generatePermutations([], source);
  
  return result.map((perm) => {
    const obj = {};
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = perm[i];
    }
    return obj;
  });
}
