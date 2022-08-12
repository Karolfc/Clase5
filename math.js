function add(a, b) {
  return a + b;
}

// exports.add = add; // esto exporta un objeto con la key add
module.exports = add; // esto exporta la función directamente (Recomendada)

// si necesita exportar varias funciones, cree un objeto y exportelo
