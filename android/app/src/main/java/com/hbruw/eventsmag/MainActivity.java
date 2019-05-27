package com.hbruw.eventsmag;

// import com.facebook.react.ReactActivity;
import com.reactnativenavigation.NavigationActivity;
import android.os.Bundle;

public class MainActivity extends NavigationActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    // @Override
    // protected String getMainComponentName() {
    //     return "EventsMag";
    // }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // set theme back to main app theme
        setTheme(R.style.AppTheme);
        super.onCreate(savedInstanceState);
    }
}
