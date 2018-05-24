import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD4X6MOb3IpvPxyaYiCjDSpHMu8kur-aqQ",
  authDomain: "expensify-b55e7.firebaseapp.com",
  databaseURL: "https://expensify-b55e7.firebaseio.com",
  projectId: "expensify-b55e7",
  storageBucket: "expensify-b55e7.appspot.com",
  messagingSenderId: "174151486954"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes/-LDFq8kyu7mOTRp8BfAz').remove();

database.ref('notes').push({
  title: 'Course Topics',
  body: 'React Native, Python, Angular'
});

const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

setTimeout(() => {
  database.ref().update({
    'job/title': 'CEO',
    'job/company': 'Amazon'
  });
}, 5000);

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data: ' + e);
  });

database.ref().set({
  name: 'Eric Bolatkhan',
  age: 28,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Los Angeles',
    country: 'US'
  }
}).then((() => {
  console.log('Data is saved');
})).catch((e) => {
  console.log('This failed. ', e)
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

database.ref().remove().then(() => {
  console.log('Success. The attribute is removed.');
}).catch((e) => {
  console.log('Fail. The attribute is not removed.')
});

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

expenses.map((expense) => {
  database.ref('expenses').push({
    description: expense.description,
    note: expense.note,
    amount: expense.amount,
    createdAt: expense.createdAt
  })
});
