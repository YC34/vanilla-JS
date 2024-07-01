const espressoKcal = 10;
const milkKcal = 170;
const chocoKcal = 50;
const whippedCreamKcal =  60;
const unit = " kCal";

console.log("에스프레소 칼로리 : " + espressoKcal + unit);
console.log("라떼 칼로리 : " + (espressoKcal + milkKcal) +  unit);
console.log("모카 칼로리 : " + (espressoKcal + chocoKcal+milkKcal) + unit);
console.log("모카(휘핑 추가) 칼로리 : " + (espressoKcal + chocoKcal + milkKcal + whippedCreamKcal) + unit);