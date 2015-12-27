## Serverless Example
Serverless-Example is a serverless module around some very elementary bricks.

### What does this project demonstrate?
* `testget1` shows an elementary GET lambda endpoint: `/development/examples/one?test=success`
* `testget2` shows an elementary GET lambda endpoint with two variables as query string parameters: `/development/examples/two?var1=another&var2=succcess`
* `testget3` shows an elementary GET lambda endpoint with a variable as part of the URL : `/development/examples/three/myobject/status`
* `testpost1` shows an elementary POST lambda endpoint: `/development/examples/four` and payload:
```
{
    "var1" : "another",
    "var2" : "succcess"
}
```
* `testpost2` shows a combined POST lambda endpoint (one parameter (`mykey`) inside the url, the other (`value`) over the payload): `/development/examples/five/mykey` and payload:
```
{
    "value" : "myvalue",
}
```


## Usage

Create a serverless project:
```
serverless project create
```

Change to your new serverless project root directory and run:
```
serverless module install https://github.com/remicastaing/serverless-examples
serverless function deploy -a
serverless endpoint deploy -a
```

## Environment Variables
There is no need for environment variables.