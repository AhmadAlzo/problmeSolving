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
    a.split("").forEach((e,i)=>{
        obj[e]++
    })
    if(obj["("]==obj[")"]&&obj["["]==obj["]"]&&obj["{"]==obj["}"]){
    	return true
    }else return false
}
