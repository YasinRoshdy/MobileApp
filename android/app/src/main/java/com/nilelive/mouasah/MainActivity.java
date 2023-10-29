package com.nilelive.mouasah;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  protected String getMainComponentName() {
    return "Mouasah";
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Intent intent = new Intent("onConfigurationChanged");
    intent.putExtra("newConfig", newConfig);
    this.sendBroadcast(intent);
  }

}
