import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

import reducer from "./reducer";

/**
 * Next Redux wrapper requires a
 * function which returns the store
 */
function buildStore() {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development",
  });
}

/**
 * Create types for store and RootState
 */
type Store = ReturnType<typeof buildStore>;
type RootState = ReturnType<Store["getState"]>;

/**
 * Improves typescript support for default
 * useSelector hook
 * @param fn Selector function
 */
export const useTypedSelector = <T>(fn: (s: RootState) => any) => useSelector<RootState, T>(fn);

export const wrapper = createWrapper<Store>(buildStore);
