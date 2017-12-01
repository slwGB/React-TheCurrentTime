import * as Config from '../config/index'
import {LOCAL_TIME} from '../config/actionType'

export const getLocalTime = () => {
    let realTimeStr = new Date().toLocaleString('chinese', {hour12: false})
    return  {type: LOCAL_TIME,realTimeStr}
}