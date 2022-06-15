
const express = require('express');
const {_getUserInfo,
  _insertNewUserInfo,
  _checkExistUser,
  _insertBudgets,
  _userIncomes,
  _userOutcomes,
  _getAllIncomes,
  _getAllOutcomes,
  _getUserBudget
} = require('../controlers/user.js');

const router = express.Router();


router.get('/user', _getUserInfo);
router.get('/getincomes/:id', _getAllIncomes);
router.get('/getoutcomes/:id', _getAllOutcomes);
router.get('/getbudget/:id', _getUserBudget);
router.post('/', _insertNewUserInfo);
router.post('/loginuser', _checkExistUser);
router.post('/starttosave', _insertBudgets);
router.post('/incomes', _userIncomes);
router.post('/outcomes', _userOutcomes);


module.exports = router


// http://localhost:5000/savings/starttosave
