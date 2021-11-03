import "nprogress/nprogress.css"
import nProgress from "nprogress"

//Install service worker
async function pwa() {
    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js')
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

async function runApplication() {
    setTimeout(() => {
        alert("不知道是谁把这玩意儿泄露出来的，搞得满学校人用，我去TM都别用了！")
    }, 1);
    // const app = await import("./App")
    // app.default()
}

(async () => {
    nProgress.start();
    await runApplication();
    nProgress.done();
    await pwa();
})();

