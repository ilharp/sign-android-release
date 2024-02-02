buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath("com.diffplug.spotless:spotless-plugin-gradle:6.6.1")
    }
}

plugins {
    kotlin("multiplatform") version "1.9.22"
}

group = "com.ilharper"
version = "0.1.0"

allprojects {
    repositories {
        mavenCentral()
    }
}

kotlin {
    js(IR) {
        nodejs {}
        useCommonJs()
        binaries.executable()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlin-wrappers:kotlin-node:20.11.5-pre.693")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.6.4")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-actions-toolkit:0.0.1-pre.693")

                implementation(npm("@actions/core", "^1"))
                implementation(npm("@actions/exec", "^1"))
                implementation(npm("@actions/io", "^1"))
                implementation(npm("@actions/glob", "^0.3"))
                implementation(npm("chalk", "^4"))
            }
        }
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
