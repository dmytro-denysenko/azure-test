import { app, HttpHandler, HttpRequest, InvocationContext } from "@azure/functions";

app.http("post-handler", {
  methods: ["POST"],
  authLevel: "function",
  handler: (request: HttpRequest, context: InvocationContext): ReturnType<HttpHandler> => {
    context.log('HTTP trigger function processed a request.');

    console.log(context);
    console.log('__________');
    console.log(request);

    const responseMessage = JSON.stringify(request) + '\n' + JSON.stringify(context);


    return { status: 200, body: responseMessage };
  },
});
