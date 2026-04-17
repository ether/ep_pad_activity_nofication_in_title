![Publish Status](https://github.com/ether/ep_pad_activity_nofication_in_title/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_pad_activity_nofication_in_title/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_pad_activity_nofication_in_title/actions/workflows/test-and-release.yml)

# Description
When someone edits a pad if you don't have it focused the title will be prefixed with a *.  Taking focus of that pad will remove the start prefix.

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_pad_activity_nofication_in_title` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_pad_activity_nofication_in_title
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.
