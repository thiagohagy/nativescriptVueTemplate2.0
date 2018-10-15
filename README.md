
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
![](https://github.com/thiagohagy/NativeScriptVueTemplate2.0/blob/master/screenshots/1.jpeg)  |  ![](https://github.com/thiagohagy/NativeScriptVueTemplate2.0/blob/master/screenshots/2.jpeg) |  ![](https://github.com/thiagohagy/NativeScriptVueTemplate2.0/blob/master/screenshots/3.jpeg)

Data list at home page     |  About page               |  Loading indicator working at action bar
:-------------------------:|:-------------------------:|:-------------------------:
![](https://github.com/thiagohagy/NativeScriptVueTemplate2.0/blob/master/screenshots/4.jpeg)  |  ![](https://github.com/thiagohagy/NativeScriptVueTemplate2.0/blob/master/screenshots/5.jpeg) |  ![](https://github.com/thiagohagy/NativeScriptVueTemplate2.0/blob/master/screenshots/6.jpeg)