//Load dependencies in some way.
//Async or sync↓
import "!!style-loader!css-loader?modules=false!nprogress/nprogress.css"
import OffliePluginRuntime from "workbox-webpack-plugin"
import DebugMx from './sz-support/common/debug-mx'
import nProgress from "nprogress"
import { sleep } from "./sz-support/common"


//Install service worker
const installSwIfNeed = async () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
    }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
    });
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         // console.log("Service worker is being installed");
    //         navigator.serviceWorker.register('/service-worker.js').then(registration => {
    //             console.log('SW registered: ', registration);
    //         }).catch(registrationError => {
    //             console.log('SW registration failed: ', registrationError);
    //         });
    //     });
    // }
}
const runApplication = (async () => {
    const app = await import("./App");
    app.default();
});

(async () => {
    nProgress.start();
    await sleep(100);
    await runApplication();
    nProgress.done();
    await installSwIfNeed();
})();

