<div align="center">
<h1>Sign Android Release</h1>
<p>A GitHub action to sign an APK or AAB.</p>

![Workflow](https://img.shields.io/github/workflow/status/ilharp/sign-android-release/Build?style=flat-square)
[![License](https://img.shields.io/github/license/ilharp/sign-android-release?style=flat-square)](https://github.com/ilharp/sign-android-release/blob/master/LICENSE)

</div>

---

This action will help you sign an Android `.apk` or `.aab` (Android App Bundle) file for release.

## About this fork

Although I post this as a fork of the origin
[r0adkll/sign-android-release](https://github.com/r0adkll/sign-android-release), this is a brand new project.
It's written in [Kotlin/JS](https://kotlinlang.org/docs/js-overview.html)
so Android developers can also easily read the source code and maintain it
without having to learn JavaScript/TypeScript.

Besides, please notice that the inputs and outputs listed below are also incompatible with the original project.
I rearranged them to make them more consistent when forked.

## Usage

```yml
steps:
  - uses: ilharp/sign-android-release@v1 # Or use @nightly
    name: Sign app APK
    id: sign_app
    with:
      releaseDir: app/build/outputs/apk/release
      signingKey: ${{ secrets.ANDROID_SIGNING_KEY }}
      keyAlias: ${{ secrets.ANDROID_KEY_ALIAS }}
      keyStorePassword: ${{ secrets.ANDROID_KEYSTORE_PASSWORD }}
      keyPassword: ${{ secrets.ANDROID_KEY_PASSWORD }}
      buildToolsVersion: 33.0.0

  # Upload your signed file if you want
  - uses: actions/upload-artifact@v3
    with:
      name: Signed app bundle
      path: ${{steps.sign_app.outputs.signedFile}}
```

If you have multiple files to sign:

```yaml
steps:
  - uses: ilharp/sign-android-release@v1 # Or use @nightly
    id: sign_app
    with:
      releaseDir: app/build/outputs/apk/release
      signingKey: ${{ secrets.ANDROID_SIGNING_KEY }}
      keyAlias: ${{ secrets.ANDROID_KEY_ALIAS }}
      keyStorePassword: ${{ secrets.ANDROID_KEYSTORE_PASSWORD }}
      keyPassword: ${{ secrets.ANDROID_KEY_PASSWORD }}
      buildToolsVersion: 33.0.0

  - uses: jungwinter/split@v2
    id: signed_files
    with:
      msg: ${{ steps.sign_app.outputs.signedFiles }}
      separator: ':'

  - name: Example Release
    uses: "marvinpinto/action-automatic-releases@latest"
    with:
      repo_token: "${{ secrets.GITHUB_TOKEN }}"
      automatic_release_tag: "latest"
      prerelease: true
      title: "Release X"
      files: |
        ${{ steps.signed_files.outputs._0 }}
        ${{ steps.signed_files.outputs._1 }}
        ${{ steps.signed_files.outputs._2 }}
        ${{ steps.signed_files.outputs._3 }}
        ${{ steps.signed_files.outputs._4 }}
```

## Inputs

You can set either inputs (in `with` section) or env (in `env` section).

Key|ENV|Usage
-|-|-
releaseDir|ANDROID_RELEASE_DIR|**Optional.** The relative directory path in your project where your Android release file will be located.<br />Defaults to `app/build/outputs/apk/release`.
signingKey|ANDROID_SIGNING_KEY|**Required.** The base64 encoded signing key used to sign your app.
keyAlias|ANDROID_KEY_ALIAS|**Required.** The alias of your signing key.
keyStorePassword|ANDROID_KEYSTORE_PASSWORD|**Required.** The password for your signing keystore.
keyPassword|ANDROID_KEY_PASSWORD|**Optional.** The private password for your signing key.
buildToolsVersion|ANDROID_BUILD_TOOLS_VERSION|**Optional.** The version of Android build tools to use. Defaults to `33.0.0`.

You can prepare your `signingKey` by running this command:

```sh
openssl base64 < some_signing_key.jks | tr -d '\n' | tee some_signing_key.jks.base64.txt
```

Then copy the text to `Settings - Secrets - Action` in your account or organization.

## Outputs

Key|ENV|Usage
-|-|-
signedFile|ANDROID_SIGNED_FILE|The path to the single release file that have been signed.<br />Not set if multiple release files have been signed.
signedFiles|ANDROID_SIGNED_FILES|The paths to the release files that have been signed with this action, separated by `:`.
signedFilesCount|ANDROID_SIGNED_FILES_COUNT|The count of signed release files.

## BUGs & Issues

Feel free to [open issues](https://github.com/ilharp/sign-android-release/issues/new).

## Contributions

PRs are welcome! Feel free to contribute on this project.

## LICENSE

[MIT](https://github.com/ilharp/sign-android-release/blob/master/LICENSE)
