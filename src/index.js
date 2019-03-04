// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000){
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }

    else if(currency > 0){
        var answer = {
            "H": 0,
            "Q": 0,
            "D": 0,
            "N": 0,
            "P": 0
        }
        answer.H = Math.trunc(currency/50);
        currency = currency % 50;

        answer.Q = Math.trunc(currency/25);
        currency = currency % 25;

        answer.D = Math.trunc(currency/10);
        currency = currency % 10;

        answer.N = Math.trunc(currency/5);

        answer.P = currency % 5;

        for (var prop in answer) {
            if(answer[prop] == 0){
                delete answer[prop];
            }
        }
        return answer;   
    }
    else {
        return {};
    }

}

