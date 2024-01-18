/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/zenburn.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.esm.js';

const plugins = [RevealHighlight, RevealZoom];

const dependencies = [
  {
    src: 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js',
    async: true,
  },
  {
   src: 'https://reveal-multiplex.glitch.me/client.js',
   async: true,
 },
];

if (window?.MULTIPLEX_SECRET) {
  dependencies.push({
    src: 'https://reveal-multiplex.glitch.me/master.js',
    async: true,
  });
  plugins.push(RevealNotes);
}

const deck = new Reveal({
  plugins,
});

deck.initialize({
  hash: true,
  multiplex: {
    secret: window?.MULTIPLEX_SECRET ?? null,
    id: '6f8e318f27331f05',
    url: 'https://reveal-multiplex.glitch.me/',
  },
  dependencies,
});

// multiplex _really_ wants to have the Reveal object in the global scope
window.Reveal = deck;
