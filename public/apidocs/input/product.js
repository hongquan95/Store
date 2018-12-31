/**
 * @api {get} /api/v1/product?page=19&per_page=2 Get list products
 * @apiName Get list productt
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {String} page=1|nullable Current page nullable
 * @apiParam {String} per_page=15|nullable Items perpage nullable
 *
 * @apiSuccessExample Success-Response:
 *       {
 *           "0": {
 *               "id": 39,
 *               "name": "Product 34567812345",
 *               "price": 4000,
 *               "rating": 1,
 *               "description": "Good",
 *               "updated_at": "2018-12-31 17:08:09",
 *               "supplier": {
 *                   "id": 12,
 *                   "name": "Cụ. Phí Dũng Diệp",
 *                   "address": "3 Phố Tuyết, Phường 95, Quận Thào Nguyên ThúyĐà Nẵng",
 *                   "phone": "0231 240 9936",
 *                   "email": "qkhuu@example.org",
 *                   "avatar": null
 *               },
 *               "categories": [
 *                   {
 *                       "id": 2,
 *                       "name": "Category 1",
 *                       "description": null
 *                   },
 *                   {
 *                       "id": 6,
 *                       "name": "Category 114",
 *                       "description": null
 *                   }
 *               ]
 *           },
 *           "meta": {
 *               "pagination": {
 *                   "total": 37,
 *                   "count": 1,
 *                   "per_page": 2,
 *                   "current_page": 19,
 *                   "total_pages": 19,
 *                   "links": {
 *                       "previous": "http://topno1.test/api/v1/products?page=18"
 *                   }
 *               }
 *           }
 *       }
 */

  /**
  * @api {post} /api/v1/products Create product detail
  * @apiName Create Product
  * @apiGroup Product
  * @apiVersion 0.1.0
  *
  * @apiParam {String} name=required Name of product
  * @apiParam {Interger} price=required|min:0 Price of product
  * @apiParam {String} desciprtion=nullable Produce desciprtion
  * @apiParam {String} category_ids=required| Array list category id
  *
  * @apiParamExample {json} Request-Example:
  *      {
  *          "name": "Product 34567812345",
  *          "price": 4000,
  *          "rating": 4,
  *          "description": "Good",
  *          "category_ids": [2, 6]
  *      }
  *
  *
  * @apiParamExample {json} Request-Error-Example:
  *      {
  *          "name": "Product 34567812345",
  *          "price": 4000,
  *          "rating": 4,
  *          "description": "Good",
  *          "category_ids": [2, 6]
  *      }
  *
  * @apiSuccessExample Success-Response:
  *      {
  *          "id": 39,
  *          "name": "Product 34567812345",
  *          "price": 4000,
  *          "rating": null,
  *          "description": "Good",
  *          "updated_at": "2018-12-31 17:08:09",
  *          "supplier": {
  *              "id": 12,
  *              "name": "Cụ. Phí Dũng Diệp",
  *              "address": "3 Phố Tuyết, Phường 95, Quận Thào Nguyên ThúyĐà Nẵng",
  *              "phone": "0231 240 9936",
  *              "email": "qkhuu@example.org",
  *              "avatar": null
  *          },
  *          "categories": [
  *              {
  *                  "id": 2,
  *                  "name": "Category 1",
  *                  "description": null
  *              },
  *              {
  *                  "id": 6,
  *                  "name": "Category 114",
  *                  "description": null
  *              }
  *          ]
  *      }
  * @apiErrorExample Error-Response:
  *       {
  *         "errors": {
  *             "name": [
  *                 "The name has already been taken."
  *             ]
  *         }
  *     }
  */

 /**
  * @api {get} /api/v1/products/:id Get product detail
  * @apiName Get Product detail
  * @apiGroup Product
  * @apiVersion 0.1.0
  *
  * @apiSuccessExample Success-Response:
  *      {
  *          "id": 39,
  *          "name": "Product 34567812345",
  *          "price": 4000,
  *          "rating": 1,
  *          "description": "Good",
  *          "updated_at": "2018-12-31 17:08:09",
  *          "supplier": {
  *              "id": 12,
  *              "name": "Cụ. Phí Dũng Diệp",
  *              "address": "3 Phố Tuyết, Phường 95, Quận Thào Nguyên ThúyĐà Nẵng",
  *              "phone": "0231 240 9936",
  *              "email": "qkhuu@example.org",
  *              "avatar": null
  *          },
  *          "categories": [
  *              {
  *                  "id": 2,
  *                  "name": "Category 1",
  *                  "description": null
  *              },
  *              {
  *                  "id": 6,
  *                  "name": "Category 114",
  *                  "description": null
  *              }
  *          ]
  *      }
  * @apiErrorExample Error-Response:
  *    {
  *        "message": "Product not found!"
  *    }
  */

 /**
  * @api {put} /api/v1/products/:id Update product
  * @apiName Update Product detail
  * @apiGroup Product
  * @apiVersion 0.1.0
  *
  * @apiParam {String} name=required Name of product
  * @apiParam {Interger} price=required|min:0 Price of product
  * @apiParam {String} desciprtion=nullable Produce desciprtion
  *
  * @apiParamExample {json} Request-Example:
  *    {
  *        "name": "Product xxx11123",
  *        "price": "11",
  *        "rating": 4,
  *        "category_ids": [2,6],
  *        "description": "Good"
  *    }
  * @apiSuccessExample Success-Response:
  *      {
  *          "message": "Updated product successfully!"
  *      }
  *
  * @apiErrorExample Error-Response:
  *     {
  *         "errors": {
  *             "price": [
  *                 "The price must be a number."
  *             ]
  *         }
  *     }
  */

 /**
  * @api {delete} /api/v1/products/:id Remove product
  * @apiName Remove Product
  * @apiGroup Product
  * @apiVersion 0.1.0
  *
  * @apiSuccessExample Success-Response:
  *      {
  *          "message": "Remove product successfully!"
  *      }
  *
  * @apiErrorExample Error-Response:
    *      {
  *          "message": "Remove product fail!"
  *      }
  */
