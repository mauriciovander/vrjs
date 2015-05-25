"use strict";
require('source-map-support').install();

var capataz = require('capataz'),
    base = capataz.__dependencies__.base,
    server = capataz.Capataz.run({
        port: 80,
		//customFiles: 'any?',
		logFile: base.Text.formatDate(null, '"./runs/mandelbrot-log-"yyyymmdd-hhnnss".txt"'),
		workerCount: 3
    });

function jobFunction() {
	return /* Please implement! */;
}

var jobs = /* Make an iterable that generates the jobs in the form:
		return {
			info: // Descriptive text.
			imports: // Array of modules to be imported by the clients.
			fun: jobFunction,
			args: // Array of arguments for the jobFunction.
		};
	*/;
	
server.scheduleAll(jobs, 5000, function (scheduled) {
	return scheduled.then(function (result) {
		return /* Do something with the results! */;
	});
}).then(function () {
	/* End the run. */
	server.logger.info("Finished. Stopping server.");
	process.exit();
});