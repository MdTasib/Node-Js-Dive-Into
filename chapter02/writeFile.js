const fs = require('fs');

const test = {
  name: 'Tasib',
  age: 19,
  address: {
    city: 'Chittagong',
    country: 'Bangladesh'
  }
}

const data = JSON.stringify(test);

fs.writeFile('./test.json', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Write File Successfully');
  }
});