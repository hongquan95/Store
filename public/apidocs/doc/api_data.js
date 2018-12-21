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
    "type": "get",
    "url": "/api/v1/product?page=2&per_page=2",
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
          "content": "{\n    \"0\": {\n        \"id\": 3,\n        \"name\": \"Product 2\",\n        \"price\": 10000,\n        \"rating\": 3,\n        \"description\": \"Culpa neque illo aut et quae.\",\n        \"updated_at\": \"2018-12-20 16:31:38\",\n        \"supplier\": {\n            \"id\": 13,\n            \"name\": \"Bà. Lư Nga\",\n            \"address\": \"07, Thôn Hồ, Xã 9, Huyện Ánh VươngSơn La\",\n            \"phone\": \"(84)(129)470-3660\",\n            \"email\": \"trinh.phuong@example.org\",\n            \"avatar\": null\n        }\n    },\n    \"1\": {\n        \"id\": 4,\n        \"name\": \"Product 3\",\n        \"price\": 5000,\n        \"rating\": 1,\n        \"description\": \"Saepe odit omnis velit velit.\",\n        \"updated_at\": \"2018-12-20 16:31:38\",\n        \"supplier\": {\n            \"id\": 14,\n            \"name\": \"Yên Khuyến Tiếp\",\n            \"address\": \"2, Thôn Trần, Phường Ông Minh Sơn, Huyện Dung AnGia Lai\",\n            \"phone\": \"0500 740 5292\",\n            \"email\": \"thuy71@example.com\",\n            \"avatar\": null\n        }\n    },\n    \"meta\": {\n        \"pagination\": {\n            \"total\": 30,\n            \"count\": 2,\n            \"per_page\": 2,\n            \"current_page\": 2,\n            \"total_pages\": 15,\n            \"links\": {\n                \"previous\": \"http: *topno1.test/api/v1/products?page=1\",\n                \"next\": \"http: *topno1.test/api/v1/products?page=3\"\n            }\n        }\n    }\n}",
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
