const db = require('../connections/heroku_db.js');


const getUserInfo = () => {
  return db('users')
  .select('*')
  .orderBy('user_id')

}

const insertNewUserInfo = (info) => {
  return db('users')
  .insert(info)
  .returning('*')
}

const checkExistUser = (email) => {
  return db('users')
  .select('email','psw','user_name','user_id')
  .where({email:email})
}




const insertBudgets = (data) => {
  return db('budget')
  .insert(data)
  .returning('*')
}


const userIncomes = (info) => {
  return db('incomes')
  .insert(info)
  .returning('*')
}



const userOutcomes = (info) => {
  return db('outcomes')
  .insert(info)
  .returning('*')
}



// const outcomesAndIncomes = () => {
//   return db('users')
//     .select('*')
//     .from('users')
//     .join('incomes', 'users.user_id','=','incomes.user_id')
//     .join('outcomes', 'users.user_id','=','outcomes.user_id')
//
// }
// GET incomes and outcomes just for tasting:
const getAllIncomes = (id) => {
    return db('users')
    .select('users.user_id','users.user_name',
            'incomes.income_id','incomes.income_name',
            'incomes.income_amount','incomes.income_date',
            'incomes.user_id')
    .from('users')
    .join('incomes', 'users.user_id','=','incomes.user_id')
    .where({'users.user_id':id})
    .orderBy('incomes.income_date','asc')


}


const getAllOutcomes = (id) => {
    return db('users')
    .select('users.user_id','users.user_name',
            'outcomes.outcome_id','outcomes.outcome_type',
            'outcomes.outcome_subtype','outcomes.outcome_amount',
            'outcomes.user_id','outcomes.outcome_date')
    .from('users')
    .join('outcomes', 'users.user_id','=','outcomes.user_id')
    .where({'users.user_id':id})
    .orderBy('outcomes.outcome_date','asc')

}


const getUserBudget = (id) => {
  return db('budget')
  .select('*')
  .where({'budget.user_id':id})

}


module.exports = {
  getUserInfo,
  insertNewUserInfo,
  checkExistUser,
  insertBudgets,
  userIncomes,
  userOutcomes,
  getAllIncomes,
  getAllOutcomes,
  getUserBudget
}
