currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:44.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/solution/tsconfig.json]
{"files":[],"references":[{"path":"./api"},{"path":"./app"}]}

//// [/user/username/projects/solution/api/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"dist","rootDir":"src"},"include":["src"],"references":[{"path":"../shared"}]}

//// [/user/username/projects/solution/api/src/server.ts]
import * as shared from "../../shared/dist";
shared.foo.bar();

//// [/user/username/projects/solution/app/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"dist","rootDir":"src"},"include":["src"],"references":[{"path":"../shared"}]}

//// [/user/username/projects/solution/app/src/app.ts]
import * as shared from "../../shared/dist";
shared.foo.bar();

//// [/user/username/projects/solution/shared/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"dist","rootDir":"src"},"include":["src"]}

//// [/user/username/projects/solution/shared/src/index.ts]
export const foo = { bar: () => { } };


Info 1    [00:00:45.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/solution/api/src/server.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:46.000] Search path: /user/username/projects/solution/api/src
Info 3    [00:00:47.000] For info: /user/username/projects/solution/api/src/server.ts :: Config file name: /user/username/projects/solution/api/tsconfig.json
Info 4    [00:00:48.000] Creating configuration project /user/username/projects/solution/api/tsconfig.json
Info 5    [00:00:49.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/api/tsconfig.json 2000 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Config file
Info 6    [00:00:50.000] Config: /user/username/projects/solution/api/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/solution/api/src/server.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/solution/api/dist",
  "rootDir": "/user/username/projects/solution/api/src",
  "configFilePath": "/user/username/projects/solution/api/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/solution/shared",
   "originalPath": "../shared"
  }
 ]
}
Info 7    [00:00:51.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/api/src 1 undefined Config: /user/username/projects/solution/api/tsconfig.json WatchType: Wild card directory
Info 8    [00:00:52.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/api/src 1 undefined Config: /user/username/projects/solution/api/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:53.000] Starting updateGraphWorker: Project: /user/username/projects/solution/api/tsconfig.json
Info 10   [00:00:54.000] Config: /user/username/projects/solution/shared/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/solution/shared/src/index.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/solution/shared/dist",
  "rootDir": "/user/username/projects/solution/shared/src",
  "configFilePath": "/user/username/projects/solution/shared/tsconfig.json"
 }
}
Info 11   [00:00:55.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared/tsconfig.json 2000 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Config file
Info 12   [00:00:56.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared/src 1 undefined Config: /user/username/projects/solution/shared/tsconfig.json WatchType: Wild card directory
Info 13   [00:00:57.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared/src 1 undefined Config: /user/username/projects/solution/shared/tsconfig.json WatchType: Wild card directory
Info 14   [00:00:58.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared 1 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Failed Lookup Locations
Info 15   [00:00:59.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared 1 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Failed Lookup Locations
Info 16   [00:01:00.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared/src/index.ts 500 undefined WatchType: Closed Script info
Info 17   [00:01:01.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 18   [00:01:02.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/api/node_modules/@types 1 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Type roots
Info 19   [00:01:03.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/api/node_modules/@types 1 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Type roots
Info 20   [00:01:04.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Type roots
Info 21   [00:01:05.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/api/tsconfig.json WatchType: Type roots
Info 22   [00:01:06.000] Finishing updateGraphWorker: Project: /user/username/projects/solution/api/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 23   [00:01:07.000] Project '/user/username/projects/solution/api/tsconfig.json' (Configured)
Info 24   [00:01:08.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/solution/shared/src/index.ts Text-1 "export const foo = { bar: () => { } };"
	/user/username/projects/solution/api/src/server.ts SVC-1-0 "import * as shared from \"../../shared/dist\";\nshared.foo.bar();"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../shared/src/index.ts
	  Imported via "../../shared/dist" from file 'src/server.ts'
	src/server.ts
	  Matched by include pattern 'src' in 'tsconfig.json'

Info 25   [00:01:09.000] -----------------------------------------------
Info 26   [00:01:10.000] Search path: /user/username/projects/solution/api
Info 27   [00:01:11.000] For info: /user/username/projects/solution/api/tsconfig.json :: Config file name: /user/username/projects/solution/tsconfig.json
Info 28   [00:01:12.000] Creating configuration project /user/username/projects/solution/tsconfig.json
Info 29   [00:01:13.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/tsconfig.json 2000 undefined Project: /user/username/projects/solution/tsconfig.json WatchType: Config file
Info 30   [00:01:14.000] Search path: /user/username/projects/solution
Info 31   [00:01:15.000] For info: /user/username/projects/solution/tsconfig.json :: No config files found.
Info 32   [00:01:16.000] Project '/user/username/projects/solution/api/tsconfig.json' (Configured)
Info 32   [00:01:17.000] 	Files (3)

Info 32   [00:01:18.000] -----------------------------------------------
Info 32   [00:01:19.000] Project '/user/username/projects/solution/tsconfig.json' (Configured)
Info 32   [00:01:20.000] 	Files (0) InitialLoadPending

Info 32   [00:01:21.000] -----------------------------------------------
Info 32   [00:01:22.000] Open files: 
Info 32   [00:01:23.000] 	FileName: /user/username/projects/solution/api/src/server.ts ProjectRootPath: undefined
Info 32   [00:01:24.000] 		Projects: /user/username/projects/solution/api/tsconfig.json
Info 32   [00:01:25.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/solution/api/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/solution/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/solution/api/tsconfig.json: *new*
  {}
/user/username/projects/solution/shared/tsconfig.json: *new*
  {}
/user/username/projects/solution/shared/src/index.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/solution/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/solution/api/src: *new*
  {}
/user/username/projects/solution/shared/src: *new*
  {}
/user/username/projects/solution/shared: *new*
  {}

Before request

Info 33   [00:01:26.000] request:
    {
      "command": "references",
      "arguments": {
        "file": "/user/username/projects/solution/api/src/server.ts",
        "line": 2,
        "offset": 12
      },
      "seq": 2,
      "type": "request"
    }
Info 34   [00:01:27.000] Finding references to /user/username/projects/solution/api/src/server.ts position 56 in project /user/username/projects/solution/api/tsconfig.json
Info 35   [00:01:28.000] Search path: /user/username/projects/solution/shared/src
Info 36   [00:01:29.000] For info: /user/username/projects/solution/shared/src/index.ts :: Config file name: /user/username/projects/solution/shared/tsconfig.json
Info 37   [00:01:30.000] Creating configuration project /user/username/projects/solution/shared/tsconfig.json
Info 38   [00:01:31.000] Starting updateGraphWorker: Project: /user/username/projects/solution/shared/tsconfig.json
Info 39   [00:01:32.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared/node_modules/@types 1 undefined Project: /user/username/projects/solution/shared/tsconfig.json WatchType: Type roots
Info 40   [00:01:33.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared/node_modules/@types 1 undefined Project: /user/username/projects/solution/shared/tsconfig.json WatchType: Type roots
Info 41   [00:01:34.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/shared/tsconfig.json WatchType: Type roots
Info 42   [00:01:35.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/shared/tsconfig.json WatchType: Type roots
Info 43   [00:01:36.000] Finishing updateGraphWorker: Project: /user/username/projects/solution/shared/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 44   [00:01:37.000] Project '/user/username/projects/solution/shared/tsconfig.json' (Configured)
Info 45   [00:01:38.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/solution/shared/src/index.ts Text-1 "export const foo = { bar: () => { } };"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/index.ts
	  Matched by include pattern 'src' in 'tsconfig.json'

Info 46   [00:01:39.000] -----------------------------------------------
Info 47   [00:01:40.000] Search path: /user/username/projects/solution/shared/src
Info 48   [00:01:41.000] For info: /user/username/projects/solution/shared/src/index.ts :: Config file name: /user/username/projects/solution/shared/tsconfig.json
Info 49   [00:01:42.000] Finding references to /user/username/projects/solution/shared/src/index.ts position 21 in project /user/username/projects/solution/shared/tsconfig.json
Info 50   [00:01:43.000] Loading configured project /user/username/projects/solution/tsconfig.json
Info 51   [00:01:44.000] Config: /user/username/projects/solution/tsconfig.json : {
 "rootNames": [],
 "options": {
  "configFilePath": "/user/username/projects/solution/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/solution/api",
   "originalPath": "./api"
  },
  {
   "path": "/user/username/projects/solution/app",
   "originalPath": "./app"
  }
 ]
}
Info 52   [00:01:45.000] Starting updateGraphWorker: Project: /user/username/projects/solution/tsconfig.json
Info 53   [00:01:46.000] Config: /user/username/projects/solution/app/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/solution/app/src/app.ts"
 ],
 "options": {
  "composite": true,
  "outDir": "/user/username/projects/solution/app/dist",
  "rootDir": "/user/username/projects/solution/app/src",
  "configFilePath": "/user/username/projects/solution/app/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/solution/shared",
   "originalPath": "../shared"
  }
 ]
}
Info 54   [00:01:47.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/app/tsconfig.json 2000 undefined Project: /user/username/projects/solution/tsconfig.json WatchType: Config file
Info 55   [00:01:48.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/app/src 1 undefined Config: /user/username/projects/solution/app/tsconfig.json WatchType: Wild card directory
Info 56   [00:01:49.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/app/src 1 undefined Config: /user/username/projects/solution/app/tsconfig.json WatchType: Wild card directory
Info 57   [00:01:50.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/tsconfig.json WatchType: Type roots
Info 58   [00:01:51.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/tsconfig.json WatchType: Type roots
Info 59   [00:01:52.000] Finishing updateGraphWorker: Project: /user/username/projects/solution/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 60   [00:01:53.000] Project '/user/username/projects/solution/tsconfig.json' (Configured)
Info 61   [00:01:54.000] 	Files (0)

Info 62   [00:01:55.000] -----------------------------------------------
Info 63   [00:01:56.000] Creating configuration project /user/username/projects/solution/app/tsconfig.json
Info 64   [00:01:57.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/solution/app/src/app.ts 500 undefined WatchType: Closed Script info
Info 65   [00:01:58.000] Starting updateGraphWorker: Project: /user/username/projects/solution/app/tsconfig.json
Info 66   [00:01:59.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared 1 undefined Project: /user/username/projects/solution/app/tsconfig.json WatchType: Failed Lookup Locations
Info 67   [00:02:00.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/shared 1 undefined Project: /user/username/projects/solution/app/tsconfig.json WatchType: Failed Lookup Locations
Info 68   [00:02:01.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/app/node_modules/@types 1 undefined Project: /user/username/projects/solution/app/tsconfig.json WatchType: Type roots
Info 69   [00:02:02.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/app/node_modules/@types 1 undefined Project: /user/username/projects/solution/app/tsconfig.json WatchType: Type roots
Info 70   [00:02:03.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/app/tsconfig.json WatchType: Type roots
Info 71   [00:02:04.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/solution/node_modules/@types 1 undefined Project: /user/username/projects/solution/app/tsconfig.json WatchType: Type roots
Info 72   [00:02:05.000] Finishing updateGraphWorker: Project: /user/username/projects/solution/app/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 73   [00:02:06.000] Project '/user/username/projects/solution/app/tsconfig.json' (Configured)
Info 74   [00:02:07.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/solution/shared/src/index.ts Text-1 "export const foo = { bar: () => { } };"
	/user/username/projects/solution/app/src/app.ts Text-1 "import * as shared from \"../../shared/dist\";\nshared.foo.bar();"


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../shared/src/index.ts
	  Imported via "../../shared/dist" from file 'src/app.ts'
	src/app.ts
	  Matched by include pattern 'src' in 'tsconfig.json'

Info 75   [00:02:08.000] -----------------------------------------------
Info 76   [00:02:09.000] Finding references to /user/username/projects/solution/shared/src/index.ts position 21 in project /user/username/projects/solution/app/tsconfig.json
Info 77   [00:02:10.000] Search path: /user/username/projects/solution/shared/src
Info 78   [00:02:11.000] For info: /user/username/projects/solution/shared/src/index.ts :: Config file name: /user/username/projects/solution/shared/tsconfig.json
Info 79   [00:02:12.000] Search path: /user/username/projects/solution/shared/src
Info 80   [00:02:13.000] For info: /user/username/projects/solution/shared/src/index.ts :: Config file name: /user/username/projects/solution/shared/tsconfig.json
Info 81   [00:02:14.000] response:
    {
      "response": {
        "refs": [
          {
            "file": "/user/username/projects/solution/shared/src/index.ts",
            "start": {
              "line": 1,
              "offset": 22
            },
            "end": {
              "line": 1,
              "offset": 25
            },
            "contextStart": {
              "line": 1,
              "offset": 22
            },
            "contextEnd": {
              "line": 1,
              "offset": 36
            },
            "lineText": "export const foo = { bar: () => { } };",
            "isWriteAccess": true
          },
          {
            "file": "/user/username/projects/solution/api/src/server.ts",
            "start": {
              "line": 2,
              "offset": 12
            },
            "end": {
              "line": 2,
              "offset": 15
            },
            "lineText": "shared.foo.bar();",
            "isWriteAccess": false
          },
          {
            "file": "/user/username/projects/solution/app/src/app.ts",
            "start": {
              "line": 2,
              "offset": 12
            },
            "end": {
              "line": 2,
              "offset": 15
            },
            "lineText": "shared.foo.bar();",
            "isWriteAccess": false
          }
        ],
        "symbolName": "bar",
        "symbolStartOffset": 12,
        "symbolDisplayString": "(property) bar: () => void"
      },
      "responseRequired": true
    }
After request

PolledWatches::
/user/username/projects/solution/api/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/solution/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/solution/shared/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/solution/app/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/solution/api/tsconfig.json:
  {}
/user/username/projects/solution/shared/tsconfig.json:
  {}
/user/username/projects/solution/shared/src/index.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/solution/tsconfig.json:
  {}
/user/username/projects/solution/app/tsconfig.json: *new*
  {}
/user/username/projects/solution/app/src/app.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/solution/api/src:
  {}
/user/username/projects/solution/shared/src:
  {}
/user/username/projects/solution/shared:
  {}
/user/username/projects/solution/app/src: *new*
  {}
