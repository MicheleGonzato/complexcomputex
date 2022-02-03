const ArrayGeneratorService = {

    getRandomInt: function(max) {
        return Math.floor(Math.random() * max);
      },

    getRandomArray: function(length, maxValue) {
        let customArray = [];
        for(let i = 0; i < length; i++) {
            customArray.push(this.getRandomInt(maxValue));
        }
        return customArray;
    }

}



export default ArrayGeneratorService;