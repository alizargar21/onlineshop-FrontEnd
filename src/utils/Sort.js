
export const sortFunction = (list) => {
    list.sort((a , b)=> {
        if(a > b) {
            return -1
        } else if (a < b) {
            return 1
        } else {
            return 0
        }
    })
} 

