angular.module('clickerApp').service('additionService', ['$interval', function ($interval) {

    const INITIAL_LEFT_COST = 10
    const INITIAL_RIGHT_COST = 10
    const INITIAL_MULTIPLIER = 1.2
    this.multiplier = INITIAL_MULTIPLIER
    this.addend = 1
    this.total = 0
    this.leftCost = INITIAL_LEFT_COST
    this.rightCost = INITIAL_RIGHT_COST
    this.autoclickerCount = 0
    this.rightActive = false
    this.rightColor = 'lightgray'
    this.leftActive = false
    this.leftColor = 'lightgray'
    this.resetActive = false
    this.resetColor = 'lightgray'
    let intervals = []

    updatePage = () => {
        if (this.total > 0 || this.addend > 1 || this.autoclickerCount > 0) {
            this.resetActive = true
            this.resetColor = 'white'
        } else {
            this.resetActive = false
            this.resetColor = 'lightgray'
        }

        if (this.total >= this.leftCost) {
            this.leftActive = true
            this.leftColor = 'white'
        } else {
            this.leftActive = false
            this.leftColor = 'lightgray'
        }

        // if (this.total >= this.rightCost) {
        //     this.rightActive = true
        //     this.rightColor = 'white'
        // } else {
        //     this.rightActive = false
        //     this.rightColor = 'lightgray'
        // }
    }

    this.multiplyAddend = () => {
        if (this.leftActive) {
            this.addend *= this.multiplier
            this.multiplier = this.multiplier + 1
            this.subtractCost(this.leftCost)
            this.leftCost = this.leftCost + 5
            updatePage()
        }
    }

    this.add = () => {
        this.total += this.addend
        console.log(this.total)
        updatePage()
    }

    this.subtractCost = (cost) => {
        this.total = this.total - cost
        updatePage()
    }

    this.startAutoclicker = () => {
        // if (this.rightActive) {
            this.autoclickerCount = this.autoclickerCount + 1;
            intervals.push($interval(this.add, 1000));
            this.subtractCost(this.rightCost)
            this.rightCost = this.rightCost + 10
            updatePage()
        // }

    }

    this.reset = () => {
        if (this.resetActive) {
            for (let x = 0; x < intervals.length; x++) {
            clearInterval(intervals[x]);
                $interval.cancel(intervals[x])
            }
            this.multiplier = INITIAL_MULTIPLIER
            this.addend = 1
            this.total = 0
            this.leftCost = INITIAL_LEFT_COST
            this.rightCost = INITIAL_RIGHT_COST
            this.autoclickerCount = 0
            this.rightActive = false
            this.rightColor = 'lightgray'
            this.leftActive = false
            this.leftColor = 'lightgray'
            this.resetActive = false
            this.resetColor = 'lightgray'
            intervals = []
            updatePage()
        }
    }

}])