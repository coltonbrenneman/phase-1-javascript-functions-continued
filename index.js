// code your solution here

function saturdayFun(name="roller-skate")
{
    return `This Saturday, I want to ${name}!`;
}

function mondayWork(name="go to the office")
{
    return `This Monday, I will ${name}.`;
}

function wrapAdjective(operator="*"){
    return function (value ="special"){
        return `You are ${operator}${value}${operator}!`;
    }
}