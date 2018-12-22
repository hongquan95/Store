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
  *
  * @apiSuccessExample Success-Response:
  *     {
  *         "id": 32,
  *         "name": "Product 100012",
  *         "price": 4000,
  *         "rating": null,
  *         "description": "Good",
  *         "updated_at": "2018-12-22 16:44:21",
  *         "supplier": {
  *             "id": 11,
  *             "name": "Cụ. Cù Bảo Hải",
  *             "address": "48 Phố La, Phường Bành Thủy Hòa, Huyện HàHà Nội",
  *             "phone": "+84-59-673-7748",
  *             "email": "van.nhu@example.org",
  *             "avatar": null
  *         }
  *     }
  *
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
