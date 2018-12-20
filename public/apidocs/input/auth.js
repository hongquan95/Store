/**
 * @api {post} /api/v1/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 0.1.0
 *
 * @apiParam {String} username=required Username of User.
 * @apiParam {String} password=required Password of User.
 * @apiParamExample Request-Example:
 *     {
 *       "username": "thuan.giap",
 *       "password": "secret",
 *     }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *           "result": {
 *               "api_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkM2YxNWQ1ODBkNDMzZmIxYjNiYWFiZTkzOThiYWIyYmNhOWM4OTQxYjE0YWZlY2I4NDdmMDgwNzQ1MGIxODE0Y2YwYTI1MmM4YmI0YTE5In0.eyJhdWQiOiIxIiwianRpIjoiMGQzZjE1ZDU4MGQ0MzNmYjFiM2JhYWJlOTM5OGJhYjJiY2E5Yzg5NDFiMTRhZmVjYjg0N2YwODA3NDUwYjE4MTRjZjBhMjUyYzhiYjRhMTkiLCJpYXQiOjE1NDUyODk4NTgsIm5iZiI6MTU0NTI4OTg1OCwiZXhwIjoxNTc2ODI1ODU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.WK1Epts3Bz9FfNa_ovQHlfFLyBgtc71DX2f7q1UmWbL0O3DKSsQuB7FGbNGCom4ecjstRr3AKxFauNY5r6QIyqfibgxZavtOpJu4K7e4BuQANH_0Kl8bBO95KDHLc6_akXuVH_M_iJbHbEmpQF1VV2wB1JIVo5xh9vH1KP9IZJzBaA94_oOMQTi02JwI_C57OFhmU9cem2ELnD8FN1xE6TW6Dsy2l5OksmD-SYsXhJsK2XX-TFt1fc6jJI5GMax5-7SoeFHO8R1VozDxO2wCv7ipOnxm_OmLfJS9w9gAvweLeJFm54R9a9pwma2O32KvJ5LCN9qNAJnpA-87IXyXjANpmn7WY0awVt3dsc41f21WwFVuQ8aIq7fMUSpZYtomcji2SWs3C0Od3THSHNYSi5fa7ssdkfa87FpOJQ53sHVXF7gAO_hBmZXNeEeal81wP5hAAZx8oXCvKA_eBJJPZVe91PRCL9IeHGzj-M50Pl1R-ULKBfF-SNV5R8826PD22M7wNSiJ_Rp7WRS0Nnny16t44cx6A2CTD4dMc36MfGLIym-8rJRAuZ5j7ZeX5fGWcQbj97RJD_bdFwGzo7TyzcHn0kiCxswk47qfR31yRHFyl0FqCfp0ZbOXWL5XijsIoTc2_vTMmBgDMW1mcaai4ovlqZcNDSxQzNLmE0cN1z8",
 *               "token_type": "Bearer"
 *           }
 *       }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "These credentials do not match our records."
 *     }
 */

 /**
 * @api {get} /api/v1/logout Logout
 * @apiName Logout
 * @apiGroup Auth
 * @apiVersion 0.1.0
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *           "message": "Logout account successfully"
 *       }
 */

 /**
 * @api {post} /api/v1/register Register Account
 * @apiName Register
 * @apiGroup Auth
 * @apiVersion 0.1.0
 *
 * @apiParam {String} username=required Username of Account.
 * @apiParam {String} password=required Password of Account.
 * @apiParam {String} loginable_type=required|in:customer,supplier.
 * @apiParam {String} address=required Address customer/supplier.
 * @apiParam {String} email=required Email customer/supplier.
 * @apiParam {String} phone=required Phone customer/supplier.
 * @apiParam {Int} gender=nullable Customer gender.
 * @apiParamExample Request-Example:
 *  {
 *     "username": "top2204",
 *     "password": "secret",
 *     "loginable_type": "supplier",
 *     "name": "Tran Hong Quan",
 *     "address": "Da Nang",
 *     "email": "hongquan95.tran@gmail.com",
 *     "phone": "0968457018",
 *     "gender": 1
 * }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *     "username": "top2204",
 *     "password": "secret",
 *     "loginable_type": "supplier",
 *     "name": "Tran Hong Quan",
 *     "address": "Da Nang",
 *     "email": "hongquan95.tran@gmail.com",
 *     "phone": "0968457018",
 *     "gender": 1
 * }
 *
 * @apiParamExample Request-Example: Username is existed:
 *  {
 *     "username": "top2204",
 *     "password": "secret",
 *     "loginable_type": "supplier",
 *     "name": "Tran Hong Quan",
 *     "address": "Da Nang",
 *     "email": "hongquan95.tran@gmail.com",
 *     "phone": "0968457018",
 *     "gender": 1
 * }
 *
 * @apiErrorExample Error-Response:
 *  {
 *     "errors": {
 *         "username": [
 *             "The username has already been taken."
 *         ]
 *     }
 * }
 */
