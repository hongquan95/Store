define({
  "name": "App store - Api Documentation",
  "version": "0.1.0",
  "description": "API document for App store",
  "title": "App Store - API documentation",
  "url": "{APP_URL}",
  "header": {
    "title": "Overview",
    "content": "<h1>Overview</h1>\n<h2>Post data to server</h2>\n<p>All request form data must be in <code>json</code> format</p>\n<ul>\n<li>Request header <code>Content-Type</code>: <code>application/json</code></li>\n<li>Request body content : <code>json</code> format.</li>\n</ul>\n<h2>Authentication</h2>\n<h4>Client</h4>\n<ul>\n<li>Call the login api, send params to server\n<ul>\n<li>username</li>\n<li>password</li>\n</ul>\n</li>\n</ul>\n<h4>Server</h4>\n<ul>\n<li>Check credential, if OK then generate a <code>api_token</code></li>\n<li>Send <code>api_token</code> back to client</li>\n</ul>\n<p>When client access the protected endpoints they have to send back <code>api_token</code> to server. There are to ways to send:</p>\n<ul>\n<li>Request query: http(s)://api-endpoind?api_token=token_value</li>\n<li>Request header\n<ul>\n<li>Header key: Authorization</li>\n<li>Header value: Bearer token_value</li>\n</ul>\n</li>\n</ul>\n<h2>Error response</h2>\n<ul>\n<li><code>4xx</code>: client error</li>\n<li><code>5xx</code>: server error</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Status code</th>\n<th>Meaning</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>400</td>\n<td>Bad request</td>\n</tr>\n<tr>\n<td>401</td>\n<td>Unauthoziration</td>\n</tr>\n<tr>\n<td>403</td>\n<td>Permission denied</td>\n</tr>\n<tr>\n<td>500</td>\n<td>Internal server error</td>\n</tr>\n</tbody>\n</table>\n<h4>Body response</h4>\n<p>All response body in case error must follow the format</p>\n<pre><code class=\"language-json\">{\n    &quot;message&quot;: &quot;The error content message&quot;\n}\n</code></pre>\n"
  },
  "footer": {
    "title": "Feedback",
    "content": "<h2>Issues and Feedback</h2>\n<p>If you found any issues please post in <a href=\"https://github.com/app-tore\">here</a>.</p>\n"
  },
  "template": {
    "forceLanguage": "en"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2018-12-31T17:30:38.448Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  }
});
