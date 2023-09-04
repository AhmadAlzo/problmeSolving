function checkEmail(email){
	let split=0
    if(email.includes("@")){
    	
      split=email.split("@")
      if(split.length!=1){
        if(split[0].length>=1&&split[1].includes(".")){
        
          if(split[1].split(".")[0]=="gmail"&&split[1].split(".")[1]=="com"){
            return true
          }
        }
      }
    }
     return false
} 
