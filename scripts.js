// array trial
function row_valid(row, number){
        // let row = 0;

        for(col = 0; col <= 2; col++){
            if(array[row][col] === number){
                return false;
            }
        }
      
    console.log(`no duplicates found this row ${row} all goods`);
    return true;
}

function assign(){

    for( let row = 0; row <= 2; row++){

        for( let col = 0; col <= 2; col++){

            let number = generate();
            // console.log(`Current row : ${row} Current column : ${col} Current number to be assigned : ${number}`);
           if(!row_valid(row,number)){
             console.log(`Duplicate values detected : ${number}, generating a replacement`);
            number = generate();

           }else{

            array[row][col] = number;

           }
           

        }   
    } 
}

function generate(){

    return Math.floor(Math.random()*10);
}
let array = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
];

assign();


for(let row of array){

    let row_str = row.join('');

    console.log(row_str);
}

// console.log(row_valid(1));

