# Foundry Plugin Template

This is a foundry plugin template that I use. I assume absolutely no responsibility for anything that goes wrong if you decide to use it yourself.

# TypeScript:

If you wish to use TypeScript, please see the [TypeScript](https://github.com/eddiedover/foundry-plugin-template/tree/typescript) branch.

# Before Use:
1. Look for instances of `your-module-name`, `YourName`, `Your@Email.com`, `YourEmail` and replace them.
2. Make sure you have edited any relevant urls in the following files: `package.json`, `git-conventional-commits.yml`, `FUNDING.yml`. (There may be others, just keep an eye out)


# Features
- Uses JSDoc/eslint to give basic typing & intellisense support.
- Has working example of ES6 unit tests that deal with foundry specific elements.
- SCSS styling.
- An example of basic localization.
- An example of how create & use a new dialog window.
- Automatic semantic versioning and changelog generation.
- Auto compiles a new release any time a tag with the syntax `vX.Y.Z` is pushed to the main branch. The zip/manifest files are then attached to the release.
- Allows fast creation of zipped builds for beta distribution
- Generates changelog using conventional commits.

# To Use

1. Copy the files from this repo to a folder of your choice, then rename things as requested in the `Before Use` section.
2. Rename the `foundryconfig.example.json` to `foundryconfig.json` then edit it to point to your local Foundry location.
3. `npm install` - Download & Setup the required packages
4. `npm run build` - Build the module
5. `npm run link-project` - Link the build folder to your foundry installation. Now, running `npm run build` will change the plugin you have installed while Foundry is running. Then press F5 to reload and pick up the majority of changes.

# Cutting Releases For Your Project

1. When preparing for a new release, use `npm run release` to activate [`commit-and-tag-version`](https://www.npmjs.com/package/commit-and-tag-version#configuration). This package will automatically bump the version number in both the `package.json` and `/src/module.json` files, as well as automatically populate CHANGELOG.md with a new entries for the upcoming release version. The changelog is updated using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and the version numbers are updated using [semantic versioning](https://semver.org/). Use `npm run release:dry` to
2. To cut a new release, make a tag for your main branch with the syntax `vX.Y.Z` then push it to origin. This will start a Github Action which will produce a build, that will then be attached to a release of that same version number. **NOTE:** You can make this automatic by editing the package.json file and changing the `skip` booleans on `commit` and `tag` to true. Then when you use `npm run release` it will also automatically sign, create the tag, and commit it. All you'll need to do then is push it. _(Disclaimer: I don't do this so it may not work 100%. Feel free to update this documentation if you desire.)_

# Generating a package for testers

1. `npm run devexport` will clean your build folders, then create a build for you to distribute to testers at `/dist/your-module-name.zip`. The script moves your files into a folder called `your-module-name` for easy extraction into Foundry's modules folder.

# Terms

This should work on any system but since it makes changes to the filesystem with `npm run devexport` (creating/deleting a folder) use at your own risk.
