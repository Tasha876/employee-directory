import { useEffect } from "react"

const useMemoAlways = (fn, arg, id, memo, setMemo) => {
    let result = null
        if (memo[id]) {
            console.log('memo',memo[id])
            return memo[id]
        }
        else if (arg) {
            result = fn(arg)
            setMemo({...memo,[id]:result})
            console.log('comp',result)
            return result
        }
    return result
}


export {
    useMemoAlways
}