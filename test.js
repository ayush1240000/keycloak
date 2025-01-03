const session = require('express-session');

const memoryStore = new session.MemoryStore();
console.log('MemoryStore initialized successfully:', memoryStore);
