$(document).ready(startProcess);

function startProcess(){
    //load first data
    loadData();
    
}

var worker = new Worker('worker.js'),
	timestamp = Date.now(), max_time = 0, min_time=Infinity, mean_time = 0, N=0;
 
worker.addEventListener('message', function(e) {
    //console.log('Worker said: data = ', e.data);

    var this_time = Date.now() - timestamp;
    max_time = Math.max(this_time,max_time);
    min_time = Math.min(this_time,min_time);

    mean_time = (N*mean_time + this_time)/(++N);
    $('#contents').html(this_time +", " + min_time + ", " + max_time + ", " + mean_time + "<br/>"+ e.data);
    timestamp = Date.now();
    //WORK DONE. ASK FOR MORE DATA:
    loadData();
}, false);

function loadData(){
    $.getJSON('data.php',function(data){
        // Data download complete.
        // Process in worker:
        worker.postMessage(data.samples);
    });

}
