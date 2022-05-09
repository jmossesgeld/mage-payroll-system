import { useState, useCallback, SetStateAction, Dispatch, useEffect } from "react";
import { Period } from "./../../lib/types";

var globalPeriodState = { from: "", to: "" };
var listeners: Dispatch<SetStateAction<{}>>[] = [];

export default function usePeriod() {
  const [period, setPeriod] = useState({});

  // Add setState to listeners
  useEffect(() => {
    listeners.push(setPeriod);
    return () => {
      listeners = listeners.filter((l) => l !== setPeriod);
    };
  }, [setPeriod]);

  const dispatch = useCallback(() => {
    listeners.forEach((listener) => listener({}));
  }, []);

  const setGlobalPeriodState = useCallback(
    (period: Period) => {
      globalPeriodState = period;
      dispatch();
    },
    [dispatch]
  );

  return { period: globalPeriodState, setPeriod: setGlobalPeriodState };
}
