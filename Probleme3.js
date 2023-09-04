class linkedList {
  constructor(arr) {
    this.inkdList = arr.map((e,i)=> i<arr.length-1?[e,i+1]:[e,null])}
  addNode(e) {
    this.inkdList[this.inkdList.length-1] = [this.inkdList[this.inkdList.length-1][0],this.inkdList[this.inkdList.length-2][1]+1]
    this.inkdList[this.inkdList.length] = [e,null]
  }
  removeNodes(x){
    let a = this.inkdList.copyWithin()
    for(let i =this.inkdList.length-1;i>0;i--){
      if(this.inkdList[i][0]>x){
        a.splice(i,1)
        for(let j =i;i<a.length-1;i++){
          a[j][1]--
        }
      }
    }
    return a
  }
}
