// Modulos built-in
import os from 'node:os';

const freemem = (os.totalmem() - os.freemem())
console.log(((os.totalmem()/1024)/1024)/1024)