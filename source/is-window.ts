export default function () {
    try {
        return self instanceof Window;
    } catch(error) {
        return false;
    }
}