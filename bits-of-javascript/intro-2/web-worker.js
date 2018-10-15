"use stict";

//==========================
//  The worker function
//==========================
function worker_function() {
  /**
   * Generate unique IDs.
   * https://gist.github.com/gordonbrander/2230317
   */
  function ID() {
    return (
      "ID_" +
      Math.random()
        .toString()
        .substr(2, 9)
    );
  }

  /**
   * Fake a blocking job.
   * @param {*} param0
   */
  function job({
    id = ID(),
    duration = 1,
    startTime = Date.now(),
    logging = false,
    trace = false
  } = {}) {
    trace ? console.trace() : null;
    logging ? console.log(`[*] Job ${id} started at:`, startTime) : null;

    while (Date.now() - startTime < duration);

    logging
      ? console.log(
          `[+] Job ${id} finished after: ${Date.now() - startTime}ms\n\n`
        )
      : null;
  }

  onmessage = message => {
    // Start a long blocking job
    job(message.data);
    postMessage(`[+] Web Worker finished the job`);
  };
}
