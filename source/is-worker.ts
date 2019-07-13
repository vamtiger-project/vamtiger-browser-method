declare const DedicatedWorkerGlobalScope: any;

export default function () {
    try {
        return self instanceof DedicatedWorkerGlobalScope;
    } catch(error) {
        return false;
    }
}