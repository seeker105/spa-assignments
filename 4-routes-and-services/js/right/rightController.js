angular.module('clickerApp').controller('rightController', ['$interval', 'additionService', function($interval, additionService){

    this.additionService = additionService

    this.canClick = () => this.additionService.total < this.additionService.rightCost

}])