const Timer = {

    time: function(fun) {
        var startTime = performance.now()
        fun();
        var endTime = performance.now()

        return endTime - startTime;

      },

    tripleTime: function(fun) {
        let times = [];
        //controllare se in caso fun ordini un array, dalla seconda iterazione non trovi l'array già ordinato
        times.push(this.time(fun));
        times.push(this.time(fun));
        times.push(this.time(fun));
        return times.sort();
    }


}



export default Timer;