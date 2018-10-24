import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.val());    
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   id: '3',
//   description: 'Credit cards',
//   note: '',
//   amount: 4500,
//   createdAt: 0
// });

// database.ref().set({
//     name: 'Erick Garcia',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'GDL',
//         country: 'MX'
//     }
// }).then(() => {
//     console.log('data is saved');

// }).catch((e) => {
//     console.log('something went wrong', e);
// });

//database.ref().set("this is my data");
//database.ref('age').set(29);
//database.ref('location/city').set('zapopan');

// database.ref('attributes').set({
//     height: 180,
//     weight: 82
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('the error', e);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('is single removed');
// }).catch((error) => {
//     console.log('Error', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('udated');
// }).catch(() => {
//     console.log('Error');
// });

// database.ref()
// .once('value')
// .then((snapshot) =>{
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log(e);
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {  
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 3500 * 2);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 3500 * 3);

// database
// .ref()
// .on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });
// setTimeout(() => {
//     database.ref('name').set('Martin');
// }, 3500);

// database.ref('notes').push({
//     title: 'note',
//     body: 'something'
// });