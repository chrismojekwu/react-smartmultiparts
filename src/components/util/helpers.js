export const stringInArr = (arr, ext) => {
    let x;
    if(arr === undefined) return false;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i].toLowerCase() === ext){
            x = true;
            break;
        } else x = false;
    };
    return x;
};