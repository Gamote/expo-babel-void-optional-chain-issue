## Description

It seems that `void someFunction?.()` skips the function call in production builds.

I have checked the transpiled code using the debugger and `void someFunction?.()` is transpiled to `undefined` in production builds.

If we do `someFunction?.()` or `void someFunction()` it will work just fine.

### Additional information

- I have tested this on iOS and Android
- I have tested this on SDK 49 and it works as expected
- When starting with `expo start` it works as expected

## Reproduce the issue

1. Clone the repo
2. (optional) Run `nvm use`
3. Run `yarn`
4. Start the app `yarn ios --no-dev` or `yarn android --no-dev`

## Expected behaviour

Three alerts should be shown, one after the other.

## Actual behaviour

Only two alerts are shown.
