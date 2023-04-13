//TEST 20

const matriz =  [[5, 3, 0, 0, 7, 0, 0, 0, 0], 
                 [6, 0, 0, 1, 9, 5, 0, 0, 0], 
                 [0, 9, 8, 0, 0, 0, 0, 6, 0], 
                 [8, 0, 0, 0, 6, 0, 0, 0, 3], 
                 [4, 0, 0, 8, 0, 3, 0, 0, 1], 
                 [7, 0, 0, 0, 2, 0, 0, 0, 6], 
                 [0, 6, 0, 0, 0, 0, 2, 8, 0], 
                 [0, 0, 0, 4, 1, 9, 0, 0, 5], 
                 [0, 0, 0, 0, 8, 0, 0, 7, 9]]
                 
function sudoku (matriz){

    for(let i= 0; i<9;i++)
    {
        for(let j=0; j<9;j++)
        {
                
            if(matriz[i][j] == 0)
            {
                for(let x=1; x<10;x++)
                {
                    if(encontrarNum(matriz,i, j,x))
                    {
                        matriz[i][j]= x;
                            if (sudoku(matriz)){
                                return true;
                            }else{
                                matriz[i][j]= 0;
                                }
                    }
                }
                    return false;
            }
        }
    }
        console.log(matriz)
        return true;
}
                
function encontrarNum (matriz, fila, columna, num){
                
    for(let x=0; x<=8;x++){
        if(matriz[fila][x] == num){
            return false
        }
    }
    for(let x=0; x<=8;x++){
        if(matriz[x][columna] == num){
            return false
        }
    }
    let  inicioFila = fila- fila % 3;

    let  incioColumna = columna - columna % 3;
                          
    for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (matriz[i + inicioFila][j + incioColumna] == num){
                    return false;}}
    } 
                    return true;                 
}
if(sudoku(matriz)){
    console.log('Si tiene solución')
}else{
    console.log('No tiene solución')
}

//BONUS TEST 20
/*
    public class sudokuApex {
    public static boolean sudoku(List<List<Integer>> matriz){
    
	for(integer i= 0; i<9;i++)
    {
        for(integer j=0; j<9;j++)
        {   
            if(matriz[i][j] == 0)
            {
                for(integer x=1; x<10;x++)
                {
                    if(encontrarNum.getNumber(matriz,i,j,x))
                    {
                        matriz[i][j]= x;
                            if (sudoku(matriz)){
                                return true;
                            }else{
                                matriz[i][j]= 0;
                                }
                    }
                }
                    return false;
            }
        }
    }
		system.debug(matriz);
        return true;
        
    }
}

public class encontrarNum{
	public static boolean getNumber(List<List<Integer>> matriz, integer fila, integer columna, integer num){
                
    for(integer x=0; x<=8; x++){
        if(matriz[fila][x] == num){
            return false;
        }
    }
    for(integer x=0; x<=8;x++){
        if(matriz[x][columna] == num){
            return false;
        }
    }
    integer  inicioFila = fila- Math.mod(columna,3);

    integer  incioColumna = columna - Math.mod(columna,3) ;
                          
    for(integer i = 0; i < 3; i++){
            for(integer j = 0; j < 3; j++){
                if (matriz[i + inicioFila][j + incioColumna] == num){
                    return false;}}
    } 
                    return true;                 
}
}
*/
