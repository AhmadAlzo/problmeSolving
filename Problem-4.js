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

    a.split("").forEach((e,i)=>{
     	if(close.includes(e)){
            if(obj[Open[close.indexOf(e)]]>obj[e]){
                obj[e]++
            }else obj[e]--
        }else if(a[i+1]==close[Open.indexOf(e)]||Open.includes(a[i+1])||i==a.length-1){
        	obj[e]++
        }
    })
    if(obj["("]==obj[")"]&&obj["["]==obj["]"]&&obj["{"]==obj["}"]){
    	return true
    }else return false
}
