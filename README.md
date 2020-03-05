# Internal Time Registration App

The timer tracker is built in order to provide an internal time registration service to the employees.

## Instalation and setup

### Cloning the project

```git clone https://git.wd-agency.com/wd-timer/wdt-frontend-v3.git```

### Dependencies and workflow

* Navigate to the `develop` branch and run:

```npm install```

* Work with atomic commits and squash them together:

```
git add .
git commit "commit message"
git rebase -i HEAD~[n]
```
* Commands to remember for branch manipulation:

```
git branch
git branch name-of-your-branch
git checkout name-of-your-branch
git branch --delete name-of-your-branch
git checkout branch-to-merge-into
git merge branch-wanted-to-be-merged
```

* Angular:

```ng serve```

### Branch structure

<pre>
\* master
| \
|  * develop
|  |\
|  | \
|  |  * feature 
</pre>

### Technologies used

* Angular CLI: 9.0.1
* Node: 10.16.3
* Bootstrap: 4.4.1

## Usage

Internal 