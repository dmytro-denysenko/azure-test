import { app, HttpHandler, HttpRequest, InvocationContext } from "@azure/functions";

app.http("demo-handler", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",

  route: 'demo-handler/{category:alpha?}/{id:int?}',
  handler: (request: HttpRequest, context: InvocationContext): ReturnType<HttpHandler> => {
    context.log('HTTP trigger function processed a request.');

    console.log(context);
    console.log('__________');
    console.log(request);

    const responseMessage = request.query.toString() + '\n\n' + JSON.stringify(request.params)  + '\n\n' + JSON.stringify(context);

    return { status: 200, body: responseMessage };
  },
});
