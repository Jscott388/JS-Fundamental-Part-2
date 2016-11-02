function findSum(x,y){
    var sum = x;
    for (var i = x+1; i <= y; i++){
        sum += i;
    }
    console.log(sum);
}
findSum(5,12);

function minArr(arr){
    var x = arr;
    var min = arr[0];
    for (var i = 1; i < x.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    console.log(min);
}

minArr([5,10,25,2,-3,20]);

function findAvg(arr2){
    var avgArr = arr2;
    var num = arr2[0];
    for (var i = 1; i < avgArr.length; i++){
        num += arr2[i];
    }
    avg = num / avgArr.length;
    console.log(avg);
}

findAvg([5,10,20,33,-4]);

function sumObj(x, y){
    var newObj = {};
    newObj.x = x;
    newObj.y = y;
    newObj.getSum = function(){
        sum = x;
        for (var i = newObj.x + 1; i <= newObj.y; i++){
            sum += i;
        }
        console.log(sum);
        return;
    }
    return newObj;
}

var findthesum = sumObj(5,6);
findthesum.getSum();

function minObj(arr){
    var newObj = {};
    newObj.arr = arr;
    newObj.getMin = function(){
        var x = arr;
        var min = arr[0];
        for (var i = 1; i < x.length; i++){
            if(min > arr[i]){
                min = arr[i];
            }
        }
        console.log(min);
        return;
    }
    return newObj;
}

var getthemin = minObj([5,8,3,22,4])
getthemin.getMin();


function avgObj(arr){
    var newObj = {};
    newObj.arr = arr;
    newObj.getAvg = function(){
        var num = arr[0];
        for (var i = 1; i < arr.length; i++){
            num += arr[i];
        }
        avg = num / arr.length;
        console.log(avg);
        return;
    }
    return newObj;
}

var average1 = avgObj([5,10,20,33,-4]);
average1.getAvg();


function person(name){
    var personObj = {};
    personObj.name = name;
    personObj.distance_traveled = 0;
    personObj.say_name = function(){
        console.log(name);
        return;
    }
    personObj.say_something = function(message){
        console.log(name, "says", message);
        return;
    }
    personObj.walk = function(){
        personObj.distance_traveled += 3;
        console.log(name, "is walking. Distance travled:", personObj.distance_traveled);
        return;
    }
    personObj.run = function(){
        personObj.distance_traveled += 10;
        console.log(name, "is running. Distance travled:", personObj.distance_traveled);
        return;
    }
    personObj.crawl = function () {
        personObj.distance_traveled += 1;
        console.log(name, "is crawling. Distance travled:", personObj.distance_traveled);
        return;
    }
    return personObj;
}

var joshua = person('Joshua');
joshua.say_name();
joshua.run();
joshua.run();
joshua.run();
joshua.crawl();
joshua.walk();
joshua.say_something("this is cool");
