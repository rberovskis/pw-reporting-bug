# Example repository that can repeat reporting issue where trace data is not available

[Example for bug and its workaround](https://github.com/microsoft/playwright/issues/31541)

In short, looks like its likely related to context not being saved outside of the function. Garbage collection issue maybe? The example of "no longer working" has been working just fine since I've been using playwright. The workaround is included (note that without `afterall()` the traces still end up faulty)
