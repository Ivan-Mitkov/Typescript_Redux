// // reducer.ts
// import { useSelector, TypedUseSelectorHook } from 'react-redux'
// interface RootState {
//   isOn: boolean
// }
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
// // my-component.tsx
// import { useTypedSelector } from './reducer.ts'
// const isOn = useTypedSelector(state => state.isOn)
//https://react-redux.js.org/using-react-redux/static-typing#typescript

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
