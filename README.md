

![image](https://user-images.githubusercontent.com/80851030/226700483-755fe676-537f-4fa2-97ce-8af34a8b949f.png)
![image](https://user-images.githubusercontent.com/80851030/226701177-76a29936-51ee-41c9-8b02-6d22ef80a7d4.png)
https://user-images.githubusercontent.com/80851030/226699777-76acf460-73f0-4119-8f34-ff4be755f6ca.mp4
# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
