# Claude plugin: neoboard-templates

Claude Code plugin with the skill **create-neoboard-template**: it guides Claude through creating a NeoBoard template in this repository (board definition, metadata, method description), checking it, capturing previews on demo.neoboard.io and publishing it in the gallery on neoboard.io. Templates are published under CC0 1.0; the plugin itself is AGPL-3.0-or-later like the rest of the code.

## Install

The plugin is published in the Nordeck organization library on claude.ai:

```
/plugin install neoboard-templates@claudeai-organization-library
```

Then ask Claude, e.g. „Erstelle eine Vorlage für eine Halloween-Retro und veröffentliche sie auf der Vorlagenseite.“

## Layout

```
claude-plugin/
├── .claude-plugin/plugin.json          # name, version, description
└── skills/create-neoboard-template/
    ├── SKILL.md                         # workflow (five stages)
    ├── references/                      # board definition API, frontmatter, preview capture
    └── scripts/render_sketch.py         # SVG sketch of a .nwb for layout checks
```

## Updating

Keep the skill in line with the repository: when scripts, frontmatter fields or the publishing flow change, update `SKILL.md` and the references in the same pull request.

To release a new version: raise `version` in `.claude-plugin/plugin.json`, merge, then ask Claude Code to publish this folder to the organization (it uses its plugin publishing tool and asks before uploading). The organization library numbers its copies itself.
