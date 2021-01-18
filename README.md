# GitHub Static Branch

GitHub recently changed its new repository instructions from

```
git remote add origin git@github.com:user/repo.git
git push -u origin master
```
to
```
git remote add origin git@github.com:user/repo.git
git branch -M main
git push -u origin main
```
which will _move your current branch_ to `main`.

This extension will remove all instructions that unexpectedly move branches.
