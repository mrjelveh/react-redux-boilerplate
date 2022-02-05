import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";
import logger from "redux-logger";
import { AnyAction } from "@reduxjs/toolkit";

const Middlewares: ThunkMiddleware<{}, AnyAction, undefined>[] &
  {
    withExtraArgument<E>(extraArgument: E): ThunkMiddleware<{}, AnyAction, E>;
  }[] = [thunkMiddleware]; // add the thunk middleware

// using logger middleware just for development purposes
if (process.env.NODE_ENV === "development") {
  Middlewares.push(logger);
}

export default Middlewares;