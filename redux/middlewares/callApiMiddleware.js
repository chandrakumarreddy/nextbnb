export default function callApiMiddleware(data) {
  return (store) => (next) => (action) => {
    return next(action);
  };
}
