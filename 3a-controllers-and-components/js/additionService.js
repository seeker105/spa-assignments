angular.module('clickerApp').service('additionService', [function () {

    this.multiplier = 1.2
    this.addend = 1
    this.total = 0
    this.leftCost = 10
    this.rightCost = 10
    this.autoclickerCount = 0
    this.rightActive = false
    this.rightColor = 'gray'
    this.leftActive = false
    this.leftColor = 'gray'
    this.resetActive = false
    this.resetColor = 'gray'
    intervals = []

    updatePage = () => {
        if (this.total > 0 || this.addend > 1 || this.autoclickerCount > 0){
            this.resetActive = true
            this.resetColor = 'white'
        } else {
            this.resetActive = false
            this.resetColor = 'gray'
        }

        if (this.total >= this.leftCost){
            this.leftActive = true
            this.leftColor = 'white'
        } else {
            this.leftActive = false
            this.leftColor = 'gray'
        }

        if (this.total >= this.rightCost){
            this.rightActive = true
            this.rightColor = 'white'
        } else {
            this.rightActive = false
            this.rightColor = 'gray'
        }
    }

    this.add = () => {
        this.total = this.total + this.addend
        console.log(this.total)
        updatePage()
    }

    this.multiplyAddend = () => {
        if (this.leftActive){
            this.subtractCost(this.leftCost)
            this.addend = this.addend * this.multiplier
            this.leftCost = this.leftCost + 5
            this.multiplier = this.multiplier + 1
        }
    }

    this.subtractCost = (cost) => {
        this.total = this.total - cost
        updatePage()
    }

    this.startAutoclicker = () => {
        // if (this.rightActive){
            //     this.subtractCost(this.rightCost)
            // this.rightCost = this.rightCost + 10
        //     this.autoclickerCount = this.autoclickerCount + 1;
        // intervals.push(setInterval(addAddend, 1000));
        // }



    }

    this.reset = () => {
        if (this.resetActive){
            for (let x = 0; x < intervals.length; x++) {
                clearInterval(intervals[x]);
            }
            this.multiplier = 1.2
            this.addend = 1
            this.total = 0
            this.leftCost = 10
            this.rightCost = 100
            this.autoclickerCount = 0
            this.rightActive = false
            this.rightColor = 'gray'
            this.leftActive = false
            this.leftColor = 'gray'
            this.resetActive = false
            this.resetColor = 'gray'
            intervals = []
            updatePage()
        }
    }
    
}])