angular.module("myApp")
.factory("marcopoloService", function(){
	return {
		isMarcoPolo : function(number){ 
			return number%4===0 && number%7===0;
		},
		isMarco : function(number){ 
			return number%4===0 && number%7!==0;
		},
		isPolo : function(number){ 
			return number%4!==0 && number%7===0;
		},
		checkNumber : function(number){ 
				if(this.isMarcoPolo(number)){
					return "marcopolo";
				}else if(this.isMarco(number)){
					return "marco";
				}else if(this.isPolo(number)){
					return "polo";
				}else{
					return number;
				}
		},
		getResult : function(){
			var result = []; 
			for(n=1;n<=100;n++){
				result.push(this.checkNumber(n));
			}
			return result.join(", ");
		}
	}
});
