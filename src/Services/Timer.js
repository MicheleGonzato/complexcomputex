const Timer = {

    time: function(fun, params) {
        var startTime = performance.now()
        fun({...params});
        var endTime = performance.now()

        return endTime - startTime;

      },

    tripleTime: function(fun, params) {
        let times = [];
        //controllare se in caso fun ordini un array, dalla seconda iterazione non trovi l'array già ordinato
        times.push(this.time(fun, params));
        times.push(this.time(fun, params));
        times.push(this.time(fun, params));
        return times.sort();
    }


}



export default Timer;