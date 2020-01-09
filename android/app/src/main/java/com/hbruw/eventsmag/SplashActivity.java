package com.hbruw.eventsmag;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        setTheme(R.style.SplashTheme);
        super.onCreate(savedInstanceState);
        // setContentView(R.layout.splash_screen_activity);
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}