export function getMaxOccurance(data, stacks) {
    let names = stacks.map(stack => stack.name), maxOccurance = 0;
    data.forEach(column => {
        let sum = 0;
        names.forEach(name => sum += column[name]);
        if(sum > maxOccurance) maxOccurance = sum;
    })
    return maxOccurance;
}

export function getStack(stacks, column, maxSize) {
    return stacks.map(stack => ({
        width: "1rem",
        height: `${(column[stack["name"]] / maxSize) * 100}`,
        ...stack,
    }))
}

export function getDate(ts) {
    const date = new Date(ts);
    if(!date) return "";
    let month = date.getMonth() + 1;
    if(month <= 9) month = '0' + month;
    return `${date.getDate()}/${month}`
}