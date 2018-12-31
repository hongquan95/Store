/**
 * @api {get} /api/v1/product?page=2&per_page=2 Get list products
 * @apiName Get list productt
 * @apiGroup Product
 * @apiVersion 0.1.0
 *
 * @apiParam {String} page=1|nullable Current page nullable
 * @apiParam {String} per_page=15|nullable Items perpage nullable
 *
 * @apiSuccessExample Success-Response:
 *     {
 *         "0": {
 *             "id": 3,
 *             "name": "Product 2",
 *             "price": 10000,
 *             "rating": 3,
 *             "description": "Culpa neque illo aut et quae.",
 *             "updated_at": "2018-12-20 16:31:38",
 *             "supplier": {
 *                 "id": 13,
 *                 "name": "Bà. Lư Nga",
 *                 "address": "07, Thôn Hồ, Xã 9, Huyện Ánh VươngSơn La",
 *                 "phone": "(84)(129)470-3660",
 *                 "email": "trinh.phuong@example.org",
 *                 "avatar": null
 *             }
 *         },
 *         "1": {
 *             "id": 4,
 *             "name": "Product 3",
 *             "price": 5000,
 *             "rating": 1,
 *             "description": "Saepe odit omnis velit velit.",
 *             "updated_at": "2018-12-20 16:31:38",
 *             "supplier": {
 *                 "id": 14,
 *                 "name": "Yên Khuyến Tiếp",
 *                 "address": "2, Thôn Trần, Phường Ông Minh Sơn, Huyện Dung AnGia Lai",
 *                 "phone": "0500 740 5292",
 *                 "email": "thuy71@example.com",
 *                 "avatar": null
 *             }
 *         },
 *         "meta": {
 *             "pagination": {
 *                 "total": 30,
 *                 "count": 2,
 *                 "per_page": 2,
 *                 "current_page": 2,
 *                 "total_pages": 15,
 *                 "links": {
 *                     "previous": "http: *topno1.test/api/v1/products?page=1",
 *                     "next": "http: *topno1.test/api/v1/products?page=3"
 *                 }
 *             }
 *         }
 *     }
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
  *          "id": 10,
  *          "name": "Product 9",
  *          "price": 9000,
  *          "rating": 3,
  *          "description": "Fugit impedit expedita natus culpa incidunt.",
  *          "updated_at": "2018-12-20 16:31:38",
  *          "supplier": {
  *              "id": 20,
  *              "name": "Tiêu Việt",
  *              "address": "3979 Phố Đan, Phường Thi, Quận Khương Hiên TrựcHồ Chí Minh",
  *              "phone": "033 397 5616",
  *              "email": "than.tam@example.net",
  *              "avatar": null
  *          }
  *      }
  *
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
