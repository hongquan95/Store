/**
 * @api {post} /api/v1/cart/detail Customer get cart detail
 * @apiName Get cart detail
 * @apiGroup Cart
 * @apiVersion 0.1.0
 *
 * @apiParam {array} params=required|array format {"id1": quantity1, "id2": quantity2}
 *
 * @apiParamExample Success-Request
 *
 *     {
 *	        "params": {"1":2, "2":3,"10":4}
 *
 *     }
 * @apiSuccessExample Success-Response:
 *       {
 *           "Chú. Ngụy Huynh": [
 *               {
 *                   "id": 1,
 *                   "name": "Product 0",
 *                   "price": 9000,
 *                   "supplier": {
 *                       "id": 11,
 *                       "name": "Chú. Ngụy Huynh",
 *                       "address": "8480 Phố Ung Quỳnh Tường, Ấp Vỹ Giác, Quận LýLạng Sơn",
 *                       "phone": "0169 046 8420",
 *                       "email": "vong.dong@example.com",
 *                       "avatar": null
 *                   }
 *               },
 *               {
 *                   "id": 2,
 *                   "name": "Product 1",
 *                   "price": 4000,
 *                   "supplier": {
 *                       "id": 11,
 *                       "name": "Chú. Ngụy Huynh",
 *                       "address": "8480 Phố Ung Quỳnh Tường, Ấp Vỹ Giác, Quận LýLạng Sơn",
 *                       "phone": "0169 046 8420",
 *                       "email": "vong.dong@example.com",
 *                       "avatar": null
 *                   }
 *               }
 *           ],
 *           "Sử Thu": [
 *               {
 *                   "id": 10,
 *                   "name": "Product 9",
 *                   "price": 8000,
 *                   "supplier": {
 *                       "id": 20,
 *                       "name": "Sử Thu",
 *                       "address": "288, Thôn Thiên Hiền, Xã Lưu, Huyện 75Khánh Hòa",
 *                       "phone": "0280 457 6047",
 *                       "email": "nthieu@example.com",
 *                       "avatar": null
 *                   }
 *               }
 *           ]
 *       }
 */
