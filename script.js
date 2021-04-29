    // Question 1
    // writing a function that takes the input string and reverses it
    function reverseThisString(string) {
    return string.split("").reverse().join("");
    }
    document.getElementById("1").innerHTML = reverseThisString('Megan McNamee');
    
    
    // Question 2
    //writing a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
    function swapCase(string) {
        var swapped = "";
        for(var i = 0; i<string.length; i++) {
            if(string[i] === string[i].toLowerCase()) {
                swapped += string[i].toUpperCase();
            }
            else {
                swapped += string[i].toLowerCase();
            }
        }
        return swapped;
    }
    document.getElementById("2").innerHTML = swapCase('The Walking Dead');
    
    
    // Question 3
    //converting array of numbers from farenheit to celcius
    var numbers = [23, 32, 41, 50, 59];
    var convertedArray = numbers.map(toCelcius)
    
    function toCelcius(array){
        return (array - 32) * 5 / 9;
    }
    document.getElementById("3").innerHTML = convertedArray;
    
    
    // Question 4
    //writing a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
    var boolNum = [65, 45, 75, 100];
    var boolArr = boolNum.map(passOrFail)
    
    function passOrFail(array){
        if (array >= 75) {
            return true;
        }
        else {
            return false;
        }
    }
    document.getElementById("4").innerHTML = boolArr;
    
    
    // Question 5
    //writing code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    cardinalNumbers.forEach(toGerman)
    
    function toGerman(array, index){
        document.getElementById("5").innerHTML += "'" + array + " is " + germanNumbers[index] + " ' ,     ";
    }
    
    
    // Question 6
    // writing code that returns an array of ONLY prime numbers that are in the array numbers
    const primeArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    
    function returnPrimeNumbers(arr){
        return "The prime numbers are: " + arr.filter((num) => {
     
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        });
    }
    document.getElementById("6").innerHTML = returnPrimeNumbers(primeArr);
    

    // Question 7
    //Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" 
    //instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, 
    //log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
        for(var i = 1; i<101; i++){
            if(i % 3 == 0 && i % 5 != 0) {
                console.log('CSC225 RULES')
            }
            else if(i % 5 == 0 && i % 3 != 0) {
                console.log('I LOVE JAVASCRIPT')
            }
            else if(i % 5 == 0 && i % 3 == 0) {
                console.log('CSC225 RULES I LOVE JAVASCRIPT')
            }
            else {
                console.log(i);
            }
        }