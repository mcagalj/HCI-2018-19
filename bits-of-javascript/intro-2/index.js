"use strict";

if (window.Worker) {
  // Normally you would create a new web worker object as follows:
  // const web_worker = new Worker('my_web_worker.js').
  // However, due to security restrictions Chrome does not allow
  // to load Web Worker when running from a local file.
  // This is a workaround (https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker).
  const web_worker = new Worker(
    URL.createObjectURL(
      new Blob(["(" + worker_function.toString() + ")()"], {
        type: "text/javascript"
      })
    )
  );

  // Initiating a long job on a separate thread
  const message = { duration: 10000, logging: true };
  web_worker.postMessage(message);

  // Process a message from the worker
  web_worker.onmessage = message => console.log(message.data);
}
