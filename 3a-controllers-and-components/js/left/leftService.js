angular.module('clickerApp').service('leftService', ['additionService',function(additionService){
    
    this.additionService = additionService
    this.color = 'gray'
    this.active = false



}])