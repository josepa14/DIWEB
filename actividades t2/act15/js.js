window.addEventListener("load", function(){
            var time_start, end_time;
            var boton = this.document.getElementById("boton");
            var meter = this.document.getElementById("meter");
            var input = this.document.getElementById("input");
            // The size in bytes
            var boton2 = this.document.getElementById("recargar");

            boton2.onclick= function(){
                location.reload();
            }
            
            var downloadSize = 5616998;
            time_start = new Date().getTime();
  
            boton.onclick = function () {
                end_time = new Date().getTime();

                var timeDuration = (end_time - time_start) / 1000;
                var loadedBits = downloadSize * 8;
                
               
                var bps = (loadedBits / timeDuration).toFixed(2);
                var speedInKbps = (bps / 1024).toFixed(2);
                var speedInMbps = (speedInKbps / 1024).toFixed(2);

                meter.value=speedInMbps;
                input.value=speedInMbps;
            };
            
})