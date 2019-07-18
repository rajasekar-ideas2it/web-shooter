import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Nav } from "react-bootstrap";
import Video from "./components/Video";
import Network from "./components/Network";
import Request from "./components/Request";
import Response from "./components/Response";
import Console from "./components/Console/Console";

const components = {
  request: Request,
  response: Response
};

const networkLogs = {
  version: "1.2",
  creator: {
    name: "WebInspector",
    version: "537.36"
  },
  pages: [
    {
      startedDateTime: "2019-07-18T08:23:24.893Z",
      id: "page_2",
      title: "https://getbootstrap.com/docs/4.3/layout/overview/",
      pageTimings: {
        onContentLoad: 891.8610000000626,
        onLoad: 1320.9100000003673
      }
    },
    {
      startedDateTime: "2019-07-18T08:23:15.139Z",
      id: "page_1",
      title: "https://getbootstrap.com/docs/4.3/layout/overview/",
      pageTimings: {
        onContentLoad: 1355.5529999994178,
        onLoad: 1711.3960000006045
      }
    }
  ],
  entries: [
    {
      startedDateTime: "2019-07-18T08:23:24.889Z",
      time: 16.60699999956705,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Upgrade-Insecure-Requests",
            value: "1"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "status",
            value: "200"
          },
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:23:13 GMT"
          },
          {
            name: "content-type",
            value: "text/html; charset=utf-8"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-9d1f"'
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "expires",
            value: "Wed, 17 Jul 2019 13:45:45 GMT"
          },
          {
            name: "cache-control",
            value: "max-age=600"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "x-github-request-id",
            value: "5D74:1819:4509A4:587963:5D302C65"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "cf-ray",
            value: "4f830d656d9adc81-MAA"
          },
          {
            name: "content-encoding",
            value: "br"
          }
        ],
        cookies: [],
        content: {
          size: 40223,
          mimeType: "text/html"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 3.775999999495456,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.640000000676606,
        receive: 10.19099999939499,
        _blocked_queueing: 3.576999999495456
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "other"
      },
      _priority: "VeryHigh",
      _resourceType: "document",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.136Z",
      time: 297.4080000003596,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        httpVersion: "http/2.0",
        headers: [
          {
            name: ":method",
            value: "GET"
          },
          {
            name: ":authority",
            value: "getbootstrap.com"
          },
          {
            name: ":scheme",
            value: "https"
          },
          {
            name: ":path",
            value: "/docs/4.3/layout/overview/"
          },
          {
            name: "upgrade-insecure-requests",
            value: "1"
          },
          {
            name: "user-agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "accept",
            value:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
          },
          {
            name: "referer",
            value: "https://getbootstrap.com/docs/4.3/utilities/borders/"
          },
          {
            name: "accept-encoding",
            value: "gzip, deflate, br"
          },
          {
            name: "accept-language",
            value: "en-US,en;q=0.9"
          },
          {
            name: "cookie",
            value:
              "__cfduid=da07f6b4a2e87a30caaa7427d83f605321557313302; _ga=GA1.2.203491206.1557313304; _gid=GA1.2.1415855775.1563251424; _gat=1"
          }
        ],
        queryString: [],
        cookies: [
          {
            name: "__cfduid",
            value: "da07f6b4a2e87a30caaa7427d83f605321557313302",
            expires: null,
            httpOnly: false,
            secure: false
          },
          {
            name: "_ga",
            value: "GA1.2.203491206.1557313304",
            expires: null,
            httpOnly: false,
            secure: false
          },
          {
            name: "_gid",
            value: "GA1.2.1415855775.1563251424",
            expires: null,
            httpOnly: false,
            secure: false
          },
          {
            name: "_gat",
            value: "1",
            expires: null,
            httpOnly: false,
            secure: false
          }
        ],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "status",
            value: "200"
          },
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:23:13 GMT"
          },
          {
            name: "content-type",
            value: "text/html; charset=utf-8"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-9d1f"'
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "expires",
            value: "Wed, 17 Jul 2019 13:45:45 GMT"
          },
          {
            name: "cache-control",
            value: "max-age=600"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "x-github-request-id",
            value: "5D74:1819:4509A4:587963:5D302C65"
          },
          {
            name: "strict-transport-security",
            value: "max-age=15552000; includeSubDomains; preload"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "cf-ray",
            value: "4f830d656d9adc81-MAA"
          },
          {
            name: "content-encoding",
            value: "br"
          }
        ],
        cookies: [],
        content: {
          size: 40223,
          mimeType: "text/html"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 7686
      },
      cache: {},
      timings: {
        blocked: 5.268999999913038,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.3650000000000002,
        wait: 287.6869999992829,
        receive: 4.087000001163688,
        _blocked_queueing: 2.4659999999130378
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "other"
      },
      _priority: "VeryHigh",
      _resourceType: "document",
      connection: "45794",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:05.920Z",
      time: 3.4190000005764887,
      request: {
        method: "GET",
        url: "chrome-extension://ipgloijnjghainofjgnnfcngmmjblpeo/console.js",
        httpVersion: "chrome-extension",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "chrome-extension",
        headers: [
          {
            name: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            name: "Content-Security-Policy",
            value:
              "script-src 'self' blob: filesystem: chrome-extension-resource:; object-src 'self' blob: filesystem:;"
          },
          {
            name: "cache-control",
            value: "no-cache"
          },
          {
            name: "ETag",
            value: '"bezBh4g4G7JoXESinIaySP7iq1I="'
          },
          {
            name: "Content-Type",
            value: "text/javascript"
          }
        ],
        cookies: [],
        content: {
          size: 1420,
          mimeType: "text/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 1420
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 3.1560000006720657,
        receive: 0.262999999904423,
        _blocked_queueing: -1
      },
      serverIPAddress: "",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [
            {
              functionName: "AddConsolejs",
              scriptId: "8317",
              url:
                "chrome-extension://ipgloijnjghainofjgnnfcngmmjblpeo/contentscript.js",
              lineNumber: 52,
              columnNumber: 11
            },
            {
              functionName: "",
              scriptId: "8317",
              url:
                "chrome-extension://ipgloijnjghainofjgnnfcngmmjblpeo/contentscript.js",
              lineNumber: 29,
              columnNumber: 6
            }
          ]
        }
      },
      _priority: "Low",
      _resourceType: "script"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.540Z",
      time: 19.70900000014808,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "MISS"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "8308:0E04:29B7D8:355E0C:5D302C56"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-2606e"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "text/css; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf1fbd7dc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 155758,
          mimeType: "text/css"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.0950000003704337,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 6.220000000374043,
        receive: 12.393999999403604,
        _blocked_queueing: 0.9790000003704336
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 17
      },
      _priority: "VeryHigh",
      _resourceType: "stylesheet",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.540Z",
      time: 21.919999999227002,
      request: {
        method: "GET",
        url:
          "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "etag",
            value: 'W/"4a1f-CpG1pd4Wh0E5j9AIekidg+v/Nr4"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "content-type",
            value: "text/css; charset=utf-8"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "access-control-expose-headers",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=604800, s-maxage=43200"
          },
          {
            name: "timing-allow-origin",
            value: "*"
          },
          {
            name: "x-served-by",
            value: "cache-ams21031-AMS, cache-sin18033-SIN"
          }
        ],
        cookies: [],
        content: {
          size: 18975,
          mimeType: "text/css"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.3400000001081498,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 6.2370000002022135,
        receive: 14.342999998916639,
        _blocked_queueing: 1.2630000001081498
      },
      serverIPAddress: "151.139.107.233",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 20
      },
      _priority: "VeryHigh",
      _resourceType: "stylesheet",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.541Z",
      time: 23.858000000473112,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/assets/css/docs.min.css",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "123"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "2B2A:627F:874C78:ADC258:5D289CC5"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-568d"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "text/css; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf20be6dc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 22157,
          mimeType: "text/css"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 3.641000000713044,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 4.301999999810127,
        receive: 15.914999999949941,
        _blocked_queueing: 3.500000000713044
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 23
      },
      _priority: "VeryHigh",
      _resourceType: "stylesheet",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.544Z",
      time: 36.89200000007986,
      request: {
        method: "GET",
        url: "https://www.google-analytics.com/analytics.js",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:00:25 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "last-modified",
            value: "Thu, 20 Jun 2019 21:35:04 GMT"
          },
          {
            name: "server",
            value: "Golfe2"
          },
          {
            name: "age",
            value: "1350"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "text/javascript"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "cache-control",
            value: "public, max-age=7200"
          },
          {
            name: "alt-svc",
            value: 'quic=":443"; ma=2592000; v="46,43,39"'
          },
          {
            name: "content-length",
            value: "17707"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 10:00:25 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 44287,
          mimeType: "text/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.4439999997394626,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 3.952000000734115,
        receive: 31.495999999606283,
        _blocked_queueing: 1.3639999997394625
      },
      serverIPAddress: "172.217.163.174",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 60
      },
      _priority: "Low",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.545Z",
      time: 37.426000000778004,
      request: {
        method: "GET",
        url:
          "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "serve",
            value: "CKYIKKJL"
          },
          {
            name: "placement",
            value: "getbootstrapcom"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Last-Modified",
            value: "Mon, 10 Jun 2019 17:33:21 GMT"
          },
          {
            name: "Server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "ETag",
            value: 'W/"9554-58afb9398c5a2"'
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "X-Cache",
            value: "HIT"
          },
          {
            name: "Content-Type",
            value: "application/javascript"
          }
        ],
        cookies: [],
        content: {
          size: 38228,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.5450000013160752,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 34.05899999928719,
        receive: 1.8220000001747394,
        _blocked_queueing: 1.4600000013160752
      },
      serverIPAddress: "23.111.10.140",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 478
      },
      _priority: "Low",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.547Z",
      time: 0.3280000000813743,
      request: {
        method: "GET",
        url: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:22:56 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Last-Modified",
            value: "Sat, 20 Jan 2018 17:26:44 GMT"
          },
          {
            name: "Server",
            value: "nginx"
          },
          {
            name: "ETag",
            value: 'W/"5a637bd4-1111d"'
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "X-HW",
            value:
              "1563438176.dop044.la3.t,1563438176.cds004.la3.shn,1563438176.cds004.la3.c"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            name: "Cache-Control",
            value: "max-age=315360000, public"
          },
          {
            name: "Connection",
            value: "Keep-Alive"
          },
          {
            name: "Accept-Ranges",
            value: "bytes"
          },
          {
            name: "Content-Length",
            value: "24038"
          }
        ],
        cookies: [],
        content: {
          size: 69917,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.3149999993183883,
        receive: 0.01300000076298602,
        _blocked_queueing: -1
      },
      serverIPAddress: "205.185.208.52",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 587
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      connection: "45876",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.547Z",
      time: 0.11000000085914508,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "7578:3E5C:B40D59:E503B4:5D2A6057"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-1332b"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "strict-transport-security",
            value: "max-age=15552000; includeSubDomains; preload"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf21c5edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 78635,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.10199999996984843,
        receive: 0.008000000889296643,
        _blocked_queueing: -1
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 588
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      connection: "45794",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.548Z",
      time: 0.1560000000608852,
      request: {
        method: "GET",
        url:
          "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "etag",
            value: 'W/"2ac5f-GvM9Pc1KzcsvOcvD14hfKmjz42o"'
          },
          {
            name: "strict-transport-security",
            value: "max-age=31536000; includeSubDomains; preload"
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "access-control-expose-headers",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=604800, s-maxage=43200"
          },
          {
            name: "timing-allow-origin",
            value: "*"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "x-served-by",
            value: "cache-ams21040-AMS, cache-sjc3140-SJC"
          }
        ],
        cookies: [],
        content: {
          size: 175199,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.14600000031350646,
        receive: 0.009999999747378752,
        _blocked_queueing: -1
      },
      serverIPAddress: "151.139.107.233",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 588
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      connection: "45833",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:15.548Z",
      time: 0.16399999913119245,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/assets/js/docs.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "F5AC:2FEE:FC4CCB:140E666:5D2C8149"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-54e9"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "strict-transport-security",
            value: "max-age=15552000; includeSubDomains; preload"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf23c8edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 21737,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.1560000000608852,
        receive: 0.00799999907030724,
        _blocked_queueing: -1
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 588
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      connection: "45794",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.179Z",
      time: 9.546999999656691,
      request: {
        method: "GET",
        url:
          "https://www.google-analytics.com/collect?v=1&_v=j77&aip=1&a=1759063462&t=pageview&_s=1&dl=https%3A%2F%2Fgetbootstrap.com%2Fdocs%2F4.3%2Flayout%2Foverview%2F&ul=en-us&de=UTF-8&dt=Overview%20%C2%B7%20Bootstrap&sd=24-bit&sr=1366x768&vp=1349x298&je=0&_u=QACAAAAB~&jid=&gjid=&cid=203491206.1557313304&tid=UA-146052-10&_gid=1415855775.1563251424&z=1188121902",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "v",
            value: "1"
          },
          {
            name: "_v",
            value: "j77"
          },
          {
            name: "aip",
            value: "1"
          },
          {
            name: "a",
            value: "1759063462"
          },
          {
            name: "t",
            value: "pageview"
          },
          {
            name: "_s",
            value: "1"
          },
          {
            name: "dl",
            value:
              "https%3A%2F%2Fgetbootstrap.com%2Fdocs%2F4.3%2Flayout%2Foverview%2F"
          },
          {
            name: "ul",
            value: "en-us"
          },
          {
            name: "de",
            value: "UTF-8"
          },
          {
            name: "dt",
            value: "Overview%20%C2%B7%20Bootstrap"
          },
          {
            name: "sd",
            value: "24-bit"
          },
          {
            name: "sr",
            value: "1366x768"
          },
          {
            name: "vp",
            value: "1349x298"
          },
          {
            name: "je",
            value: "0"
          },
          {
            name: "_u",
            value: "QACAAAAB~"
          },
          {
            name: "jid",
            value: ""
          },
          {
            name: "gjid",
            value: ""
          },
          {
            name: "cid",
            value: "203491206.1557313304"
          },
          {
            name: "tid",
            value: "UA-146052-10"
          },
          {
            name: "_gid",
            value: "1415855775.1563251424"
          },
          {
            name: "z",
            value: "1188121902"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "pragma",
            value: "no-cache"
          },
          {
            name: "date",
            value: "Tue, 09 Jul 2019 07:26:21 GMT"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "last-modified",
            value: "Sun, 17 May 1998 03:00:00 GMT"
          },
          {
            name: "server",
            value: "Golfe2"
          },
          {
            name: "age",
            value: "781013"
          },
          {
            name: "content-type",
            value: "image/gif"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "alt-svc",
            value: 'quic=":443"; ma=2592000; v="46,43,39"'
          },
          {
            name: "cache-control",
            value: "no-cache, no-store, must-revalidate"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "content-length",
            value: "35"
          },
          {
            name: "expires",
            value: "Mon, 01 Jan 1990 00:00:00 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 35,
          mimeType: "image/gif"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 109
      },
      cache: {},
      timings: {
        blocked: 6.566999999901047,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.1769999999999996,
        wait: 2.14599999925436,
        receive: 0.6570000005012844,
        _blocked_queueing: 1.299999999901047
      },
      serverIPAddress: "172.217.163.174",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [],
          parent: {
            description: "Image",
            callFrames: [
              {
                functionName: "ta",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 15,
                columnNumber: 87
              },
              {
                functionName: "wc",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 24,
                columnNumber: 643
              },
              {
                functionName: "ba",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 24,
                columnNumber: 456
              },
              {
                functionName: "Sa",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 29,
                columnNumber: 267
              },
              {
                functionName: "Ha.D",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 27,
                columnNumber: 446
              },
              {
                functionName: "pc.send",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 63,
                columnNumber: 342
              },
              {
                functionName: "X.b.<computed>",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 39,
                columnNumber: 140
              },
              {
                functionName: "Z.v",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 71,
                columnNumber: 333
              },
              {
                functionName: "Z.D",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 70,
                columnNumber: 175
              },
              {
                functionName: "N.N",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 73,
                columnNumber: 72
              },
              {
                functionName: "rc",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 63,
                columnNumber: 548
              },
              {
                functionName: "z",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 63,
                columnNumber: 580
              },
              {
                functionName: "",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 73,
                columnNumber: 194
              },
              {
                functionName: "",
                scriptId: "8536",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 73,
                columnNumber: 246
              }
            ]
          }
        }
      },
      _priority: "Low",
      _resourceType: "image",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.185Z",
      time: 11.908000000403263,
      request: {
        method: "GET",
        url: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:22:56 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Last-Modified",
            value: "Sat, 20 Jan 2018 17:26:44 GMT"
          },
          {
            name: "Server",
            value: "nginx"
          },
          {
            name: "ETag",
            value: 'W/"5a637bd4-1111d"'
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "X-HW",
            value:
              "1563438176.dop044.la3.t,1563438176.cds004.la3.shn,1563438176.cds004.la3.c"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            name: "Cache-Control",
            value: "max-age=315360000, public"
          },
          {
            name: "Accept-Ranges",
            value: "bytes"
          },
          {
            name: "Content-Length",
            value: "24038"
          }
        ],
        cookies: [],
        content: {
          size: 69917,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.1669999993701932,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 4.298000000815489,
        receive: 6.44300000021758,
        _blocked_queueing: 1.104999999370193
      },
      serverIPAddress: "205.185.208.52",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 644
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.202Z",
      time: 166.23799999979383,
      request: {
        method: "GET",
        url:
          "https://srv.carbonads.net/ads/CKYIKKJL.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "segment",
            value: "placement:getbootstrapcom"
          },
          {
            name: "callback",
            value: "_carbonads_go"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:23:14 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Server",
            value: "//srv.buysellads.com"
          },
          {
            name: "Content-Length",
            value: "409"
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          }
        ],
        cookies: [],
        content: {
          size: 544,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 616
      },
      cache: {},
      timings: {
        blocked: 3.9040000015681144,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.19899999999999984,
        wait: 161.41000000016984,
        receive: 0.7249999980558641,
        _blocked_queueing: 1.0900000015681144
      },
      serverIPAddress: "206.189.18.245",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [
            {
              functionName: "init",
              scriptId: "8537",
              url:
                "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
              lineNumber: 0,
              columnNumber: 625
            },
            {
              functionName: "",
              scriptId: "8537",
              url:
                "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
              lineNumber: 0,
              columnNumber: 37785
            }
          ]
        }
      },
      _priority: "Low",
      _resourceType: "script",
      connection: "46018",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.250Z",
      time: 13.359000000491505,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "7578:3E5C:B40D59:E503B4:5D2A6057"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-1332b"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf21c5edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 78635,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.0920000004108297,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.613000000580447,
        receive: 9.653999999500229,
        _blocked_queueing: 0.9630000004108297
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 645
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.297Z",
      time: 10.31200000034005,
      request: {
        method: "GET",
        url:
          "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "etag",
            value: 'W/"2ac5f-GvM9Pc1KzcsvOcvD14hfKmjz42o"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "access-control-expose-headers",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=604800, s-maxage=43200"
          },
          {
            name: "timing-allow-origin",
            value: "*"
          },
          {
            name: "x-served-by",
            value: "cache-ams21040-AMS, cache-sjc3140-SJC"
          }
        ],
        cookies: [],
        content: {
          size: 175199,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.7270000002350425,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.9299999992621597,
        receive: 5.655000000842847,
        _blocked_queueing: 1.6180000002350425
      },
      serverIPAddress: "151.139.107.233",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 645
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.347Z",
      time: 6.142000000181724,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/assets/js/docs.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "F5AC:2FEE:FC4CCB:140E666:5D2C8149"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-54e9"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf23c8edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 21737,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.618999999749707,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.3510000000040745,
        receive: 2.1720000004279427,
        _blocked_queueing: 1.449999999749707
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 645
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.652Z",
      time: 163.44300000127987,
      request: {
        method: "GET",
        url:
          "https://srv.carbonads.net/ads/CK7DT53I.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "segment",
            value: "placement:getbootstrapcom"
          },
          {
            name: "callback",
            value: "_carbonads_go"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:23:15 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Server",
            value: "//srv.buysellads.com"
          },
          {
            name: "Content-Length",
            value: "638"
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          }
        ],
        cookies: [],
        content: {
          size: 1035,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 845
      },
      cache: {},
      timings: {
        blocked: 2.6310000000171128,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.15300000000000002,
        wait: 160.00200000076148,
        receive: 0.6570000005012844,
        _blocked_queueing: 1.209000000017113
      },
      serverIPAddress: "206.189.18.245",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [
            {
              functionName: "_carbonads_go",
              scriptId: "8537",
              url:
                "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
              lineNumber: 0,
              columnNumber: 35411
            },
            {
              functionName: "",
              scriptId: "8547",
              url:
                "https://srv.carbonads.net/ads/CKYIKKJL.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
              lineNumber: 0,
              columnNumber: 0
            }
          ]
        }
      },
      _priority: "Low",
      _resourceType: "script",
      connection: "46018",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.820Z",
      time: 14.606000000640051,
      request: {
        method: "GET",
        url: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:56 GMT"
          },
          {
            name: "last-modified",
            value: "Tue, 01 May 2018 15:52:24 GMT"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "x-amz-request-id",
            value: "A34D06F5EC46E736"
          },
          {
            name: "etag",
            value: '"3eebbdc4f11d41c0e9fcb81b4b0bb033"'
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "cache-control",
            value: "max-age=31104000"
          },
          {
            name: "accept-ranges",
            value: "bytes"
          },
          {
            name: "content-length",
            value: "21135"
          },
          {
            name: "x-amz-id-2",
            value:
              "Gkm1pEBtMAQWj7csflzqZut/RBBbRJ13W7Z4ddYYjcbqQkqq2RvR2MtviZheZ1yrTl/5kun3814="
          },
          {
            name: "expires",
            value: "Sun, 12 Jul 2020 08:22:56 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 21135,
          mimeType: "image/png"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.2700000005627516,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 5.932000000125961,
        receive: 7.403999999951338,
        _blocked_queueing: 1.1730000005627517
      },
      serverIPAddress: "94.31.29.32",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [],
          parent: {
            description: "Image",
            callFrames: [
              {
                functionName: "_carbonads_go",
                scriptId: "8537",
                url:
                  "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
                lineNumber: 0,
                columnNumber: 36314
              },
              {
                functionName: "",
                scriptId: "8555",
                url:
                  "https://srv.carbonads.net/ads/CK7DT53I.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
                lineNumber: 0,
                columnNumber: 0
              }
            ]
          }
        }
      },
      _priority: "Low",
      _resourceType: "image",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.862Z",
      time: 4.858000000240281,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/assets/img/favicons/manifest.json",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:57 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "status",
            value: "304"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "E376:57EE:45F102:59AE68:5D302C61"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-1d8"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/json; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "expires",
            value: "Wed, 05 Jun 2019 08:08:51 GMT"
          },
          {
            name: "cache-control",
            value: "max-age=600"
          },
          {
            name: "cf-ray",
            value: "4f830cfeb9cadca9-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          }
        ],
        cookies: [],
        content: {
          size: 472,
          mimeType: "application/json"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.0870000002492453,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.5189999999688006,
        receive: 1.2520000000222353,
        _blocked_queueing: 1.0270000002492452
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "other"
      },
      _priority: "Medium",
      _resourceType: "manifest",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:16.870Z",
      time: 10.883999999350635,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/assets/img/favicons/android-chrome-192x192.png",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 05:52:35 GMT"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "105"
          },
          {
            name: "status",
            value: "304"
          },
          {
            name: "content-length",
            value: "1935"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "3AF6:6231:120E093:16F243B:5D2C8138"
          },
          {
            name: "etag",
            value: '"5cf77627-78f"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "image/png"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 09:52:35 GMT"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "accept-ranges",
            value: "bytes"
          },
          {
            name: "cf-ray",
            value: "4f8230bc3ecadc89-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          }
        ],
        cookies: [],
        content: {
          size: 1935,
          mimeType: "image/png"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.1970000000421424,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 5.6390000004337635,
        receive: 4.0479999988747295,
        _blocked_queueing: 1.0640000000421423
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "other"
      },
      _priority: "High",
      _resourceType: "other",
      _fromCache: "disk",
      pageref: "page_1"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.929Z",
      time: 25.32199999950535,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "MISS"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "8308:0E04:29B7D8:355E0C:5D302C56"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-2606e"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "text/css; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf1fbd7dc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 155758,
          mimeType: "text/css"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 3.287999999232008,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 5.433999999438063,
        receive: 16.60000000083528,
        _blocked_queueing: 3.140999999232008
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 17
      },
      _priority: "VeryHigh",
      _resourceType: "stylesheet",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.933Z",
      time: 20.166999998764368,
      request: {
        method: "GET",
        url:
          "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "etag",
            value: 'W/"4a1f-CpG1pd4Wh0E5j9AIekidg+v/Nr4"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "content-type",
            value: "text/css; charset=utf-8"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "access-control-expose-headers",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=604800, s-maxage=43200"
          },
          {
            name: "timing-allow-origin",
            value: "*"
          },
          {
            name: "x-served-by",
            value: "cache-ams21031-AMS, cache-sin18033-SIN"
          }
        ],
        cookies: [],
        content: {
          size: 18975,
          mimeType: "text/css"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.2639999995067484,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 4.18500000071933,
        receive: 14.71799999853829,
        _blocked_queueing: 1.1859999995067483
      },
      serverIPAddress: "151.139.107.233",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 20
      },
      _priority: "VeryHigh",
      _resourceType: "stylesheet",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.935Z",
      time: 19.077000000834232,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/assets/css/docs.min.css",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "123"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "2B2A:627F:874C78:ADC258:5D289CC5"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-568d"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "text/css; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf20be6dc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 22157,
          mimeType: "text/css"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.8740000013923273,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.531000000105356,
        receive: 14.671999999336549,
        _blocked_queueing: 1.7450000013923272
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 23
      },
      _priority: "VeryHigh",
      _resourceType: "stylesheet",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.936Z",
      time: 29.625000001033186,
      request: {
        method: "GET",
        url: "https://www.google-analytics.com/analytics.js",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:00:25 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "last-modified",
            value: "Thu, 20 Jun 2019 21:35:04 GMT"
          },
          {
            name: "server",
            value: "Golfe2"
          },
          {
            name: "age",
            value: "1350"
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "text/javascript"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "cache-control",
            value: "public, max-age=7200"
          },
          {
            name: "alt-svc",
            value: 'quic=":443"; ma=2592000; v="46,43,39"'
          },
          {
            name: "content-length",
            value: "17707"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 10:00:25 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 44287,
          mimeType: "text/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.8590000006344636,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 16.12900000078918,
        receive: 11.636999999609543,
        _blocked_queueing: 1.7750000006344635
      },
      serverIPAddress: "172.217.163.174",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 60
      },
      _priority: "Low",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.938Z",
      time: 29.36000000045169,
      request: {
        method: "GET",
        url:
          "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "serve",
            value: "CKYIKKJL"
          },
          {
            name: "placement",
            value: "getbootstrapcom"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Last-Modified",
            value: "Mon, 10 Jun 2019 17:33:21 GMT"
          },
          {
            name: "Server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "ETag",
            value: 'W/"9554-58afb9398c5a2"'
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "X-Cache",
            value: "HIT"
          },
          {
            name: "Content-Type",
            value: "application/javascript"
          }
        ],
        cookies: [],
        content: {
          size: 38228,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.3489999988296768,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 15.37299999965122,
        receive: 12.638000001970795,
        _blocked_queueing: 1.1839999988296768
      },
      serverIPAddress: "23.111.10.140",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 478
      },
      _priority: "Low",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.941Z",
      time: 0.3280000000813743,
      request: {
        method: "GET",
        url: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:22:56 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Last-Modified",
            value: "Sat, 20 Jan 2018 17:26:44 GMT"
          },
          {
            name: "Server",
            value: "nginx"
          },
          {
            name: "ETag",
            value: 'W/"5a637bd4-1111d"'
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "X-HW",
            value:
              "1563438176.dop044.la3.t,1563438176.cds004.la3.shn,1563438176.cds004.la3.c"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            name: "Cache-Control",
            value: "max-age=315360000, public"
          },
          {
            name: "Accept-Ranges",
            value: "bytes"
          },
          {
            name: "Content-Length",
            value: "24038"
          }
        ],
        cookies: [],
        content: {
          size: 69917,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.3080000005866168,
        receive: 0.019999999494757503,
        _blocked_queueing: -1
      },
      serverIPAddress: "205.185.208.52",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 1
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.942Z",
      time: 0.3079999987676274,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "7578:3E5C:B40D59:E503B4:5D2A6057"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-1332b"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf21c5edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 78635,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.25300000015704427,
        receive: 0.054999998610583134,
        _blocked_queueing: -1
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 1
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.943Z",
      time: 0.2390000008745119,
      request: {
        method: "GET",
        url:
          "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "etag",
            value: 'W/"2ac5f-GvM9Pc1KzcsvOcvD14hfKmjz42o"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "access-control-expose-headers",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=604800, s-maxage=43200"
          },
          {
            name: "timing-allow-origin",
            value: "*"
          },
          {
            name: "x-served-by",
            value: "cache-ams21040-AMS, cache-sjc3140-SJC"
          }
        ],
        cookies: [],
        content: {
          size: 175199,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.20500000027823262,
        receive: 0.03400000059627928,
        _blocked_queueing: -1
      },
      serverIPAddress: "151.139.107.233",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 1
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:24.944Z",
      time: 0.9310000004916219,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/assets/js/docs.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "F5AC:2FEE:FC4CCB:140E666:5D2C8149"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-54e9"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf23c8edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 21737,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.3010000000358559,
        receive: 0.630000000455766,
        _blocked_queueing: -1
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 1
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "memory",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:25.487Z",
      time: 4.719999998997082,
      request: {
        method: "GET",
        url:
          "https://www.google-analytics.com/collect?v=1&_v=j77&aip=1&a=741754197&t=pageview&_s=1&dl=https%3A%2F%2Fgetbootstrap.com%2Fdocs%2F4.3%2Flayout%2Foverview%2F&ul=en-us&de=UTF-8&dt=Overview%20%C2%B7%20Bootstrap&sd=24-bit&sr=1366x768&vp=1349x320&je=0&_u=QACAAAAB~&jid=&gjid=&cid=203491206.1557313304&tid=UA-146052-10&_gid=1415855775.1563251424&z=1984609121",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "v",
            value: "1"
          },
          {
            name: "_v",
            value: "j77"
          },
          {
            name: "aip",
            value: "1"
          },
          {
            name: "a",
            value: "741754197"
          },
          {
            name: "t",
            value: "pageview"
          },
          {
            name: "_s",
            value: "1"
          },
          {
            name: "dl",
            value:
              "https%3A%2F%2Fgetbootstrap.com%2Fdocs%2F4.3%2Flayout%2Foverview%2F"
          },
          {
            name: "ul",
            value: "en-us"
          },
          {
            name: "de",
            value: "UTF-8"
          },
          {
            name: "dt",
            value: "Overview%20%C2%B7%20Bootstrap"
          },
          {
            name: "sd",
            value: "24-bit"
          },
          {
            name: "sr",
            value: "1366x768"
          },
          {
            name: "vp",
            value: "1349x320"
          },
          {
            name: "je",
            value: "0"
          },
          {
            name: "_u",
            value: "QACAAAAB~"
          },
          {
            name: "jid",
            value: ""
          },
          {
            name: "gjid",
            value: ""
          },
          {
            name: "cid",
            value: "203491206.1557313304"
          },
          {
            name: "tid",
            value: "UA-146052-10"
          },
          {
            name: "_gid",
            value: "1415855775.1563251424"
          },
          {
            name: "z",
            value: "1984609121"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0+quic/46",
        headers: [
          {
            name: "pragma",
            value: "no-cache"
          },
          {
            name: "date",
            value: "Tue, 09 Jul 2019 07:26:21 GMT"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "last-modified",
            value: "Sun, 17 May 1998 03:00:00 GMT"
          },
          {
            name: "server",
            value: "Golfe2"
          },
          {
            name: "age",
            value: "781022"
          },
          {
            name: "content-type",
            value: "image/gif"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "alt-svc",
            value: 'quic=":443"; ma=2592000; v="46,43,39"'
          },
          {
            name: "cache-control",
            value: "no-cache, no-store, must-revalidate"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "content-length",
            value: "35"
          },
          {
            name: "expires",
            value: "Mon, 01 Jan 1990 00:00:00 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 35,
          mimeType: "image/gif"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 62
      },
      cache: {},
      timings: {
        blocked: 1.4879999994356186,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.21299999999999997,
        wait: 2.1329999997520352,
        receive: 0.8859999998094281,
        _blocked_queueing: 0.9439999994356185
      },
      serverIPAddress: "172.217.163.174",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [],
          parent: {
            description: "Image",
            callFrames: [
              {
                functionName: "ta",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 15,
                columnNumber: 87
              },
              {
                functionName: "wc",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 24,
                columnNumber: 643
              },
              {
                functionName: "ba",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 24,
                columnNumber: 456
              },
              {
                functionName: "Sa",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 29,
                columnNumber: 267
              },
              {
                functionName: "Ha.D",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 27,
                columnNumber: 446
              },
              {
                functionName: "pc.send",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 63,
                columnNumber: 342
              },
              {
                functionName: "X.b.<computed>",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 39,
                columnNumber: 140
              },
              {
                functionName: "Z.v",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 71,
                columnNumber: 333
              },
              {
                functionName: "Z.D",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 70,
                columnNumber: 175
              },
              {
                functionName: "N.N",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 73,
                columnNumber: 72
              },
              {
                functionName: "rc",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 63,
                columnNumber: 548
              },
              {
                functionName: "z",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 63,
                columnNumber: 580
              },
              {
                functionName: "",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 73,
                columnNumber: 194
              },
              {
                functionName: "",
                scriptId: "8731",
                url: "https://www.google-analytics.com/analytics.js",
                lineNumber: 73,
                columnNumber: 246
              }
            ]
          }
        }
      },
      _priority: "Low",
      _resourceType: "image",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:25.498Z",
      time: 23.087999999916065,
      request: {
        method: "GET",
        url: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:22:56 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Last-Modified",
            value: "Sat, 20 Jan 2018 17:26:44 GMT"
          },
          {
            name: "Server",
            value: "nginx"
          },
          {
            name: "ETag",
            value: 'W/"5a637bd4-1111d"'
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "X-HW",
            value:
              "1563438176.dop044.la3.t,1563438176.cds004.la3.shn,1563438176.cds004.la3.c"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            name: "Cache-Control",
            value: "max-age=315360000, public"
          },
          {
            name: "Accept-Ranges",
            value: "bytes"
          },
          {
            name: "Content-Length",
            value: "24038"
          }
        ],
        cookies: [],
        content: {
          size: 69917,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.1169999996984843,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 4.640999999633757,
        receive: 17.330000000583823,
        _blocked_queueing: 1.0199999996984843
      },
      serverIPAddress: "205.185.208.52",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 644
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:25.515Z",
      time: 171.88499999974738,
      request: {
        method: "GET",
        url:
          "https://srv.carbonads.net/ads/CKYIKKJL.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "segment",
            value: "placement:getbootstrapcom"
          },
          {
            name: "callback",
            value: "_carbonads_go"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:23:23 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Server",
            value: "//srv.buysellads.com"
          },
          {
            name: "Content-Length",
            value: "409"
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          }
        ],
        cookies: [],
        content: {
          size: 544,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 616
      },
      cache: {},
      timings: {
        blocked: 7.502999999198364,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.21799999999999997,
        wait: 163.36499999926937,
        receive: 0.7990000012796372,
        _blocked_queueing: 1.082999999198364
      },
      serverIPAddress: "206.189.18.245",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [
            {
              functionName: "init",
              scriptId: "8733",
              url:
                "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
              lineNumber: 0,
              columnNumber: 625
            },
            {
              functionName: "",
              scriptId: "8733",
              url:
                "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
              lineNumber: 0,
              columnNumber: 37785
            }
          ]
        }
      },
      _priority: "Low",
      _resourceType: "script",
      connection: "46018",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:25.534Z",
      time: 18.557999999757158,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/dist/js/bootstrap.bundle.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          },
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "Origin",
            value: "https://getbootstrap.com"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "7578:3E5C:B40D59:E503B4:5D2A6057"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-1332b"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf21c5edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 78635,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.5150000002902233,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 6.935000000885571,
        receive: 10.107999998581363,
        _blocked_queueing: 1.3710000002902234
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 645
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:25.567Z",
      time: 7.820000000720029,
      request: {
        method: "GET",
        url:
          "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "gzip"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "etag",
            value: 'W/"2ac5f-GvM9Pc1KzcsvOcvD14hfKmjz42o"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "access-control-expose-headers",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=604800, s-maxage=43200"
          },
          {
            name: "timing-allow-origin",
            value: "*"
          },
          {
            name: "x-served-by",
            value: "cache-ams21040-AMS, cache-sjc3140-SJC"
          }
        ],
        cookies: [],
        content: {
          size: 175199,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.3710000006993068,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.5779999992211815,
        receive: 3.8710000007995404,
        _blocked_queueing: 1.2540000006993068
      },
      serverIPAddress: "151.139.107.233",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 645
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:25.599Z",
      time: 7.067000000461121,
      request: {
        method: "GET",
        url: "https://getbootstrap.com/docs/4.3/assets/js/docs.min.js",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:55 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "16"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "F5AC:2FEE:FC4CCB:140E666:5D2C8149"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-54e9"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/javascript; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "cf-ray",
            value: "4f830cf23c8edc81-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 12:22:55 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 21737,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.1860000002896414,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 2.7750000000552975,
        receive: 3.1060000001161825,
        _blocked_queueing: 1.0110000002896413
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "parser",
        url: "https://getbootstrap.com/docs/4.3/layout/overview/",
        lineNumber: 645
      },
      _priority: "High",
      _resourceType: "script",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:26.006Z",
      time: 170.56400000001304,
      request: {
        method: "GET",
        url:
          "https://srv.carbonads.net/ads/CK7DT53I.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [
          {
            name: "segment",
            value: "placement:getbootstrapcom"
          },
          {
            name: "callback",
            value: "_carbonads_go"
          }
        ],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "OK",
        httpVersion: "http/1.1",
        headers: [
          {
            name: "Date",
            value: "Thu, 18 Jul 2019 08:23:24 GMT"
          },
          {
            name: "Content-Encoding",
            value: "gzip"
          },
          {
            name: "Server",
            value: "//srv.buysellads.com"
          },
          {
            name: "Content-Length",
            value: "638"
          },
          {
            name: "Vary",
            value: "Accept-Encoding"
          },
          {
            name: "Content-Type",
            value: "application/javascript; charset=utf-8"
          }
        ],
        cookies: [],
        content: {
          size: 1035,
          mimeType: "application/javascript"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: -1,
        _transferSize: 845
      },
      cache: {},
      timings: {
        blocked: 8.913000000406871,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0.09600000000000009,
        wait: 160.90599999999418,
        receive: 0.6489999996119877,
        _blocked_queueing: 1.6400000004068715
      },
      serverIPAddress: "206.189.18.245",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [
            {
              functionName: "_carbonads_go",
              scriptId: "8733",
              url:
                "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
              lineNumber: 0,
              columnNumber: 35411
            },
            {
              functionName: "",
              scriptId: "8742",
              url:
                "https://srv.carbonads.net/ads/CKYIKKJL.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
              lineNumber: 0,
              columnNumber: 0
            }
          ]
        }
      },
      _priority: "Low",
      _resourceType: "script",
      connection: "46018",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:26.181Z",
      time: 6.754000000000815,
      request: {
        method: "GET",
        url: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:56 GMT"
          },
          {
            name: "last-modified",
            value: "Tue, 01 May 2018 15:52:24 GMT"
          },
          {
            name: "server",
            value: "NetDNA-cache/2.2"
          },
          {
            name: "x-amz-request-id",
            value: "A34D06F5EC46E736"
          },
          {
            name: "etag",
            value: '"3eebbdc4f11d41c0e9fcb81b4b0bb033"'
          },
          {
            name: "x-cache",
            value: "HIT"
          },
          {
            name: "status",
            value: "200"
          },
          {
            name: "cache-control",
            value: "max-age=31104000"
          },
          {
            name: "accept-ranges",
            value: "bytes"
          },
          {
            name: "content-length",
            value: "21135"
          },
          {
            name: "x-amz-id-2",
            value:
              "Gkm1pEBtMAQWj7csflzqZut/RBBbRJ13W7Z4ddYYjcbqQkqq2RvR2MtviZheZ1yrTl/5kun3814="
          },
          {
            name: "expires",
            value: "Sun, 12 Jul 2020 08:22:56 GMT"
          }
        ],
        cookies: [],
        content: {
          size: 21135,
          mimeType: "image/png"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.2539999984860188,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 1.8129999993412056,
        receive: 3.6870000021735905,
        _blocked_queueing: 1.1399999984860187
      },
      serverIPAddress: "94.31.29.32",
      _initiator: {
        type: "script",
        stack: {
          callFrames: [],
          parent: {
            description: "Image",
            callFrames: [
              {
                functionName: "_carbonads_go",
                scriptId: "8733",
                url:
                  "https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom",
                lineNumber: 0,
                columnNumber: 36314
              },
              {
                functionName: "",
                scriptId: "8750",
                url:
                  "https://srv.carbonads.net/ads/CK7DT53I.json?segment=placement:getbootstrapcom&callback=_carbonads_go",
                lineNumber: 0,
                columnNumber: 0
              }
            ]
          }
        }
      },
      _priority: "High",
      _resourceType: "image",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:26.221Z",
      time: 8.834000000206288,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/assets/img/favicons/manifest.json",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 08:22:57 GMT"
          },
          {
            name: "content-encoding",
            value: "br"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "status",
            value: "304"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "E376:57EE:45F102:59AE68:5D302C61"
          },
          {
            name: "etag",
            value: 'W/"5cf77627-1d8"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "application/json; charset=utf-8"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "expires",
            value: "Wed, 05 Jun 2019 08:08:51 GMT"
          },
          {
            name: "cache-control",
            value: "max-age=600"
          },
          {
            name: "cf-ray",
            value: "4f830cfeb9cadca9-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          }
        ],
        cookies: [],
        content: {
          size: 472,
          mimeType: "application/json"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 2.1530000002913874,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 4.385999999683816,
        receive: 2.2950000002310844,
        _blocked_queueing: 2.0910000002913876
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "other"
      },
      _priority: "Medium",
      _resourceType: "manifest",
      _fromCache: "disk",
      pageref: "page_2"
    },
    {
      startedDateTime: "2019-07-18T08:23:26.231Z",
      time: 3.2030000002123415,
      request: {
        method: "GET",
        url:
          "https://getbootstrap.com/docs/4.3/assets/img/favicons/android-chrome-192x192.png",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "Referer",
            value: "https://getbootstrap.com/docs/4.3/layout/overview/"
          },
          {
            name: "User-Agent",
            value:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
          }
        ],
        queryString: [],
        cookies: [],
        headersSize: -1,
        bodySize: 0
      },
      response: {
        status: 200,
        statusText: "",
        httpVersion: "http/2.0",
        headers: [
          {
            name: "date",
            value: "Thu, 18 Jul 2019 05:52:35 GMT"
          },
          {
            name: "x-content-type-options",
            value: "nosniff"
          },
          {
            name: "cf-cache-status",
            value: "HIT"
          },
          {
            name: "age",
            value: "105"
          },
          {
            name: "status",
            value: "304"
          },
          {
            name: "content-length",
            value: "1935"
          },
          {
            name: "last-modified",
            value: "Wed, 05 Jun 2019 07:58:31 GMT"
          },
          {
            name: "server",
            value: "cloudflare"
          },
          {
            name: "x-github-request-id",
            value: "3AF6:6231:120E093:16F243B:5D2C8138"
          },
          {
            name: "etag",
            value: '"5cf77627-78f"'
          },
          {
            name: "expect-ct",
            value:
              'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"'
          },
          {
            name: "vary",
            value: "Accept-Encoding"
          },
          {
            name: "content-type",
            value: "image/png"
          },
          {
            name: "access-control-allow-origin",
            value: "*"
          },
          {
            name: "expires",
            value: "Thu, 18 Jul 2019 09:52:35 GMT"
          },
          {
            name: "cache-control",
            value: "public, max-age=14400"
          },
          {
            name: "accept-ranges",
            value: "bytes"
          },
          {
            name: "cf-ray",
            value: "4f8230bc3ecadc89-MAA"
          },
          {
            name: "x-proxy-cache",
            value: "HIT"
          }
        ],
        cookies: [],
        content: {
          size: 1935,
          mimeType: "image/png"
        },
        redirectURL: "",
        headersSize: -1,
        bodySize: 0,
        _transferSize: 0
      },
      cache: {},
      timings: {
        blocked: 1.4180000000677537,
        dns: -1,
        ssl: -1,
        connect: -1,
        send: 0,
        wait: 0.5729999991118675,
        receive: 1.2120000010327203,
        _blocked_queueing: 1.2790000000677537
      },
      serverIPAddress: "104.20.30.249",
      _initiator: {
        type: "other"
      },
      _priority: "High",
      _resourceType: "other",
      _fromCache: "disk",
      pageref: "page_2"
    }
  ]
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "request"
    };
  }

  handleSelect = eventKey => {
    this.setState({
      activeKey: eventKey
    });
  };

  render() {
    const { activeKey } = this.state;
    const ActiveComponent = components[activeKey];
    return (
      <div>
        <Container fluid>
          <Row className="vh-100">
            <Col xs lg="6" className="overflow-auto h-50 border-top border-right">
              <Video />
            </Col>
            <Col xs lg="6" className="overflow-auto h-50 border-top border-right py-2">
              <Console />
            </Col>
            <Col xs lg="6" className="overflow-auto h-50 border-top border-right py-2">
              <Network />
            </Col>
            <Col xs lg="6" className="overflow-auto h-50 border-top border-right">
              <Row className="networkTabs">
                <Nav
                  variant="tabs"
                  defaultActiveKey="request"
                  activeKey={activeKey}
                  onSelect={this.handleSelect}
                  className="bg-white"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="request">Request</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="response">Response</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <div className="mt-5">
                <ActiveComponent log={networkLogs.entries[0]} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
