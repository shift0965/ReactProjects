


const GenerateArrays = (atts)=>{

    const GenerateRandomNumber = (min, max) =>{
        return(Math.floor(Math.random() * (max - min)) + min);
    }

    let array = [];
    for(let i=0; i<atts.total; i++){
        array.push(GenerateRandomNumber(atts.min, atts.max))
    }  

    return array;
}


export default GenerateArrays;