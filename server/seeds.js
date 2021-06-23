const seeder = require('mongoose-seed');
const { defaultConfiguration } = require('./app');

// connect to mongo
const db = "mongodb+srv://kirstenkai:_4GE$W9exkUUS7-@amazonclone.j6jff.mongodb.net/AmazonClone?retryWrites=true&w=majority";

seeder.connect(db, function() {
  seeder.loadModels(['./models/User.js']);

  seeder.clearModels(['User'], function() {
    seeder.populateModels(userData, function() {
      seeder.disconnect();
    })
  });
})

const userData = [
  {
    'model': 'User',
    'documents': [
      {
        'firstName': 'Customer',
        'lastName': '1',
        'email': 'customer1@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '2',
        'email': 'customer2@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '3',
        'email': 'customer3@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '4',
        'email': 'customer4@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '5',
        'email': 'customer5@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '6',
        'email': 'customer6@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '7',
        'email': 'customer7@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '8',
        'email': 'customer8@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '9',
        'email': 'customer9@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '10',
        'email': 'customer10@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '11',
        'email': 'customer11@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '12',
        'email': 'customer12@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '13',
        'email': 'customer13@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '14',
        'email': 'customer14@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '15',
        'email': 'customer15@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '16',
        'email': 'customer16@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '17',
        'email': 'customer17@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '18',
        'email': 'customer18@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '19',
        'email': 'customer19@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '20',
        'email': 'customer20@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '21',
        'email': 'customer21@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '22',
        'email': 'customer220@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '23',
        'email': 'customer230@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '24',
        'email': 'customer240@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '25',
        'email': 'customer250@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '26',
        'email': 'customer260@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '27',
        'email': 'customer270@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '28',
        'email': 'customer280@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '29',
        'email': 'customer290@example.com',
        'password': 'password'
      },
      {
        'firstName': 'Customer',
        'lastName': '30',
        'email': 'customer300@example.com',
        'password': 'password'
      },
    ]
  }
]