# GitHub Static Branch

GitHub recently changed its new repository instructions.

```diff
 git remote add origin git@github.com:user/repo.git
-git push -u origin master
+git branch -M main
+git push -u origin main
```
The above will move your current branch to `main`.

This extension will remove all instructions that unexpectedly move branches.
