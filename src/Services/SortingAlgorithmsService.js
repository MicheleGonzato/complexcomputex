const SortingAlgorithmsService = {

    greets: function(value) {
        console.log('>>> Hello ' + value)
    },

    insertionSort: function(inputArr) {
        let n = inputArr.length;
            for (let i = 1; i < n; i++) {
                // Choosing the first element in our unsorted subarray
                let current = inputArr[i];
                // The last element of our sorted subarray
                let j = i-1; 
                while ((j > -1) && (current < inputArr[j])) {
                    inputArr[j+1] = inputArr[j];
                    j--;
                }
                inputArr[j+1] = current;
            }
        return inputArr;
    },

    merge: function(left, right) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    },

    mergeSort: function(array) {
        const half = array.length / 2
        
        // Base case or terminating case
        if(array.length < 2){
          return array 
        }
        
        const left = array.splice(0, half)
        return this.merge(this.mergeSort(left), this.mergeSort(array))
      }
};

export default SortingAlgorithmsService;