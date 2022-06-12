export const BubbleSort = (array, {setArray}) =>{

    const delay = 1;

    var newArray = [...array];

    for(let i=0; i<newArray.length; i++){
        for(let j=0; j<newArray.length-1; j++){
            if(newArray[j] > newArray[j+1]){
                let temp = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
                setTimeout(() => {
                    setArray(newArray);
                    console.log(i + ' ' + j);
                }, delay);
            }
        }
    }
}

