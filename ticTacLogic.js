//let arr = [['X', 'X', ' '], ['X', 'X', ' '], [' ', 'X', ' ']];


//console.log(checkWin(arr, 1, 1, 'X'));



export function checkWin(arr, Index_i, Index_j, symbol) {
    let flag = false;
    // to check rows
    for (let i = Index_i; i <= Index_i; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] == symbol) {
                flag = true;
            }
            else{
                flag = false;
            break;
            }
        }
    }
            

    
    //if flag remains true we have found a winning row
    if (flag == true)
        return flag;
   

    //to check the column
    for (let i = Index_j; i <= Index_j; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[j][i] == symbol) {
               
                
                flag = true;
            }
            else{
                flag = false;
            break;
        }
        }
    }
    
  

// if flag is true we have found winning column
if (flag == true)
    return flag;
// to check for 4 corner elements 
if (Index_i % 2 == 0 && Index_j % 2 == 0) 
    {
    if (Index_i == Index_j) {
        for (let j = 0; j < 3; j++){
            if (arr[j][j] == symbol)
                flag = true;
            else {
                flag = false;
                return flag;
            }}
            if(flag == true)
                return flag;

    }
    else if(Index_i == 0 && Index_j ==2){
        if(arr[0][2] == symbol && arr[1][1] == symbol && arr[2][0] == symbol){
            return true;
            }
            else 
                return false;
        }
           
        
    else if (Index_i == 2 && Index_j ==0){
        if(arr[2][0] == symbol && arr[1][1] == symbol && arr[0][2] == symbol){
            return true;
        }
        else 
            return false;
}
}

//to check for a middle element 1,1

if(Index_i == 1  && Index_j == 1){
    for(let i = 0; i < 3; i++ ){
        if(arr[i][i] == symbol)
            flag = true;
        else{
            flag = false;
            break;
        }

    }
    if(flag == true)
        return flag;
    
    if(arr[2][0] == symbol && arr[0][2] == symbol && arr[1][1] == symbol)
        return true;
    else 
        return false;

}


}