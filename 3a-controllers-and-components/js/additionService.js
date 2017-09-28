angular.module('clickerApp').service('additionService', ['$interval', function ($interval) {

    const INITIAL_LEFT_COST = 10
    const INITIAL_RIGHT_COST = 15
    const INITIAL_MULTIPLIER = 1.2
    this.multiplier = INITIAL_MULTIPLIER
    this.addend = 1
    this.total = 0
    this.leftCost = INITIAL_LEFT_COST
    this.rightCost = INITIAL_RIGHT_COST
    this.autoclickerCount = 0
    let intervals = []

    this.multiplyAddend = () => {
        this.addend *= this.multiplier
        this.multiplier = this.multiplier + 1
        this.subtractCost(this.leftCost)
        this.leftCost = this.leftCost + 5
        save()
    }

    this.add = () => {
        this.total += this.addend
        console.log(this.total)
        save()
    }

    this.subtractCost = (cost) => {
        this.total = this.total - cost
        save()
    }

    this.startAutoclicker = () => {
        this.autoclickerCount = this.autoclickerCount + 1;
        intervals.push($interval(this.add, 1000));
        this.subtractCost(this.rightCost)
        this.rightCost = this.rightCost + 10
        save()
    }

    this.reset = () => {
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
        save()
    }

    save = () => {
        localStorage.setItem("total", this.total.toString());
        localStorage.setItem("autoclickerCount", this.autoclickerCount.toString());
        localStorage.setItem("addend", this.addend.toString());
        localStorage.setItem("rightCost", this.rightCost.toString());
        localStorage.setItem("leftCost", this.leftCost.toString());
        localStorage.setItem("multiplier", this.multiplier.toString());
    }

    load = () => {
        if (localStorage.getItem("total")) {
            this.total = parseFloat(localStorage.getItem("total"))
        } else {
            this.total = 0;
        }

        if (localStorage.getItem("autoclickerCount")) {
            this.autoclickerCount = parseInt(localStorage.getItem("autoclickerCount"))
        } else {
            this.autoclickerCount = 0;
        }

        if (localStorage.getItem("addend")) {
            this.addend = parseFloat(localStorage.getItem("addend"))
        } else {
            this.addend = 1;
        }

        if (localStorage.getItem("rightCost")) {
            this.rightCost = parseInt(localStorage.getItem("rightCost"))
        } else {
            this.rightCost = INITIAL_RIGHT_COST;
        }

        if (localStorage.getItem("leftCost")) {
            this.leftCost = parseInt(localStorage.getItem("leftCost"))
        } else {
            this.leftCost = INITIAL_LEFT_COST;
        }

        if (localStorage.getItem("multiplier")) {
            this.multiplier = parseFloat(localStorage.getItem("multiplier"))
        } else {
            this.multiplier = INITIAL_MULTIPLIER;
        }

        intervals = [];
        if (this.autoclickerCount > 0) {
            for (let y = 0; y < this.autoclickerCount; y++) {
                intervals.push($interval(this.add, 1000));
            }
        }
    }

    load()

}])