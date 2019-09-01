const Product = require('../models/products');

exports.getAll = (req, res, next) => {
  Product.fetchAll()
      .then(([rows]) => {
          console.log(JSON.stringify(rows));
        //   res.send(JSON.stringify(rows));

          res.render('products', {
              data: rows,
              title: 'DB Products',
          });
      })
      .catch(err => console.log(err));
};