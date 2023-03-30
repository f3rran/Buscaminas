export function createCell(row, col) {
    return {
        row,
        col,
        isBomb: false,
        value: 0,
        isFlipped: false,
    }
}