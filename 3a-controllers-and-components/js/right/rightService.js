angular.module('clickerApp').service('rightService', ['additionService', function(additionService){
 
    intervals = []
    this.startAutoclicker = () => {
        if (additionService.rightActive){
            additionService.rightCost = additionService.rightCost + 10
            console.log(additionService.rightCost)
            additionService.autoclickerCount = additionService.autoclickerCount + 1;
            intervals.push(setInterval(additionService.add, 1000));
            // additionService.subtractCost(additionService.rightCost)
        }
    }


}])