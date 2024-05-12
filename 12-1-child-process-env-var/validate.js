const { join } = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

(() => {
  const originalContent = 'Y29uc3QgeyBNWV9FTlZfVkFSIH0gPSBwcm9jZXNzLmVudjsKY29uc29sZS5sb2coYE1ZX0VOVl9WQVI6ICR7TVlfRU5WX1ZBUn1gKTs=';
  const newContent = 'Y29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7Cgpjb25zdCBjbGVhbiA9IChlbnYpID0+IE9iamVjdC5mcm9tRW50cmllcygKICBPYmplY3QuZW50cmllcyhlbnYpLmZpbHRlcigoW2tdKSA9PiAhL14oXy4qfHB3ZHxzaGx2bCkvaS50ZXN0KGspKSwKKTsKCmNvbnN0IGVudiA9IGNsZWFuKHByb2Nlc3MuZW52KTsKYXNzZXJ0LnN0cmljdEVxdWFsKGVudi5NWV9FTlZfVkFSLCAnaXMgc2V0Jyk7CmFzc2VydC5zdHJpY3RFcXVhbCgKICBPYmplY3Qua2V5cyhlbnYpLmxlbmd0aCwKICAxLAogICdDaGlsZCBwcm9jZXNzIDxzdHJvbmc+aGFydXMgbWVtaWxpa2kgc2F0dSBlbnZpcm9ubWVudCB2YXJpYWJsZSBzYWphPC9zdHJvbmc+IHlha25pIDxjb2RlPk1ZX0VOVl9WQVI8L2NvZGU+LiBTaW1hayBjYXJhIG1lbmV0YXBrYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgc2VjYXJhIHNwZXNpZmlrIHBhZGEgY2hpbGQgcHJvY2VzcyBtZWxhbHVpIG1hdGVyaTogPGEgaHJlZj0iaHR0cHM6Ly93d3cuZGljb2RpbmcuY29tL2FjYWRlbWllcy82MTAvdHV0b3JpYWxzLzM0NTU4Ij5Lb25maWd1cmFzaSBDaGlsZCBQcm9jZXNzPC9hPi4nLAopOwoKY29uc29sZS5sb2coJ3Bhc3NlZCEnKTsK';

  try {
    execSync('node -c app.js', { cwd: __dirname });

    fs.writeFileSync(join(
      __dirname,
      'run-me.js',
    ), Buffer.from(newContent, 'base64').toString());

    const testingContent = 'Y29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7Cgpjb25zdCB7IGVxdWFsIH0gPSBhc3NlcnQuc3RyaWN0Owpjb25zdCBleGVyY2lzZSA9IHJlcXVpcmUoJy4vYXBwJyk7CgpsZXQgc3AgPSBudWxsOwp0cnkgewogIHNwID0gZXhlcmNpc2UoJ2lzIHNldCcpOwogIGFzc2VydChzcCwgJ0Z1bmdzaSA8Y29kZT5tYWluPC9jb2RlPiBoYXJ1cyBtZW5nZW1iYWxpa2FuIGNoaWxkIHByb2Nlc3MuIEFuZGEgYmlzYSBtZW5nZ3VuYWthbiA8Y29kZT5zcGF3bjwvY29kZT4sIDxjb2RlPnNwYXduU3luYzwvY29kZT4sIDxjb2RlPmV4ZWM8L2NvZGU+LCBhdGF1IDxjb2RlPmV4ZWNTeW5jPC9jb2RlPi4gU2lsYWthbiBkaWNlayBsYWdpLCB5YSEnKTsKCiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzcCkpIHsKICAgIGVxdWFsKHNwLnRvU3RyaW5nKCkudHJpbSgpLCAncGFzc2VkIScsICdLb25maWd1cmFzaSBjaGlsZCBwcm9jZXNzIHlhbmcgZGlrZW1iYWxpa2FuIGZ1bmdzaSA8Y29kZT5tYWluPC9jb2RlPiBtYXNpaCBzYWxhaC4gTW9ob24gZGljZWsgbGFnaSwgeWEhJyk7CiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShzcCk7CiAgICBwcm9jZXNzLmV4aXQoMCk7CiAgfQp9IGNhdGNoIChlcnIpIHsKICBjb25zdCB7IHN0YXR1cyB9ID0gZXJyOwogIGFzc2VydC5ub3RFcXVhbChzdGF0dXMsIHVuZGVmaW5lZCwgJ0Z1bmdzaSA8Y29kZT5tYWluPC9jb2RlPiBoYXJ1cyBtZW5nZW1iYWxpa2FuIGNoaWxkIHByb2Nlc3MuIEFuZGEgYmlzYSBtZW5nZ3VuYWthbiA8Y29kZT5zcGF3bjwvY29kZT4sIDxjb2RlPnNwYXduU3luYzwvY29kZT4sIDxjb2RlPmV4ZWM8L2NvZGU+LCBhdGF1IDxjb2RlPmV4ZWNTeW5jPC9jb2RlPi4gU2lsYWthbiBkaWNlayBsYWdpLCB5YSEnKTsKICBlcXVhbChzdGF0dXMsIDAsICdTdGF0dXMgY29kZSB5YW5nIGRpaGFzaWxrYW4gY2hpbGQgcHJvY2VzcyBoYXJ1cyAwLiBDZWsgbGFnaSBwZXJpbnRhaCB5YW5nIGRpamFsYW5rYW4sIHlhLiBQYXN0aWthbiBBbmRhIG1lbmphbGFua2FuIGJlcmthcyA8Y29kZT5ydW4tbWUuanM8L2NvZGU+IGRlbmdhbiBiZW5hciBkZW5nYW4gY2hpbGQgcHJvY2Vzcy4nKTsKICBwcm9jZXNzLmV4aXQoMCk7Cn0KCmlmICghc3Aub24pIHsKICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBzcDsKICBpZiAoc3RkZXJyLmxlbmd0aCA+IDApIHByb2Nlc3Muc3RkZXJyLndyaXRlKHN0ZGVycik7CiAgaWYgKHN0ZG91dC5sZW5ndGggPiAwKSBwcm9jZXNzLnN0ZG91dC53cml0ZShzdGRvdXQpOwogIGVxdWFsKHNwLnN0YXR1cywgMCwgJ2V4aXQgY29kZSBzaG91bGQgYmUgMCcpOwogIGVxdWFsKHN0ZG91dC50b1N0cmluZygpLnRyaW0oKSwgJ3Bhc3NlZCEnLCAnS29uZmlndXJhc2kgY2hpbGQgcHJvY2VzcyB5YW5nIGRpa2VtYmFsaWthbiBmdW5nc2kgPGNvZGU+bWFpbjwvY29kZT4gbWFzaWggc2FsYWguIE1vaG9uIGRpY2VrIGxhZ2ksIHlhIScpOwogIHByb2Nlc3MuZXhpdCgwKTsKfQoKbGV0IG91dCA9ICcnOwppZiAoc3Auc3RkZXJyKSBzcC5zdGRlcnIucGlwZShwcm9jZXNzLnN0ZGVycik7CmlmIChzcC5zdGRvdXQpIHsKICBzcC5zdGRvdXQub25jZSgnZGF0YScsIChkYXRhKSA9PiB7IG91dCA9IGRhdGE7IH0pOwogIHNwLnN0ZG91dC5waXBlKHByb2Nlc3Muc3Rkb3V0KTsKfSBlbHNlIHsKICAvLyBzdGRpbyBtYXkgYmUgbWlzY29uZmlndXJlZCwgb3IgZm9yayBtZXRob2QgbWF5IGJlIHVzZWQsCiAgLy8gYWxsb3cgYmVuZWZpdCBvZiB0aGUgZG91YnQgc2luY2UgaW4gZWl0aGVyIGNhc2UKICAvLyBleGl0IGNvZGUgY2hlY2sgd2lsbCBzdGlsbCBmYWlsOgogIG91dCA9ICdwYXNzZWQhJzsKfQpjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7CiAgZXF1YWwob3V0LnRvU3RyaW5nKCkudHJpbSgpLCAncGFzc2VkIScsICdLb25maWd1cmFzaSBjaGlsZCBwcm9jZXNzIHlhbmcgZGlrZW1iYWxpa2FuIGZ1bmdzaSA8Y29kZT5tYWluPC9jb2RlPiBtYXNpaCBzYWxhaC4gTW9ob24gZGljZWsgbGFnaSwgeWEhJyk7Cn0sIDEwMDApOwoKc3Aub25jZSgnZXhpdCcsIChzdGF0dXMpID0+IHsKICB0cnkgewogICAgZXF1YWwoc3RhdHVzLCAwLCAnZXhpdCBjb2RlIHNob3VsZCBiZSAwJyk7CiAgICBlcXVhbChvdXQudG9TdHJpbmcoKS50cmltKCksICdwYXNzZWQhJywgJ0tvbmZpZ3VyYXNpIGNoaWxkIHByb2Nlc3MgeWFuZyBkaWtlbWJhbGlrYW4gZnVuZ3NpIDxjb2RlPm1haW48L2NvZGU+IG1hc2loIHNhbGFoLiBNb2hvbiBkaWNlayBsYWdpLCB5YSEnKTsKICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsKICB9IGNhdGNoIChlcnJvcikgewogICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTsKICAgIHByb2Nlc3MuZXhpdCgxKTsKICB9Cn0pOwo=';
    fs.writeFileSync(join(
      __dirname,
      'app.testing.js',
    ), Buffer.from(testingContent, 'base64').toString());

    execSync('node app.testing.js', { cwd: __dirname, stdio: 'pipe' });

    console.log('passed!');
  } catch (error) {
    const { stderr } = error;
    console.log(stderr.toString());
  } finally {
    fs.unlinkSync(join(__dirname, 'app.testing.js'));
    fs.writeFileSync(join(
      __dirname,
      'run-me.js',
    ), Buffer.from(originalContent, 'base64').toString());
  }
})()