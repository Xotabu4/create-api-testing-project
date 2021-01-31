# Seed project for API tests

This project can be used to quickly prepare project for writting API tests. 


Includes:
- GotJS as HTTP client
- TypeScript and ts-node for better working with request/response models and structures
- Mocha 8 as a test runner
- [http-req-builder](https://github.com/Xotabu4/http-req-builder) to simplify building requests.


## Install
Make directory for your future project:
```
mkdir ./my-shiny-api-tests
```

Navigate into it
```
cd ./my-shiny-api-tests
```
Run (no installing needed!):
```
npm init api-testing-project
```
This will copy all project files into current directory. After done, run (to install your project deps):

```
npm install
```

Optionaly, test with:

```
npm test
```
