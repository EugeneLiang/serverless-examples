## Serverless Example
Serverless-Example is a serverless module around some very elementary bricks.

### What does this project demonstrate?
* `testget1` shows an elementary GET lambda endpoint: `/development/examples/test1?test=cat`
* `testget2` shows an elementary GET lambda endpoint with two variables as query string parameters: `/development/examples/test2?var1=tic&var2=tac`
* `testget3` shows an elementary GET lambda endpoint with a variable as part of the URL : `/development/examples/test3/blabla/status`
* `testpost` shows an elementary POST lambda endpoint: `/development/examples/test` and payload:
```
{
    "var1" : "tic",
    "var2" : "tac"
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