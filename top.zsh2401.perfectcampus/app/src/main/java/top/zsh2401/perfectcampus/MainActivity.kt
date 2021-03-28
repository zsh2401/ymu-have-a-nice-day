package top.zsh2401.perfectcampus

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import kotlinx.android.synthetic.main.activity_main.*
import java.util.*


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if(checkPermission()){
            loadWebview()
        }
        supportActionBar?.hide()
        window.statusBarColor = 0xffffff
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if(requestCode === REQUEST_PERMISSION_CODE){
            if(checkPermission(false)){
                loadWebview()
            }else{
                Toast.makeText(this,"没有权限，你什么也做不了...",Toast.LENGTH_SHORT).show()
            }
        }
    }

    val REQUEST_PERMISSION_CODE = 2401
    private fun loadWebview(){
        web_view.webViewClient = object:WebViewClient(){
            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
            ): Boolean {
                if(request?.url?.toString()?.indexOf("coding-pages-bucket-148346-8528767-15123-549478-1252709330.cos-website.ap-shanghai.myqcloud.com") != -1){
                    view?.reload()
                }else{
                    view?.loadUrl(request!!.url.toString())
                }
                return true
            }
        }

        web_view.settings.javaScriptEnabled = true
        web_view.webChromeClient = object: WebChromeClient(){

            override fun onShowFileChooser(
                webView: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>?,
                fileChooserParams: FileChooserParams?
            ): Boolean {
                callback = filePathCallback
                val i = Intent(
                    Intent.ACTION_PICK,
                    MediaStore.Images.Media.EXTERNAL_CONTENT_URI
                )
                startActivityForResult(i, FILE_CHOOSER_RESULT_CODE)
                return true
            }
        }

        this.web_view.loadUrl("https://coding-pages-bucket-148346-8528767-15123-549478-1252709330.cos-website.ap-shanghai.myqcloud.com")
    }
    var callback:ValueCallback<Array<Uri>>? = null
    val FILE_CHOOSER_RESULT_CODE = 2402

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {

        if(requestCode == FILE_CHOOSER_RESULT_CODE && resultCode == Activity.RESULT_OK
            && data != null && data.data != null
            && callback != null){
            callback!!.onReceiveValue(arrayOf(data!!.data!!))
            callback = null
        }else{
            super.onActivityResult(requestCode, resultCode, data)
        }
    }

    private fun checkPermission(doRequest:Boolean = true):Boolean{
        val permissions = LinkedList<String>()
        if(ContextCompat.checkSelfPermission(this,Manifest.permission.READ_EXTERNAL_STORAGE) !=
            PackageManager.PERMISSION_GRANTED){
            permissions.add(Manifest.permission.READ_EXTERNAL_STORAGE)
        }
        if(ContextCompat.checkSelfPermission(this,Manifest.permission.CAMERA) !=
            PackageManager.PERMISSION_GRANTED){
            permissions.add(Manifest.permission.CAMERA)
        }
        if(permissions.size > 0){
            if(doRequest){
                ActivityCompat.requestPermissions(this, permissions.toArray(arrayOf("")),REQUEST_PERMISSION_CODE)
            }
            return false
        }else{
            return true
        }
    }
}