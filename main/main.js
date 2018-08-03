module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`,
                `o) 最大值 = ${sequence.max()}`,
                `o) 平均值 = ${sequence.average()}`,
                `o) 元素数量 = ${sequence.length}`);
};

class Sequence {
  constructor() {
    this.sequence=sequence;
  }

  minimum() {
    var min=this[0];
    var len=this.length;
    for(i=1;i<len;i++){
       if(this[i]<min){
         min=this[i];
       } 
    }
    return min;
  }

  max() {
    var max=this[0];
    var len=this.length;
    for(i=1;i<len;i++){
       if(this[i]>max){
         max=this[i];
       } 
    }
    return max;
  }

  average() {
    var sum=this[0];
    var len=this.length;
    for(i=1;i<len;i++){
        sum+=this[i];
    } 
    return sum/len;
  }
}
