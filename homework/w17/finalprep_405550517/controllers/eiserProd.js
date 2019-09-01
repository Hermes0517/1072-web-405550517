const EiserProd = require('../models/eiserProd');

exports.getFeatured = (req, res, next) => {
  EiserProd.fetchFeatured()
      .then(([rows]) => {
          console.log(JSON.stringify(rows));
        //   res.send(JSON.stringify(rows));

          res.render('featuredProd', {
              data: rows,
              title: 'Feature Products',
          });
      })
      .catch(err => console.log(err));
};