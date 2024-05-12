const { join } = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

(() => {
  try {
    execSync('node -c app.js', { cwd: __dirname });

    const utilsJSOriginalCode = 'LyoqCiAqIEhpbmRhcmkgbWVuZ3ViYWgga29kZSBkaSBiYXdhaCBpbmkga2FyZW5hIGFrYW4gbWVtcGVuZ2FydWhpIHByb3NlcyBwZW5pbGFpYW4uCiAqLwoKY29uc3QgeyBSZWFkYWJsZSwgV3JpdGFibGUgfSA9IHJlcXVpcmUoJ3N0cmVhbScpOwoKZnVuY3Rpb24gY3JlYXRlUmVhZGFibGUoZGF0YSA9IFtdKSB7CiAgcmV0dXJuIFJlYWRhYmxlLmZyb20oZGF0YSk7Cn0KCmZ1bmN0aW9uIGNyZWF0ZVdyaXRhYmxlKCkgewogIGNvbnN0IHNpbmsgPSBbXTsKICBjb25zdCB3cml0YWJsZSA9IG5ldyBXcml0YWJsZSh7CiAgICBkZWNvZGVTdHJpbmdzOiBmYWxzZSwKICAgIHdyaXRlKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHsKICAgICAgc2luay5wdXNoKGNodW5rKTsKICAgICAgY2FsbGJhY2soKTsKICAgIH0sCiAgfSk7CgogIHdyaXRhYmxlLnNpbmsgPSBzaW5rOwogIHdyaXRhYmxlLm9uKCdwaXBlJywgKCkgPT4geyB3cml0YWJsZS5waXBlZCA9IHRydWU7IH0pOwoKICByZXR1cm4gd3JpdGFibGU7Cn0KCm1vZHVsZS5leHBvcnRzID0gewogIGNyZWF0ZVJlYWRhYmxlLAogIGNyZWF0ZVdyaXRhYmxlLAp9Owo=';
    fs.writeFileSync(join(__dirname, 'utils.js'), Buffer.from(utilsJSOriginalCode, 'base64').toString('utf-8'));

    const originalUserCode = fs.readFileSync(join(__dirname, 'app.js'), 'utf-8');
    const additionalCodeToTest = 'Ci8vIGtvZGUgdGVzdApjb25zdCBfYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jykuc3RyaWN0Owpjb25zdCB7UmVhZGFibGU6IF9SZWFkYWJsZSwgV3JpdGFibGU6IF9Xcml0YWJsZX0gPSByZXF1aXJlKCdzdHJlYW0nKTsKCnRyeSB7CiAgX2Fzc2VydC5vayhyZWFkYWJsZSBpbnN0YW5jZW9mIF9SZWFkYWJsZSwgJ2ByZWFkYWJsZWAgaGFydXMgbWVydXBha2FuIGluc3RhbmNlIGRhcmkgYFJlYWRhYmxlYC4gUGFzdGlrYW4gQW5kYSBtZW5nZ3VuYWthbiBmdW5nc2kgYGNyZWF0ZVJlYWRhYmxlYCBkYWxhbSBtZW1idWF0IGByZWFkYWJsZWAuJyk7CiAgX2Fzc2VydC5vayh3cml0YWJsZSBpbnN0YW5jZW9mIF9Xcml0YWJsZSwgJ2B3cml0YWJsZWAgaGFydXMgbWVydXBha2FuIGluc3RhbmNlIGRhcmkgYFdyaXRhYmxlYC4gUGFzdGlrYW4gQW5kYSBtZW5nZ3VuYWthbiBmdW5nc2kgYGNyZWF0ZVdyaXRhYmxlYCBkYWxhbSBtZW1idWF0IGB3cml0YWJsZWAuJyk7CgogIHNldEltbWVkaWF0ZSgoKSA9PiB7CiAgICB0cnkgewogICAgICBfYXNzZXJ0Lm9rKHdyaXRhYmxlLnBpcGVkLCAnYHdyaXRhYmxlYCBoYXJ1cyBzdWRhaCBkaS1waXBlIGRhcmkgYHJlYWRhYmxlYC4gU2ltYWsgY2FyYSBtZWxha3VrYW4gcGlwaW5nIHBhZGEgbWF0ZXJpOiAiaHR0cHM6Ly93d3cuZGljb2RpbmcuY29tL2FjYWRlbWllcy82MTAvdHV0b3JpYWxzLzMzOTEzIi4nKTsKICAgICAgX2Fzc2VydC5kZWVwU3RyaWN0RXF1YWwod3JpdGFibGUuc2luaywgYWxwaGFiZXQsICdgd3JpdGFibGUuc2lua2AgaGFydXMgYmVyaXNpIGFscGhhYmV0LiBQYXN0aWthbiBBbmRhIG1lbmdndW5ha2FuIGZ1bmdzaSBgY3JlYXRlV3JpdGFibGVgIGRhbGFtIG1lbWJ1YXQgYHdyaXRhYmxlYC4nKTsKICAgIH0gY2F0Y2ggKGVycm9yKSB7CiAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQXNzZXJ0aW9uRXJyb3InKSB7CiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTsKICAgICAgICBwcm9jZXNzLmV4aXQoMSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgY29uc29sZS5lcnJvcihgS2FtaSBnYWdhbCBtZW5ndWppIGtvZGUgeWFuZyBrYW11IHR1bGlzLiBCZXJpa3V0IGVycm9yIHlhbmcgZGloYXNpbGthbjogJHtlcnJvci5tZXNzYWdlfSBTaW1hayBlcnJvciB0ZXJzZWJ1dCBkYW4gcGFzdGlrYW4ga2FtdSBzdWRhaCBtZW51bGlza2FuIGtvZGUgZGVuZ2FuIGJlbmFyLCB5YSFgKTsKICAgICAgICBwcm9jZXNzLmV4aXQoMSk7CiAgICAgIH0KICAgIH0KICB9KTsKfSBjYXRjaCAoZXJyb3IpIHsKICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fzc2VydGlvbkVycm9yJykgewogICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTsKICAgIHByb2Nlc3MuZXhpdCgxKTsKICB9IGVsc2UgewogICAgY29uc29sZS5lcnJvcihgS2FtaSBnYWdhbCBtZW5ndWppIGtvZGUgeWFuZyBrYW11IHR1bGlzLiBCZXJpa3V0IGVycm9yIHlhbmcgZGloYXNpbGthbjogJHtlcnJvci5tZXNzYWdlfSBTaW1hayBlcnJvciB0ZXJzZWJ1dCBkYW4gcGFzdGlrYW4ga2FtdSBzdWRhaCBtZW51bGlza2FuIGtvZGUgZGVuZ2FuIGJlbmFyLCB5YSFgKTsKICAgIHByb2Nlc3MuZXhpdCgxKTsKICB9Cn0K';
    const appJSTestCode = originalUserCode + Buffer.from(additionalCodeToTest, 'base64').toString('utf-8');

    fs.writeFileSync(join(__dirname, 'app.testing.js'), appJSTestCode);

    // run the test
    execSync('node app.testing.js', { cwd: __dirname, stdio: 'pipe' });

    console.log('passed!');
  } catch (error) {
    const { stderr } = error
    console.log(stderr.toString());
  } finally {
    fs.unlinkSync(join(__dirname, 'app.testing.js'));
  }
})();