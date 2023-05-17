package com.msf.myapp;

import androidx.activity.result.ActivityResultLauncher;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;

import com.facebook.react.PackageList;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.soloader.SoLoader;

import java.sql.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private final int OVERLAY_PERMISSION_REQ_CODE = 1;  // Choose any value
    private ReactInstanceManager mReactInstanceManager;
    private ReactRootView mReactRootView;

    private int requestCode = -1;
    private ActivityResultLauncher<Intent> resultHandler = null;


    @Override
    @Deprecated
    public final void startActivityForResult(Intent intent, int requestCode) {
        this.requestCode = requestCode;
        if (resultHandler != null) {
            resultHandler.launch(intent);
        }
    }

    public void onRNClick(){
        SoLoader.init(this, false);
                mReactRootView = new ReactRootView(this);
                List<ReactPackage> packages = new PackageList(getApplication()).getPackages();
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                // Remember to include them in `settings.gradle` and `app/build.gradle` too.

//        HashMap<String, String> temp = new HashMap<>();
//        temp.put("name", "Alex");
//        temp.put("value", "42");
//        ArrayList<HashMap<String, String>> scoreMap = new ArrayList<>();
//        scoreMap.add(temp);
//        scoreMap[0].put("name", "Alex");
//        scoreMap[0].put("value", "42");
//        scoreMap[1].put("name", "Joel");
//        scoreMap[1].put("value", "10");
//        Bundle initialProps = new Bundle();
//        initialProps.putSerializable("name", scoreMap);
//        initialProps.putString("value", "42");
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!! ---> 2");
        mReactInstanceManager = ReactInstanceManager.builder()
                        .setApplication(getApplication())
                        .setCurrentActivity(this)
                        .setBundleAssetName("index.android.bundle")
                        .setJSMainModulePath("index")
                        .addPackages(packages)
                        .setUseDeveloperSupport(BuildConfig.DEBUG)
                        .setInitialLifecycleState(LifecycleState.RESUMED)
                        .build();
                // The string here (e.g. "MyReactNativeApp") has to match
                // the string in AppRegistry.registerComponent() in index.js
                mReactRootView.startReactApplication(mReactInstanceManager, "SettingsIndex", null);

                setContentView(mReactRootView);

    }

    public void gotoDashboard(){
        SoLoader.init(this, false);
                mReactRootView = new ReactRootView(this);
                List<ReactPackage> packages = new PackageList(getApplication()).getPackages();
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                // Remember to include them in `settings.gradle` and `app/build.gradle` too.

        mReactInstanceManager = ReactInstanceManager.builder()
                        .setApplication(getApplication())
                        .setCurrentActivity(this)
                        .setBundleAssetName("index.android.bundle")
                        .setJSMainModulePath("index")
                        .addPackages(packages)
                        .setUseDeveloperSupport(BuildConfig.DEBUG)
                        .setInitialLifecycleState(LifecycleState.RESUMED)
                        .build();
                // The string here (e.g. "MyReactNativeApp") has to match
                // the string in AppRegistry.registerComponent() in index.js
                mReactRootView.startReactApplication(mReactInstanceManager, "DashboardIndex", null);

                setContentView(mReactRootView);

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        final Button button = findViewById(R.id.rn_settings);
        final Button dashbaordButton = findViewById(R.id.rn_dashboard);

        System.out.println("!!!!!!!!!!!!!!!!!!!!!!! ---> 1");
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                onRNClick();
            }
        });

        dashbaordButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                gotoDashboard();
            }
        });

//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
//            if (!Settings.canDrawOverlays(this)) {
//                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
//                        Uri.parse("package:" + getPackageName()));
//                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
////                new ActivityResultContracts.StartActivityForResult();
//            }
//        }
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted
                }
            }
        }
        mReactInstanceManager.onActivityResult(this, requestCode, resultCode, data);
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

//    @Override
//    protected void onResume() {
//        super.onResume();
//
//        if (mReactInstanceManager != null) {
//            mReactInstanceManager.onHostResume(this, (DefaultHardwareBackBtnHandler) this);
//        }
//    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
        if (mReactRootView != null) {
            mReactRootView.unmountReactApplication();
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}