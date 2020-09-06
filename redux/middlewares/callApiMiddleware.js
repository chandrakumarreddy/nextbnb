export default function callApiMiddleware() {
    return () => (next) => (action) => {
        return next(action);
    };
}
