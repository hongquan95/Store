define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "defaultValue": "required",
            "description": "<p>Username of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "required",
            "description": "<p>Password of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": \"thuan.giap\",\n  \"password\": \"secret\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"result\": {\n          \"api_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkM2YxNWQ1ODBkNDMzZmIxYjNiYWFiZTkzOThiYWIyYmNhOWM4OTQxYjE0YWZlY2I4NDdmMDgwNzQ1MGIxODE0Y2YwYTI1MmM4YmI0YTE5In0.eyJhdWQiOiIxIiwianRpIjoiMGQzZjE1ZDU4MGQ0MzNmYjFiM2JhYWJlOTM5OGJhYjJiY2E5Yzg5NDFiMTRhZmVjYjg0N2YwODA3NDUwYjE4MTRjZjBhMjUyYzhiYjRhMTkiLCJpYXQiOjE1NDUyODk4NTgsIm5iZiI6MTU0NTI4OTg1OCwiZXhwIjoxNTc2ODI1ODU4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.WK1Epts3Bz9FfNa_ovQHlfFLyBgtc71DX2f7q1UmWbL0O3DKSsQuB7FGbNGCom4ecjstRr3AKxFauNY5r6QIyqfibgxZavtOpJu4K7e4BuQANH_0Kl8bBO95KDHLc6_akXuVH_M_iJbHbEmpQF1VV2wB1JIVo5xh9vH1KP9IZJzBaA94_oOMQTi02JwI_C57OFhmU9cem2ELnD8FN1xE6TW6Dsy2l5OksmD-SYsXhJsK2XX-TFt1fc6jJI5GMax5-7SoeFHO8R1VozDxO2wCv7ipOnxm_OmLfJS9w9gAvweLeJFm54R9a9pwma2O32KvJ5LCN9qNAJnpA-87IXyXjANpmn7WY0awVt3dsc41f21WwFVuQ8aIq7fMUSpZYtomcji2SWs3C0Od3THSHNYSi5fa7ssdkfa87FpOJQ53sHVXF7gAO_hBmZXNeEeal81wP5hAAZx8oXCvKA_eBJJPZVe91PRCL9IeHGzj-M50Pl1R-ULKBfF-SNV5R8826PD22M7wNSiJ_Rp7WRS0Nnny16t44cx6A2CTD4dMc36MfGLIym-8rJRAuZ5j7ZeX5fGWcQbj97RJD_bdFwGzo7TyzcHn0kiCxswk47qfR31yRHFyl0FqCfp0ZbOXWL5XijsIoTc2_vTMmBgDMW1mcaai4ovlqZcNDSxQzNLmE0cN1z8\",\n          \"token_type\": \"Bearer\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"These credentials do not match our records.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/v1/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Auth",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"message\": \"Logout account successfully\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./input/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/register",
    "title": "Register Account",
    "name": "Register",
    "group": "Auth",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "defaultValue": "required",
            "description": "<p>Username of Account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "required",
            "description": "<p>Password of Account.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loginable_type",
            "defaultValue": "required|in:customer,supplier.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "defaultValue": "required",
            "description": "<p>Address customer/supplier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "defaultValue": "required",
            "description": "<p>Email customer/supplier.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "defaultValue": "required",
            "description": "<p>Phone customer/supplier.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "gender",
            "defaultValue": "nullable",
            "description": "<p>Customer gender.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n    \"username\": \"top2204\",\n    \"password\": \"secret\",\n    \"loginable_type\": \"supplier\",\n    \"name\": \"Tran Hong Quan\",\n    \"address\": \"Da Nang\",\n    \"email\": \"hongquan95.tran@gmail.com\",\n    \"phone\": \"0968457018\",\n    \"gender\": 1\n}",
          "type": "json"
        },
        {
          "title": "Request-Example: Username is existed:",
          "content": " {\n    \"username\": \"top2204\",\n    \"password\": \"secret\",\n    \"loginable_type\": \"supplier\",\n    \"name\": \"Tran Hong Quan\",\n    \"address\": \"Da Nang\",\n    \"email\": \"hongquan95.tran@gmail.com\",\n    \"phone\": \"0968457018\",\n    \"gender\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"username\": \"top2204\",\n    \"password\": \"secret\",\n    \"loginable_type\": \"supplier\",\n    \"name\": \"Tran Hong Quan\",\n    \"address\": \"Da Nang\",\n    \"email\": \"hongquan95.tran@gmail.com\",\n    \"phone\": \"0968457018\",\n    \"gender\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " {\n    \"errors\": {\n        \"username\": [\n            \"The username has already been taken.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/detail",
    "title": "Customer get cart detail",
    "name": "Get_cart_detail",
    "group": "Cart",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "params",
            "defaultValue": "required|array",
            "description": "<p>format {&quot;id1&quot;: quantity1, &quot;id2&quot;: quantity2}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Request",
          "content": "\n    {\n\t        \"params\": {\"1\":2, \"2\":3,\"10\":4}\n\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Chú. Ngụy Huynh\": [\n        {\n            \"id\": 1,\n            \"name\": \"Product 0\",\n            \"price\": 9000,\n            \"supplier\": {\n                \"id\": 11,\n                \"name\": \"Chú. Ngụy Huynh\",\n                \"address\": \"8480 Phố Ung Quỳnh Tường, Ấp Vỹ Giác, Quận LýLạng Sơn\",\n                \"phone\": \"0169 046 8420\",\n                \"email\": \"vong.dong@example.com\",\n                \"avatar\": null\n            }\n        },\n        {\n            \"id\": 2,\n            \"name\": \"Product 1\",\n            \"price\": 4000,\n            \"supplier\": {\n                \"id\": 11,\n                \"name\": \"Chú. Ngụy Huynh\",\n                \"address\": \"8480 Phố Ung Quỳnh Tường, Ấp Vỹ Giác, Quận LýLạng Sơn\",\n                \"phone\": \"0169 046 8420\",\n                \"email\": \"vong.dong@example.com\",\n                \"avatar\": null\n            }\n        }\n    ],\n    \"Sử Thu\": [\n        {\n            \"id\": 10,\n            \"name\": \"Product 9\",\n            \"price\": 8000,\n            \"supplier\": {\n                \"id\": 20,\n                \"name\": \"Sử Thu\",\n                \"address\": \"288, Thôn Thiên Hiền, Xã Lưu, Huyện 75Khánh Hòa\",\n                \"phone\": \"0280 457 6047\",\n                \"email\": \"nthieu@example.com\",\n                \"avatar\": null\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/cart.js",
    "groupTitle": "Cart"
  },
  {
    "type": "post",
    "url": "/api/v1/orders",
    "title": "Create a order",
    "name": "Create_order",
    "group": "Order",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "params",
            "defaultValue": "required|array",
            "description": "<p>format {&quot;id1&quot; : quantity1, &quot;id2&quot;: quantity2}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Request:",
          "content": "{\n    \"params\": {\"1\":2, \"3\":3, \"4\":4}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"Create order successfully!\"",
          "type": "json"
        }
      ]
    },
    "filename": "./input/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/v1/orders/customer-order-list?per_page=4&page=2",
    "title": "Customer get list order",
    "name": "Customer_get_list_order",
    "group": "Order",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"0\": {\n        \"id\": 9,\n        \"customer_id\": 2,\n        \"created_at\": \"2019-01-10 00:06:59\",\n        \"status\": 0,\n        \"products\": [\n            {\n                \"id\": 4,\n                \"name\": \"Product 3\",\n                \"price\": 10000,\n                \"quantity\": 4\n            }\n        ]\n    },\n    \"meta\": {\n        \"pagination\": {\n            \"total\": 5,\n            \"count\": 1,\n            \"per_page\": 4,\n            \"current_page\": 2,\n            \"total_pages\": 2,\n            \"links\": {\n                \"previous\": \"http://topno1.test/api/v1/orders/customer-order-list?page=1\"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/v1/orders/:id",
    "title": "Get order detail",
    "name": "Get_order_detail",
    "group": "Order",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"id\": 7,\n    \"customer_id\": 2,\n    \"created_at\": \"2019-01-09 17:03:41\",\n    \"total\": \"61000\",\n    \"status\": 0,\n    \"products\": [\n        {\n            \"id\": 1,\n            \"name\": \"Product 0\",\n            \"price\": 9000,\n            \"quantity\": 2\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Product 2\",\n            \"price\": 1000,\n            \"quantity\": 3\n        },\n        {\n            \"id\": 4,\n            \"name\": \"Product 3\",\n            \"price\": 10000,\n            \"quantity\": 4\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/v1/products",
    "title": "Create product detail",
    "name": "Create_Product",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "defaultValue": "required",
            "description": "<p>Name of product</p>"
          },
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "price",
            "defaultValue": "required|min:0",
            "description": "<p>Price of product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desciprtion",
            "defaultValue": "nullable",
            "description": "<p>Produce desciprtion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_ids",
            "defaultValue": "required|",
            "description": "<p>Array list category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Product 34567812345\",\n    \"price\": 4000,\n    \"rating\": 4,\n    \"description\": \"Good\",\n    \"category_ids\": [2, 6]\n}",
          "type": "json"
        },
        {
          "title": "Request-Error-Example:",
          "content": "{\n    \"name\": \"Product 34567812345\",\n    \"price\": 4000,\n    \"rating\": 4,\n    \"description\": \"Good\",\n    \"category_ids\": [2, 6]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 39,\n    \"name\": \"Product 34567812345\",\n    \"price\": 4000,\n    \"rating\": null,\n    \"description\": \"Good\",\n    \"updated_at\": \"2018-12-31 17:08:09\",\n    \"supplier\": {\n        \"id\": 12,\n        \"name\": \"Cụ. Phí Dũng Diệp\",\n        \"address\": \"3 Phố Tuyết, Phường 95, Quận Thào Nguyên ThúyĐà Nẵng\",\n        \"phone\": \"0231 240 9936\",\n        \"email\": \"qkhuu@example.org\",\n        \"avatar\": null\n    },\n    \"categories\": [\n        {\n            \"id\": 2,\n            \"name\": \"Category 1\",\n            \"description\": null\n        },\n        {\n            \"id\": 6,\n            \"name\": \"Category 114\",\n            \"description\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n    \"errors\": {\n        \"name\": [\n            \"The name has already been taken.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/v1/products/:id",
    "title": "Get product detail",
    "name": "Get_Product_detail",
    "group": "Product",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 39,\n    \"name\": \"Product 34567812345\",\n    \"price\": 4000,\n    \"rating\": 1,\n    \"description\": \"Good\",\n    \"updated_at\": \"2018-12-31 17:08:09\",\n    \"supplier\": {\n        \"id\": 12,\n        \"name\": \"Cụ. Phí Dũng Diệp\",\n        \"address\": \"3 Phố Tuyết, Phường 95, Quận Thào Nguyên ThúyĐà Nẵng\",\n        \"phone\": \"0231 240 9936\",\n        \"email\": \"qkhuu@example.org\",\n        \"avatar\": null\n    },\n    \"categories\": [\n        {\n            \"id\": 2,\n            \"name\": \"Category 1\",\n            \"description\": null\n        },\n        {\n            \"id\": 6,\n            \"name\": \"Category 114\",\n            \"description\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"message\": \"Product not found!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/v1/product?page=19&per_page=2",
    "title": "Get list products",
    "name": "Get_list_productt",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "defaultValue": "1|nullable",
            "description": "<p>Current page nullable</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "per_page",
            "defaultValue": "15|nullable",
            "description": "<p>Items perpage nullable</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"0\": {\n        \"id\": 39,\n        \"name\": \"Product 34567812345\",\n        \"price\": 4000,\n        \"rating\": 1,\n        \"description\": \"Good\",\n        \"updated_at\": \"2018-12-31 17:08:09\",\n        \"supplier\": {\n            \"id\": 12,\n            \"name\": \"Cụ. Phí Dũng Diệp\",\n            \"address\": \"3 Phố Tuyết, Phường 95, Quận Thào Nguyên ThúyĐà Nẵng\",\n            \"phone\": \"0231 240 9936\",\n            \"email\": \"qkhuu@example.org\",\n            \"avatar\": null\n        },\n        \"categories\": [\n            {\n                \"id\": 2,\n                \"name\": \"Category 1\",\n                \"description\": null\n            },\n            {\n                \"id\": 6,\n                \"name\": \"Category 114\",\n                \"description\": null\n            }\n        ]\n    },\n    \"meta\": {\n        \"pagination\": {\n            \"total\": 37,\n            \"count\": 1,\n            \"per_page\": 2,\n            \"current_page\": 19,\n            \"total_pages\": 19,\n            \"links\": {\n                \"previous\": \"http://topno1.test/api/v1/products?page=18\"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/v1/products/:id",
    "title": "Remove product",
    "name": "Remove_Product",
    "group": "Product",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Remove product successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"message\": \"Remove product fail!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/v1/products/:id",
    "title": "Update product",
    "name": "Update_Product_detail",
    "group": "Product",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "defaultValue": "required",
            "description": "<p>Name of product</p>"
          },
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "price",
            "defaultValue": "required|min:0",
            "description": "<p>Price of product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desciprtion",
            "defaultValue": "nullable",
            "description": "<p>Produce desciprtion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Product xxx11123\",\n    \"price\": \"11\",\n    \"rating\": 4,\n    \"category_ids\": [2,6],\n    \"description\": \"Good\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Updated product successfully!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"errors\": {\n        \"price\": [\n            \"The price must be a number.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./input/product.js",
    "groupTitle": "Product"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_var_www_topno1_public_apidocs_doc_main_js",
    "groupTitle": "_var_www_topno1_public_apidocs_doc_main_js",
    "name": ""
  }
] });
