angular.module('clickerApp').controller('leftController', ['additionService', function(additionService){

    this.additionService = additionService

    this.canClick = () => this.additionService.total < this.additionService.leftCost

}])