let words = ["rope", "pore", "repo", "redrum", 'murder','listen', 'silent','endeavour'];

var groupAnagrams = function(words) {
  let hash = {}

  words.forEach(str => {
    let letters = str.split('').sort();

    hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
  })

  const keys = Object.keys(hash);
  const values = keys.map(function(v) {
    return hash[v];
  });
  return values;

};

console.log(groupAnagrams(words));
