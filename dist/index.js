/*****  The story of the legandary knight  ***************/

const Graph = () => {

    let chessBoard = new Map();

    function addEdges(board = chessBoard){
        for(let [pos] of board){
            let posArray = pos.split(',');
            let x = parseInt(posArray[0]);
            let y = parseInt(posArray[1]);

            let directions = {
                0: [x + 1, y + 2],
                1: [x + 2, y + 1],
                2: [x - 1, y + 2],
                3: [x - 2, y + 1],
                4: [x - 1, y - 2],
                5: [x - 2, y - 1],
                6: [x + 1, y - 2],
                7: [x + 2, y - 1]
            }

            for(let clock in directions){
                let move = directions[clock].toString()
                if(board.has(move) && !board.get(pos).includes(move)){
                    chessBoard.get(pos).push(move);
                }
            }

        }
    }

    function knightMoves(start, end){
        const paths = [];
        const visited = new Set();
        const queue = [];
        queue.push([start,[start]]);
        while(queue.length > 0){
            let [current,path] = queue.shift();
            visited.add(current);
            if(current === end){
                paths.push(path);
            }
            const neighbors = chessBoard.get(current);
            for(let pos of neighbors){
                if(!visited.has(pos)){
                    queue.push([pos,[...path,pos]]);
                }
            }
        }
        console.log(start, end);
        paths.forEach(item => console.log(item));
    }


    function generateBoard(size = 8){
        let result = [];
        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                chessBoard.set(`${[i,j]}`,[]);
            }
        }
    }

    return {generateBoard,chessBoard,knightMoves,addEdges}

}

let game =  Graph();
game.generateBoard();
game.addEdges();
game.knightMoves('0,0','5,2');



