# To publish on testFlight

expo build:ios

xcrun altool --upload-app -f path/to/archive.ipa -u duver.arthur@gmail.com

# To publish on android console

expo build:android

?

# To publish on expo:

expo start
expo publish
