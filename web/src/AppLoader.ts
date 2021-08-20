import "nprogress/nprogress.css"
import nProgress from "nprogress"

//Install service worker
async function pwa() {
    try {
        const registration = await navigator.serviceWorker.register('./sw.js')
        console.log('SW registered: ', registration)
        registration.addEventListener("updatefound", async () => {
            console.log("Update found")
            await registration.update()
            console.log("Updated")
        })

    } catch (err) {
        console.log('SW registration failed: ', err);
    }
}

async function runApplication(){
    const app = await import("./App")
    app.default()
}

(async () => {
    nProgress.start();
    await runApplication();
    nProgress.done();
    await pwa();
})();

