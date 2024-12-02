

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

export {
    createGrid
}