import { createAction } from "@reduxjs/toolkit";

export const INCREMENT = createAction<number>("COUNT.INCREMENT")

export const DECREMENT = createAction<number>("COUNT.DECREMENT")
