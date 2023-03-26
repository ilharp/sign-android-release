buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath("com.diffplug.spotless:spotless-plugin-gradle:6.6.1")
    }
}

plugins {
    kotlin("js") version "1.7.20"
}

group = "com.ilharper"
version = "0.1.0"

allprojects {
    repositories {
        mavenCentral()
    }
}

dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.6.4")

    implementation(npm("@actions/core", "^1"))
    implementation(npm("@actions/exec", "^1"))
    implementation(npm("@actions/io", "^1"))
    implementation(npm("@actions/glob", "^0.3"))
    implementation(npm("chalk", "^4"))
}

kotlin {
    js(LEGACY) {
        useCommonJs()
        binaries.executable()
        nodejs()
    }
}

apply(plugin = "com.diffplug.spotless")
configure<com.diffplug.gradle.spotless.SpotlessExtension> {
    format("misc") {
        target("**/*.md", "**/*.editorconfig", "**/*.gitignore", "**/*.gitattributes")
        trimTrailingWhitespace()
        indentWithSpaces()
        endWithNewline()
    }

    kotlin {
        target("**/*.kt")
        ktlint().setUseExperimental(true)
        trimTrailingWhitespace()
        indentWithSpaces()
        endWithNewline()
    }

    kotlinGradle {
        target("**/*.kts")
        ktlint().setUseExperimental(true)
        trimTrailingWhitespace()
        indentWithSpaces()
        endWithNewline()
    }
}
