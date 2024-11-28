

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
    return arr;
}

export {
    createGrid
}