// code your solution here
function saturdayFun(activity) {
    switch (activity) {
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!";
            break;
            
            default:
                return "This Saturday, I want to roller-skate!";
                break;

    }
}
function mondayWork(activity){
    switch (activity) {
        case "work from home":
            return "This Monday, I will work from home.";
            break;

            default:
                return "This Monday, I will go to the office.";
                break;
    }
}
function wrapAdjective(wrapper="*") {
    
        return function(adjective=" a hard worker"){
            return`You are ${wrapper}${adjective}${wrapper}!`
        }
    }
    
