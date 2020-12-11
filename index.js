// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
    
    function destructivelyAppendDriver(name) { 
        drivers.push(name);
    }

    function destructivelyPrependDriver(name){
        drivers.unshift(name);
    }

    function destructivelyRemoveLastDriver(){
        drivers.pop()
    }
    
    function destructivelyRemoveFirstDriver(){
        drivers.shift()
    }

    function appendDriver(name){
        const FirstDriver = [...drivers, name];
        return FirstDriver;
    }

    function prependDriver(name){
        const LastDriver = [name, ...drivers];
        return LastDriver;
    }

    function removeLastDriver(){
        const copyOfDrivers = drivers.slice(0, drivers.length - 1)
        return copyOfDrivers;
   
    }

    function removeFirstDriver(){
        const firstdriver = drivers.slice(1)
        return firstdriver;
    }
    

