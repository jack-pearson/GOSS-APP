/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 15:09:25
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-27 16:21:18
 * @FilePath: \GOSS-APP\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "@/reducer";

const logger = createLogger({
  collapsed: true, //true的时候每个打印的action合起来
  duration: true, //每个action持续的时间长短
  timestamp: true, //每个action触发的时间戳
});

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));

export default createStore(rootReducer, createStoreWithMiddleware);
