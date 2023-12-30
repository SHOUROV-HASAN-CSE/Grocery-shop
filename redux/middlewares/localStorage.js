// In a separate file (e.g., localStorageMiddleware.js)
const localStorageMiddleware = (store) => (next) => (action) => {
  // Let the action pass through
  next(action);

  // Define the slices you want to track
  const trackedSlices = ['wishlist', 'cart'];

  // Check if the action is relevant to the tracked slices
  if (trackedSlices.some((slice) => action.type.startsWith(`${slice}/`))) {
    // Extract the slice name from the action type
    const sliceName = action.type.split('/')[0];

    // Get the state from the store
    const state = store.getState();

    // Save the relevant state to local storage
    localStorage.setItem(
      sliceName,
      JSON.stringify(state[sliceName][sliceName]),
    );
  }
};

export default localStorageMiddleware;
