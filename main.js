
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });
async function start(client) {
//   client.onMessage((message) => {
//     if (message.body === 'Hi' && message.isGroupMsg === false) {
//       client
//         .sendText(message.from, 'Welcome Venom 🕷')
//         .then((result) => {
//           console.log('Result: ', result); //return object success
//         })
//         .catch((erro) => {
//           console.error('Error when sending: ', erro); //return object error
//         });
//     }
//   });

await client.createGroup('GND Session', [
  "number@c.us",
  ]);
}
