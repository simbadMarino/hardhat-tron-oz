# Migrating Hardhat Tests to Tron

## Time manipulation inside `loadFixture`

**Standard Hardhat** — `evm_revert` rolls back everything, including the block timestamp. This makes `time.increaseTo(absoluteTarget)` safe to call in every test that uses `loadFixture`:

```js
it("can withdraw after unlock", async function () {
  const { lock, unlockTime } = await loadFixture(deployFixture);
  await time.increaseTo(unlockTime); // safe on standard Hardhat
  await lock.withdraw();
});
```

**Tron** — `tre_revert` intentionally does not roll back the block timestamp (timestamps advance monotonically with Tron's block production). After the first test calls `time.increaseTo(unlockTime)`, subsequent tests restored by `loadFixture` will find the clock already past `unlockTime`, causing:

```
Error: increaseTo: target 1875046414 must be greater than current 1875046415
```

**Fix** — use `time.increase(delta)` (relative) instead of `time.increaseTo(target)` (absolute). Return the delta from your fixture so every test has access to it:

```js
async function deployFixture() {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
  // ...
  return { lock, unlockTime, lockedAmount, owner, otherAccount, ONE_YEAR_IN_SECS };
}

it("can withdraw after unlock", async function () {
  const { lock, ONE_YEAR_IN_SECS } = await loadFixture(deployFixture);
  await time.increase(ONE_YEAR_IN_SECS); // always moves forward — safe on Tron
  await lock.withdraw();
});
```

`time.increase` moves the clock forward relative to wherever it is after the revert, so it works regardless of how many tests have run before.
