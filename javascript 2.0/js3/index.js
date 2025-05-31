function printMessageBasedOnAge() {
    let age = prompt("Please enter your age:")

        
            if (age <= 16 ) {
                console.log("Stay home, study, and get your drivers license");
            } else if (age >= 18 && age <= 21) {
                console.log("Have some fun, but not TOO much fun. You're still a young adult");
            } else if (age > 21) {
                console.log("Have fun. But be responsible. You are in control of your life");
    }
}

printMessageBasedOnAge();
