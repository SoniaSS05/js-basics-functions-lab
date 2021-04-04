// Code your solution in this file!
function distanceFromHqInBlocks(distHeadBlock){
    let headquarters = 42;
    let block = Math.abs(distHeadBlock - headquarters);
    return block;
}

function distanceFromHqInFeet(distHeadFeet){
    let block = distanceFromHqInBlocks(distHeadFeet);
    let feet = block*264;
    return feet;
}

function distanceTravelledInFeet(distHeadBlockStart,distHeadBlockEnd){
    let feet = Math.abs(distHeadBlockStart - distHeadBlockEnd)*264;
    return feet;
}

function calculatesFarePrice(start, destination){
   let feet = distanceTravelledInFeet(start, destination);
   let total = 0;
   console.log(feet);
   switch (true){
    case (feet<=400):
        return 0;
    case (feet>400 && feet<=2000):
        total = (feet-400)*0.02;
        return total;
    case (feet >2000 && feet<=2500):
        return 25;
    default:
        return ('cannot travel that far');
   }
}
