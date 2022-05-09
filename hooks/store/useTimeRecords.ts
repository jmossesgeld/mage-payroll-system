import { useState, useCallback, SetStateAction, Dispatch, useEffect } from "react";
import { TimeRecord } from "../../lib/types";

var globalTimeRecords = {};
var listeners: Dispatch<SetStateAction<{}>>[] = [];

export default function useTimeRecords() {
  const setTimeRecords = useState({})[1];

  useEffect(() => {
    listeners.push(setTimeRecords);
    return () => {
      listeners = listeners.filter((l) => l !== setTimeRecords);
    };
  }, [setTimeRecords]);

  const dispatch = useCallback(() => {
    listeners.forEach((listener) => listener({}));
  }, []);
}
