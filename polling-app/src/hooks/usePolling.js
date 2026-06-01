import { useCallback, useEffect, useRef, useState } from "react";

export function usePolling(fn, ms = 6000, runNow = true) {
  const [state, setState] = useState({ data: null, loading: true, error: null, updatedAt: null });
  const savedFn = useRef(fn);
  const alive = useRef(true);

  useEffect(() => { savedFn.current = fn; }, [fn]);

  const run = useCallback(async () => {
    try {
      const data = await savedFn.current();
      if (!alive.current) return;
      setState({ data, loading: false, error: null, updatedAt: new Date() });
    } catch (error) {
      if (!alive.current) return;
      setState((s) => ({ ...s, loading: false, error }));
    }
  }, []);

  useEffect(() => {
    alive.current = true;
    if (runNow) run();
    const id = setInterval(run, ms);
    return () => {
      alive.current = false;
      clearInterval(id);
    };
  }, [run, ms, runNow]);

  return { ...state, refetch: run };
}
