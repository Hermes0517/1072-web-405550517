const Account = require('../models/account');

exports.getAll = (req, res, next) => {
  Account.fetchAll()
      .then(([rows]) => {
          console.log(JSON.stringify(rows));
        //   res.send(JSON.stringify(rows));

          res.render('account', {
              data: rows,
              title: 'Account',
          });
      })
      .catch(err => console.log(err));
};