import Foundation
func isStrictlyIncreasing(a: [Int]) -> Bool {
    for i in 0..<(a.count-1) {
        if a[i] >= a[i+1] {
            return false
        }
    }
    return true
}

func almostIncreasingSequence(sequence: [Int]) -> Bool {
    if isStrictlyIncreasing(a: sequence) {
        return true
    }
    
    var a = sequence, r = [Int]()
    for i in 0..<(a.count-1) {
        if a[i] >= a[i+1] {
            r += [i, i+1]
        }
    }
    let set = Set<Int>(r)
    for i in set.sorted() {
        a = sequence
        a.remove(at: i)
        if isStrictlyIncreasing(a: a) {
            return true
        }
    }
    return false
}

let nums: [Int] = [4,2,1,7,5,8,3]
let res = almostIncreasingSequence(sequence: nums)
print("Respuesta \(res)")
