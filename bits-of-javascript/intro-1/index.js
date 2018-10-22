"use strict";

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

//=======================================
//  Initiate a long blocking job
//=======================================
function main() {
  job({ duration: 5000, logging: true });
}

//=======================================
//  Break the long job into multiple
//  shorter yet blocking jobs
//=======================================
function main(numberOfJobs = 5000) {
  const startTime = Date.now();

  [...Array(numberOfJobs).keys()].forEach(function startJob(_, index) {
    if (index == 0 || index == numberOfJobs - 1) {
      return job({ startTime: startTime, logging: true });
    }
    return job();
    // return job({ logging: true });
  });
}

//=======================================
//  Scheduling jobs via the task queue
//=======================================
function main(numberOfJobs = 5000) {
  const startTime = Date.now();

  [...Array(numberOfJobs).keys()].forEach(function startJob(_, index) {
    if (index == 0 || index == numberOfJobs - 1) {
      return setTimeout(() => job({ startTime: startTime, logging: true }), 0);
    }
    return setTimeout(() => job(), 0);
    // return setTimeout(() => job({ logging: true }), 0);
  });
}

// NOTE: this runs the last defined "main" function.
// Comment out the definition/s that you do not want
// to execute.
main();
