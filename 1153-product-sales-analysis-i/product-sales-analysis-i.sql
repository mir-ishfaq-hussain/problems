# Write a solution to report the product_name, year, and price for each sale_id in the Sales table.

SELECT  Product.product_name, Sales.year,Sales.price FROM Product INNER JOIN Sales ON Product.product_id = Sales.product_id