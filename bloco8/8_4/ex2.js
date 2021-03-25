function allNames() {
  const names = books.reduce((result, item) => {
    return (result += item.author.name);
  }, '');

  return `Nomes: ${names}`;
}

assert.deepStrictEqual(
  allNames(),
  'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.'
);

// console.log(allNames());
