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

export const fileTypes = (arr) => {
    const list = arr.map((x,i) => {
        if(x === "") return "";
        else
            return `.${x}`;
    });
    return list.join(" ");
}

export const extension = (fileName) => {
    let ext = [];
    for (let i = fileName.length - 1; i > 0; i--) {
        if (fileName[i] === ".") {
            return ext.join("").toLowerCase();
        } else {
            ext.unshift(fileName[i]);
        }
    }
};