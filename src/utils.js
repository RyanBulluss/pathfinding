

function createGrid(height, width) {
    let arr = [];
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push({
                status: "clear"
            })
        }
        arr.push(row)
    }
    arr[0][0].status = "start";
    arr[19][19].status = "end";
    return arr;
}

const directions = [
    {x: 1, y: 0},
    {x: 0, y: 1},
    {x: 0, y: -1},
    {x: -1, y: 0},
]

export {
    createGrid,
    directions
}