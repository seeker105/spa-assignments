angular.module('clickerApp').controller('rightController', ['$interval', 'additionService', function($interval, additionService){

    this.additionService = additionService

    this.canClick = () => this.additionService.total < this.additionService.rightCost

    intervals = []
    this.startAutoclicker = () => {
        if (additionService.rightActive){
            // additionService.rightCost = additionService.rightCost + 10
            additionService.autoclickerCount = additionService.autoclickerCount + 1;
            intervals.push($interval(additionService.add, 1000))
            additionService.subtractCost(additionService.rightCost)
        }
    }

    this.stopAutoclickers = () => {
        for (let x = 0; x < intervals.length; x++){
            $interval.cancel(intervals[x])
        }
    }
    



}])