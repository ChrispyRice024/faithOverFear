// const express = require('express')
// const router = express.Router()

// const ctrlMongoTest = require('../controllers/mongo-test.js')

// router.post('/mongo-test', ctrlMongoTest.addTestData)
// router.get('/mongo-test', ctrlMongoTest.getTestData)

// module.exports = router

const express = require('express');
const router = express.Router();

const ctrlMongoTest = require('../controllers/mongo-test');

router.post('/mongo-test', ctrlMongoTest.addTestData);
router.get('/mongo-test', ctrlMongoTest.getTestData);

module.exports = router;