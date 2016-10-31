#Errata for *Pro AngularJS*

On Page 7 of Chapter 1, Getting ready:

In Section How Do You Set Up Your Development Environment, sub section Installing the Web Server, the author uses the Node module “Connect” to create the server component with the following code:

```var connect = require(' connect');
connect.createServer( connect.static("../ angularjs") ).listen( 5000);```

Version 3.X of connect longer has `static` included. It has since been moved to a separate module named `serve-static`.

`serve-static` may be installed using:

```npm install serve-static -g```

To install the package in the working directory. With this the code above would then change to

```var connect = require('connect');
var serveStatic = require(‘serve-static);
connect.createServer( serveStatic("../angularjs") ).listen( 5000);```

With these changes, the user will be able to properly follow along with the examples.

***
