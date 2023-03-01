---
sidebar_position: 3
---

# Remote Config

Remote Config is a feature provided by Google Firebase that allows you to change the behavior and appearance of your apps on the fly. The feature enables you to remotely change your app's configuration parameters, such as colors, texts, and layout, which can also be used to customize the user experience.

## Use Remote Config

To use Remote Config, go to „Remote Config“ in your Firebase console, there you can create and manage your configuration parameters.

![Remote Config in Firebase as of March 2023](/img/docs/firebase-remote-config.png)
Remote Config in Firebase as of March 2023

The configuration parameters are stored in key-value pairs, where the key is the name of the parameter and the value is the value of the parameter. The value can be a string, a number, a boolean or a JSON object. Once set you app can access the value, though how you access it depends on the platform you are using.

For detailed information on how to use Remote Config, see the [official documentation](https://firebase.google.com/docs/remote-config).

## Existing Remote Config Parameters and their usage

- `appName24StundenLauf` (`string`) is the name of the app for the 24 Stunden Lauf. It is used in the [24 Stunden Lauf App](http://192.168.56.5:3000/docs/docs/category/24-stunden-lauf-app). It's advised to make these names configurable, so that you can change it easily in case of a typo or if you want to include the current year in the name.
- `appNameMaterialausgabe` (`string`) is the name of the app for the Materialausgabe. It is used in the [Materialausgabe App](http://192.168.56.5:3000/docs/docs/category/materialausgabe).
- `distancePerLap` (`number`) is the distance of one "Birklehofrunde" in meters. It is used in the [24 Stunden Lauf App](http://192.168.56.5:3000/docs/docs/category/24-stunden-lauf-app) to calculate the total distance run.
- `gradeLevels` (`JSON`) is a JSON array that contains the classes as strings (e.g. `"9B"`). It used in various apps to display the classes.
- `houses` (`JSON`) is a JSON array that contains the houses as strings (e.g. `"Studio"`). On top of the houses it also contains `"Extern (Schüler)"` and `"Extern (Kollegium)"`. It used in various apps to display the houses.
- `subjects` (`JSON`) is a JSON array that contains the subjects as json objects with the keys `name` and `abbreviation`. It used in [Teams Name Generator](http://192.168.56.5:3000/docs/docs/category/teams-name-generator) as list to chose the subjects from. A subject looks like this:

```json
{
  "name": "Bildende Kunst",
  "abbreviation": "bk"
},
```

- `teacherAbreviations` (`JSON`) is a JSON array that contains the teacher abbreviations as strings (e.g. `"Abl"`). It used in [Teams Name Generator](http://192.168.56.5:3000/docs/docs/category/teams-name-generator) for the teacher abbreviation input.

## Best Practices

- Always have a default value for your parameters. If you don't, the app will look broken or might even crash.
- Don't use a too high frequency for fetching the parameters. Remember this is for configurations which you might need to change occasionally, if your values changes frequently, you should consider using [Firestore](http://192.168.56.5:3000/docs/docs/firebase/firestore) instead.
- Make your value universally useful (if sensible). If your app need a specific value that nobody else needs it's okay to just add it but if you have something that others might want to use as well, think twice about naming and the data structure.
- **Don't rename parameters, if it's not absolutely necessary!** If you rename a parameter, all apps that use that parameter will need to be updated which cost a lot of time and is error prone.
