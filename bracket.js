function check(e){
	let a = e.replaceAll(/\w/g,"")
    let obj = {
    	"(":0,
        ")":0,
        "[":0,
        "]":0,
        "{":0,
        "}":0
    }
    let close = [")","]","}"]
    let Open=["(","[","{"]
    let keys = Object.keys(obj)
    a.split("").forEach((e,i)=>{
     	if(close.includes(e)){
           obj[e]++
        }else if(a[i+1]==close[Open.indexOf(e)]||Open.includes(a[i+1])){
        	obj[e]++
        }
    })
    if(obj["("]==obj[")"]&&obj["["]==obj["]"]&&obj["{"]==obj["}"]){
    	return true
    }else return false
}

