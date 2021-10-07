import { sortBy } from "lodash";
import { useCallback, useMemo, useState } from "react";

export const useTableSortController = <T extends unknown = unknown, TFieldKeys extends keyof T = keyof T>(data: T[]) => {
  const [state, setState] = useState<{
    fieldKey: TFieldKeys,
    direction: 'asc' | 'desc',
  } | null>(null);

  const isActive = useCallback((fieldKey: TFieldKeys) => {
    return state?.fieldKey === fieldKey;
  }, [state]);

  const getDirection = useCallback((fieldKey: TFieldKeys) => {
    if (fieldKey !== state?.fieldKey) return;

    return state?.direction;
  }, [state]);

  const createSortHandler = useCallback((fieldKey: TFieldKeys) => () => {
    setState((currentState) => {
      if (currentState === null) {
        return {
          direction: 'desc',
          fieldKey,
        };
      }

      if (currentState.fieldKey === fieldKey && currentState.direction === "desc") {
        return {
          direction: 'asc',
          fieldKey,
        };
      }

      return null;
    });
  }, [setState]);

  const sortedData = useMemo(() => {
    if (state === null) return data;

    const sortedData =  sortBy(data, (datum) => datum[state.fieldKey]);

    if (state.direction === "asc") {
      return sortedData.reverse();
    }

    return sortedData;
  }, [state, data]);

  return {
    isActive,
    createSortHandler,
    getDirection,
    data: sortedData,
  };
}
