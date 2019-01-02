/**
 * @api {post} /api/v1/order Create a order
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
