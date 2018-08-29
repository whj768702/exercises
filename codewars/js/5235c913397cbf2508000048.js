// Create a simple calculator that given a string of operators (+ - * and /)
// and numbers separated by spaces returns the value of that expression
// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7

let high_p = ['*', '/'];
let low_p = ['+', '-'];

function convert_pf(exp) {
    const pf = [];
    const op_stack = [];
    exp = exp.split(" ");
    for (const ch of exp) {
        if ((!high_p.includes(ch)) && (!low_p.includes(ch))) {
            pf.push(ch);
        }
        if (high_p.includes(ch)) {
            while(op_stack.length>0&&high_p.includes(op_stack[op_stack.length-1])){
                pf.push(op_stack[op_stack.length-1]);
                op_stack.pop();
            }
            op_stack.push(ch);
        }
        if (low_p.includes(ch)) {
            while(op_stack.length>0){
                const temp = op_stack.pop();
                pf.push(temp);
            }
            if (op_stack.length<=0) {
                op_stack.push(ch);
            }
        }
    }
    for (const ch of op_stack.reverse()) {
        pf.push(ch);
    }
    return pf;
}

function solve_pf(pf) {
    while(pf.length != 1) {
        for(const i in pf) {
            if (high_p.includes(pf[i]) || low_p.includes(pf[i])) {
                let new_n;
                if(pf[i] == '*') {
                    new_n = pf[i-2]*pf[i-1];
                }else if(pf[i] == '/'){
                    new_n = pf[i-2]/pf[i-1];
                } else if(pf[i] == '+') {
                    new_n = Number.parseFloat(pf[i-2])+Number.parseFloat(pf[i-1]);
                } else{
                    new_n = pf[i-2]-pf[i-1];
                }
                pf[i]= '' + new_n;
                pf.splice(i-2,2);
                break;
            }
        }
    }
    return pf;
}
console.log(solve_pf(convert_pf("2 / 2 + 3 * 4 - 6")));