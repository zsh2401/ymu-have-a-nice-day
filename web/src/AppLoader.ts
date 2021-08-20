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
    // alert("考虑到最新疫情防控形势，此软件暂时停止使用。\n只有安全，才能拥有美好的一天。\n就这样，随便吧，就算眼泪掉下来。")
    const app = await import("./App")
    app.default()
}

(async () => {
    nProgress.start();
    await runApplication();
    nProgress.done();
    await pwa();
})();

