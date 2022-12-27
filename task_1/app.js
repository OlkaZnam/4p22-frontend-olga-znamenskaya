function validBracketsCount(str) {
    let success = 0, failed = 0
    let stack = []

    function isClosedBracket(bracket) {
        return [")", "]", "}"].indexOf(bracket) > -1
    }

    function convertBracket(bracket) {
        switch (bracket) {
            case ')':
                return '('
            case '}':
                return '{'
            case ']':
                return '['

        }
    }

    for (let i = 0; i < str.length; i++) {
        if (!isClosedBracket(str[i])) {
            stack.push(str[i])
        } else {
            if (stack.length > 0) {
                if (convertBracket(str[i]) == stack[stack.length - 1]) {
                    stack.pop()
                    success += 2
                } else {
                    failed++
                }
            } else {
                failed++
            }
        }
    }

    failed += stack.length

    console.log(`Правильно расставленных скобочек: ${success} шт.; неправильно: ${failed} шт.`)
}

validBracketsCount('([]{})[]')
validBracketsCount('([]]')
