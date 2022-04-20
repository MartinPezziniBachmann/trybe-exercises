const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando uppercase, se fica tudo maiusculo', (done) => {
  uppercase('helLo', (result) => {
    try {
      expect(result).toBe('HELLO');
      done();
    } catch (error) {
      done(error);
    }
  });
});

test('Testando uppercase, se não fica tudo minusculo', (done) => {
  uppercase('helLo', (result) => {
    try {
      expect(result).not.toBe('hello');
      done();
    } catch (error) {
      done(error);
    }
  });
});