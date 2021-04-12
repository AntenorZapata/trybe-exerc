const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

it('uppercasa', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});
