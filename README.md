# OpenRappter beta ring

Beta points only at a **prerelease** promoted from a proven canary. This
repository is a maintained pointer, not a divergent code copy.

The current [manifest](.ring/manifest.json) records the real
`v0.1.0-beta.10` tag, exact commit, and measured GitHub archive SHA-256. It is
`unpublished` because no verified installable OpenRappter beta ring artifact is
available. `--ring beta` must fail closed rather than install something else.

Train: `nightly -> alpha -> canary -> beta -> stable`.

Validate with `node scripts/validate-manifest.mjs .ring/manifest.json beta`.
