//Load dependencies in some way.
//Async or sync↓
import "!!style-loader!css-loader?modules=false!nprogress/nprogress.css"
import nProgress from "nprogress"

//Install service worker
const installSwIfNeed = async () => {
    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js')
        console.log('SW registered: ', registration)
    } catch (err) {
        console.log('SW registration failed: ', err);
    }
}

const runApplication = (async () => {
    const app = await import("./App");
    app.default();
});

(async () => {
    nProgress.start();
    await runApplication();
    nProgress.done();
    await installSwIfNeed();
})();

