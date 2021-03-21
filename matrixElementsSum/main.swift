func matrixElementsSum(matrix: [[Int]]) -> Int {
    var total = 0
    for i in 0..<matrix[0].count {
        for j in 0..<matrix.count {
            let room = matrix[j][i]
            guard room != 0  else { break }
            total += room
        }
    }
    return total
}
