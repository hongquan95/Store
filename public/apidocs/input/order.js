/**
 * @api {post} /api/v1/orders Create a order
 * @apiName Create order
 * @apiGroup Order
 * @apiVersion 0.1.0
 *
 * @apiParam {array} params=required|array format {"id1" : quantity1, "id2": quantity2}
 *
 * @apiParamExample Success-Request:
 *       {
 *           "params": {"1":2, "3":3, "4":4}
 *       }
 * @apiSuccessExample Success-Response:
 *  "Create order successfully!"
 */

 /**
 * @api {get} /api/v1/orders/:id Get order detail
 * @apiName Get order detail
 * @apiGroup Order
 * @apiVersion 0.1.0
 *
 * @apiSuccessExample Success-Response:
 *       {
 *          "id": 7,
 *          "customer_id": 2,
 *          "created_at": "2019-01-09 17:03:41",
 *          "total": "61000",
 *          "status": 0,
 *          "products": [
 *              {
 *                  "id": 1,
 *                  "name": "Product 0",
 *                  "price": 9000,
 *                  "quantity": 2
 *              },
 *              {
 *                  "id": 3,
 *                  "name": "Product 2",
 *                  "price": 1000,
 *                  "quantity": 3
 *              },
 *              {
 *                  "id": 4,
 *                  "name": "Product 3",
 *                  "price": 10000,
 *                  "quantity": 4
 *              }
 *          ]
 *      }
 */

 /**
 * @api {get} /api/v1/orders/customer-order-list?per_page=4&page=2 Customer get list order
 * @apiName Customer get list order
 * @apiGroup Order
 * @apiVersion 0.1.0
 *
 * @apiSuccessExample Success-Response:
 *     {
 *        "0": {
 *            "id": 9,
 *            "customer_id": 2,
 *            "created_at": "2019-01-10 00:06:59",
 *            "status": 0,
 *            "products": [
 *                {
 *                    "id": 4,
 *                    "name": "Product 3",
 *                    "price": 10000,
 *                    "quantity": 4
 *                }
 *            ]
 *        },
 *        "meta": {
 *            "pagination": {
 *                "total": 5,
 *                "count": 1,
 *                "per_page": 4,
 *                "current_page": 2,
 *                "total_pages": 2,
 *                "links": {
 *                    "previous": "http://topno1.test/api/v1/orders/customer-order-list?page=1"
 *                }
 *            }
 *        }
 *    }
 */
