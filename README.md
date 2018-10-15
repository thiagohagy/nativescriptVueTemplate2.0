
# NativeScript-Vue Application with some ultilities for starting a new app:

* "Keep me logged" option
* Login, register and home page pre built
* Auth interceptor to redirect to login page when user are not authenticated
* Http interceptor to create authenticated routes
* Activity Indicator at action bar that start and stop with http requests
* Side Drawer menu (opening option on "Menu" or swipping left)
* Action bar with custom naming of pages, via props
* Global mixin
* Centralized state manager with Vuex
* Toast notifications

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```


# Screenshots


Register page              |  Login page               | Drawer menu with links
:-------------------------:|:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/thiagohagy/NativeScriptVueTemplate2.0/master/screenshots/1.png)  |  ![](https://raw.githubusercontent.com/thiagohagy/NativeScriptVueTemplate2.0/master/screenshots/2.png) |  ![](https://raw.githubusercontent.com/thiagohagy/NativeScriptVueTemplate2.0/master/screenshots/3.png)

Data list at home page     |  About page               |  Loading indicator working at action bar
:-------------------------:|:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/thiagohagy/NativeScriptVueTemplate2.0/master/screenshots/4.png)  |  ![](https://raw.githubusercontent.com/thiagohagy/NativeScriptVueTemplate2.0/master/screenshots/5.png) |  ![](https://raw.githubusercontent.com/thiagohagy/NativeScriptVueTemplate2.0/master/screenshots/6.png)