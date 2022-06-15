const {
  getUserInfo,
  insertNewUserInfo,
  checkExistUser,
  insertBudgets,
  userIncomes,
  userOutcomes,
  getAllIncomes,
  getAllOutcomes,
  getUserBudget
} = require('../modules/user.js');


const _getUserInfo = (req, res) => {
    getUserInfo()
    .then(data => {
      console.log(data);
      res.json(data)
    })
    .catch(err => {
      res.json({msg:err.message})
    })
}

const _insertNewUserInfo = (req,res) => {
  insertNewUserInfo(req.body)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
    res.json({msg:err.message, user:'User already exist'})
  })

}

const _checkExistUser = (req,res) => {
  checkExistUser(req.body.email)
  .then(data => {
    if (data[0].psw === req.body.password) {
      res.json(data)
    } else {
      res.status('401').json({msg:'incorrect password'});
    }

  })

  .catch(err => {
    console.log(err);
    res.json({msg:err.message, notexist:'User not exist'})
  })
}


const _insertBudgets = (req,res) => {
  insertBudgets(req.body)

  .then(data => {
    if (req.body.goal_name !== '' && req.body.goal_amount !== '' && req.body.due_date !== '') {
      res.json(data)
    } else {
      res.status('401').json({missing:'Plese insert Goal,Amount and Due-date'});
    }

  })
  .catch(err => {
    console.log(err);
    res.json({msg:err.message})
  })
}



const _userIncomes = (req,res) => {
  userIncomes(req.body)
  .then(data => {
    console.log(data);
    res.json(data)
  })
  .catch(err => {
    res.json({msg:err.message})
  })
}



const _userOutcomes = (req,res) => {
  userOutcomes(req.body)
  .then(data => {
    console.log(data);
    res.json(data)
  })
  .catch(err => {
    res.json({msg:err.message})
  })
}


const _getAllIncomes = (req,res) => {
  getAllIncomes(req.params.id)
  .then(data => {
    console.log(data);
    res.json(data)
  })
  .catch(err => {
    res.json({msg:err.message})
  })
}


const _getAllOutcomes = (req,res) => {
  getAllOutcomes(req.params.id)
  .then(data => {
    console.log(data);
    res.json(data)
  })
  .catch(err => {
    res.json({msg:err.message})
  })
}


const _getUserBudget = (req,res) => {
  getUserBudget(req.params.id)
  .then(data => {
    console.log(data);
    res.json(data)
  })
  .catch(err => {
    res.json({msg:err.message})
  })
}


module.exports = {
  _getUserInfo,
  _insertNewUserInfo,
  _checkExistUser,
  _insertBudgets,
  _userIncomes,
  _userOutcomes,
  _getAllIncomes,
  _getAllOutcomes,
  _getUserBudget
}
