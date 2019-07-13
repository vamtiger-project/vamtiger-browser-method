declare const ServiceWorkerGlobalScope: any;

export default function () {
    try {
        return self instanceof ServiceWorkerGlobalScope;
    } catch(error) {
        return false;
    }
}