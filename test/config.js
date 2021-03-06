'use strict';

module.exports = process.env.CI ? {
  npmWeb: 'https://www.npmjs.com',
  npmRegistry: 'https://registry.npmjs.com',
  npmHttpRegistry: 'http://registry.npmjs.com',
} : {
  npmWeb: 'https://developer.aliyun.com/mirror/npm',
  npmRegistry: 'https://registry.npm.taobao.org',
  npmHttpRegistry: 'http://registry.npm.taobao.org',
};
