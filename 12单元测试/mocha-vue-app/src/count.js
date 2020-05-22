export const abs = num => {
    let res = num ;

    if(typeof num != "number"){
        return NaN;
    }

    if(num < 0){
        return -num;
    }

    return res;
}
export const add = (...rest) => rest.reduce((prev, next) => prev + next);
