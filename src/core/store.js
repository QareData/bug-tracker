export function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState() {
      return state;
    },

    setState(nextStateOrUpdater) {
      const nextState =
        typeof nextStateOrUpdater === "function"
          ? nextStateOrUpdater(state)
          : nextStateOrUpdater;

      if (!nextState || nextState === state) {
        return state;
      }

      state = nextState;
      listeners.forEach((listener) => listener(state));
      return state;
    },

    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}
