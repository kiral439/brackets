module.exports = function check(str, bracketsConfig) {
    const map = {};
    const stack = [];
    let item;
    for(brackets in bracketsConfig) {
          map[bracketsConfig[brackets][0]] = bracketsConfig[brackets][1]
	}
	
	for(let i = 0; i < str.length; i++) {
        item = str[i];
        if(Object.keys(map).includes(map[item])){
            if(stack.includes(map[item])){
                stack.pop();
                continue;
            }
            if(map[item]) {
                stack.push(map[item])
                continue;
            }

        }
        else{
            if(map[item]) {
                stack.push(map[item])
            }
            else{
                if(item !== stack.pop()){
                    return false;
                }
            }
        }
    }
    return stack.length === 0
};
