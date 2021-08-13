//Load dependencies in some way.
//Async or sync↓
import "nprogress/nprogress.css"
import nProgress from "nprogress"

//Install service worker
const installSwIfNeed = async () => {
    try {
        const registration = await navigator.serviceWorker.register('/service-worker.js')
        console.log('SW registered: ', registration)

        registration.addEventListener("updatefound", async () => {
            console.log("Update found")
            await registration.update()
            // location.reload()
            // if (confirm("发现更新，是否立刻更新？")) {
            //     console.log("User accepted the update of application.")
            //     await registration.update()
            //     console.log("Updated")
            //     location.reload()
            // }else{
            //     console.log("User denied to update application.")
            // }
        })

    } catch (err) {
        console.log('SW registration failed: ', err);
    }
}

const runApplication = (async () => {
    const app = await import("./App")
    app.default()
});

(async () => {
    nProgress.start();
    await runApplication();
    nProgress.done();
    await installSwIfNeed();
})();

