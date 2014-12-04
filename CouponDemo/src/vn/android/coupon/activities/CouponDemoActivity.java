package vn.android.coupon.activities;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class CouponDemoActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        loadUrl("file:///android_asset/www/login.html");
    }
}