let { categoriesSql } = require('./queries');
let connection = require('./db');
let { Category } = require('./domain');


let categories = [];
connection.query(categoriesSql, (error, cats, fields) => {
  if (error) {
    console.error('An error occurred while executing the categories query');
    throw error;
  }

  for (let idx in cats) {
    let category;
    let cat = cats[idx];
    if (categories[cat.category_id]) {
      category = categories[cat.category_id]
    } else {
      category = new Category({
        categoryId: cat.category_id,
        categoryName: cat.category_name,
        categoryOrder: cat.category_order
      });
      categories[cat.category_id] = category
    }
  }

});

module.exports = categories;
