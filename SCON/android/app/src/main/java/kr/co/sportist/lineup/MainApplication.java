package kr.co.sportist.lineup;
import kr.co.sportist.lineup.BuildConfig;
import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;
import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.fabric.events.EventBeatManager;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage; 
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.facebook.soloader.SoLoader;
import kr.co.sportist.lineup.newarchitecture.MainApplicationReactNativeHost;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Arrays;


public class MainApplication extends Application implements ReactApplication {
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new RNCViewPagerPackage(),
      new MainReactPackage()
    );
  }
  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        protected String getJSMainModuleName() {
          return "index";
        }
      };

  private final ReactNativeHost mNewArchitectureNativeHost =
      new MainApplicationReactNativeHost(this);

  public ReactNativeHost getReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureNativeHost;
    } else {
      return mReactNativeHost;
    }
  }

  public void onCreate() {
    super.onCreate();
    // If you opted-in for the New Architecture, we enable the TurboModule system
    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("kr.co.sportist.lineup.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
