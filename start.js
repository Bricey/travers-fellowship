// const mongoose = require('mongoose');

const [major,minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('Please use Node v7.6 or higher to launch ');
  process.exit();
}

//require('dotenv').config({ path: 'variables.env' });

// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (err) => {
// 	console.log(`${err.message}`);
// });in

const app = require('./app');
app.set('port',process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running → PORT ${server.address().port}`);
});