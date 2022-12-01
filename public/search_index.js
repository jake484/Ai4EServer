var documenterSearchIndex = {"docs":
[{"location":"#Ai4EServer","page":"Home","title":"Ai4EServer","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Document for Ai4EServer.","category":"page"},{"location":"#Ai4EServer-API","page":"Home","title":"Ai4EServer API","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Meathod API Information\nGET / API列表与示例\nGET /health 测试API状态\nPOST /job 直接返回POST提交内容\nPOST /api/commonjson 计算CommonJson格式的JSON文件\nPOST /api/componentjson 计算ComponentJson格式的JSON文件","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"#API:-/health","page":"Home","title":"API: /health","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using HTTP\r\nres = HTTP.get(\"http://127.0.0.1:8081/health\")\r\n@show String(res.body)","category":"page"},{"location":"","page":"Home","title":"Home","text":"String(res.body) = \"{\\\"Julia-API\\\":\\\"healthy!\\\"}\"","category":"page"},{"location":"#API:-/job","page":"Home","title":"API: /job","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using HTTP\r\nres = HTTP.request(\"POST\", \"http://localhost:8081/job\", [], \"\"\"{\"name\":\"Hello\"}\"\"\")\r\nString(res.body)","category":"page"},{"location":"","page":"Home","title":"Home","text":"String(res.body) = \"{\\\"Your Message\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Hello\\\\\\\"}\\\"}\"","category":"page"},{"location":"#API:-/api/commonjson","page":"Home","title":"API: /api/commonjson","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using HTTP\r\nstr = \"\"\"\r\n{\r\n    \"name\": \"Name\",\r\n    \"pkgs\": [\r\n        \"ModelingToolkit\",\r\n        \"DifferentialEquations\"\r\n    ],\r\n    \"variables\": [\r\n        \"x(t) = 1.0\",\r\n        \"y(t) = 1.0\",\r\n        \"z(t) = 2.0\"\r\n    ],\r\n    \"parameters\": [\r\n        \"σ = 1.0\",\r\n        \"ρ = 3.0\",\r\n        \"β = 5.0\" \r\n    ],\r\n    \"equations\": [\r\n        \"der(x) = σ*(y - x)\",\r\n        \"der(y) = x*(ρ - z) - y\",\r\n        \"der(z) = x*y - β*z\"\r\n    ],\r\n    \"u0\": [\r\n        \"x => 1.0\",\r\n        \"y => 2.0\",\r\n        \"z => 3.0\"\r\n    ],\r\n    \"timespan\": [0,1],\r\n    \"solver\": \"Rosenbrock23\"\r\n}\r\n\"\"\"\r\nres = HTTP.request(\"POST\", \"http://127.0.0.1:8081/api/commonjson\"; body = str)\r\nString(res.body)","category":"page"},{"location":"","page":"Home","title":"Home","text":"String(res.body) = \"{\\\"State\\\":\\\"Success\\\"}\"","category":"page"},{"location":"#API:-/api/modeljson","page":"Home","title":"API: /api/modeljson","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using HTTP\r\nstr = \"\"\"{\r\n    \"name\": \"Project Name\",\r\n    \"pkgs\": [\r\n        \"ModelingToolkit\",\r\n        \"DifferentialEquations\",\r\n        \"Ai4EComponentLib.IncompressiblePipe\"\r\n    ],\r\n    \"components\": [\r\n        {\r\n            \"name\": \"Pump\",\r\n            \"type\": \"CentrifugalPump\",\r\n            \"args\": {\r\n                \"ω\": 5000\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"A\",\r\n            \"type\": \"Sink_P\",\r\n            \"args\": {}\r\n        },\r\n        {\r\n            \"name\": \"B\",\r\n            \"type\": \"Sink_P\",\r\n            \"args\": {}\r\n        },\r\n        {\r\n            \"name\": \"Pipe1\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 2.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe2\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 7.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe3\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 7.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe4\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 9.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe5\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 5.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe6\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 4.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe7\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 5.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe8\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 1.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe9\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 10.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe10\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 2.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe11\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 2.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe12\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 3.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe13\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 2.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe14\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 1.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe15\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 2.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe16\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 3.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe17\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 6.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe18\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 6.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe19\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 6.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe20\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 1.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe21\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 1.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe22\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 7.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe23\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 3.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe24\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 3.0\r\n            }\r\n        },\r\n        {\r\n            \"name\": \"Pipe25\",\r\n            \"type\": \"SimplePipe\",\r\n            \"args\": {\r\n                \"L\": 2.0\r\n            }\r\n        }\r\n    ],\r\n    \"connections\": [\r\n        [\r\n            \"A.port\",\r\n            \"Pump.in\"\r\n        ],\r\n        [\r\n            \"Pump.out\",\r\n            \"Pipe1.in\"\r\n        ],\r\n        [\r\n            \"Pipe1.out\",\r\n            \"Pipe2.in\",\r\n            \"Pipe5.in\"\r\n        ],\r\n        [\r\n            \"Pipe2.out\",\r\n            \"Pipe3.in\",\r\n            \"Pipe6.in\"\r\n        ],\r\n        [\r\n            \"Pipe3.out\",\r\n            \"Pipe4.in\",\r\n            \"Pipe7.in\"\r\n        ],\r\n        [\r\n            \"Pipe4.out\",\r\n            \"Pipe10.out\",\r\n            \"Pipe14.in\"\r\n        ],\r\n        [\r\n            \"Pipe5.out\",\r\n            \"Pipe11.in\",\r\n            \"Pipe12.in\"\r\n        ],\r\n        [\r\n            \"Pipe6.out\",\r\n            \"Pipe8.in\",\r\n            \"Pipe9.in\"\r\n        ],\r\n        [\r\n            \"Pipe7.out\",\r\n            \"Pipe9.out\",\r\n            \"Pipe10.in\"\r\n        ],\r\n        [\r\n            \"Pipe12.out\",\r\n            \"Pipe8.out\",\r\n            \"Pipe13.in\"\r\n        ],\r\n        [\r\n            \"Pipe13.out\",\r\n            \"Pipe14.out\",\r\n            \"Pipe15.in\"\r\n        ],\r\n        [\r\n            \"Pipe11.out\",\r\n            \"Pipe19.in\",\r\n            \"Pipe16.in\"\r\n        ],\r\n        [\r\n            \"Pipe16.out\",\r\n            \"Pipe17.in\",\r\n            \"Pipe20.in\"\r\n        ],\r\n        [\r\n            \"Pipe17.out\",\r\n            \"Pipe18.in\",\r\n            \"Pipe21.in\"\r\n        ],\r\n        [\r\n            \"Pipe18.out\",\r\n            \"Pipe15.out\",\r\n            \"Pipe22.in\"\r\n        ],\r\n        [\r\n            \"Pipe19.out\",\r\n            \"Pipe20.out\",\r\n            \"Pipe23.in\"\r\n        ],\r\n        [\r\n            \"Pipe21.out\",\r\n            \"Pipe22.out\",\r\n            \"Pipe24.in\"\r\n        ],\r\n        [\r\n            \"Pipe23.out\",\r\n            \"Pipe24.out\",\r\n            \"Pipe25.in\"\r\n        ],\r\n        [\r\n            \"B.port\",\r\n            \"Pipe25.out\"\r\n        ]\r\n    ],\r\n    \"u0\": [],\r\n    \"timespan\": [\r\n        0,\r\n        1\r\n    ],\r\n    \"solver\": \"Rosenbrock23\"\r\n}\"\"\"\r\n\r\nres = HTTP.request(\"POST\", \"http://127.0.0.1:8081/api/modeljson\"; body = str)\r\nString(res.body)","category":"page"},{"location":"","page":"Home","title":"Home","text":"String(res.body) = \"{\\\"State\\\":\\\"Success\\\"}\"","category":"page"}]
}
