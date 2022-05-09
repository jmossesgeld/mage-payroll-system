import { useState, useCallback, SetStateAction, Dispatch, useEffect } from "react";
import { TimeRecord } from "../../lib/types";

var globalEmployees: TimeRecord[] = [];
var listeners: Dispatch<SetStateAction<{}>>[] = [];
