angular.module('clickerApp').controller('headerController', ['additionService', function(additionService){

    this.additionService = additionService

    this.canClick = () => !(this.additionService.total > 0 || this.additionService.addend > 1 || this.additionService.autoclickerCount > 0
)
}])