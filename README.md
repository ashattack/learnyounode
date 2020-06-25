# learnyounode
code for [learnyounode](https://github.com/workshopper/learnyounode) from [nodeschool](https://nodeschool.io/index.html#workshopper-list)

## directoins
### intsalling nvm and node
```
echo 'fist install nvm with a bash script from it's website'

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 

nvm install 12

npm install -g learnyounode
```

### workshop
0. get instructions

```
echo 'type learnyonode and it will give you instructions'
learnyounode
 ## HELLO WORLD (Exercise 1 of 13)  
   
  Create a file named hello-world.js.  
   
  Write a program that prints the text "HELLO WORLD" to the console  
  (stdout).  
```

1. do challenge

```
echo 'then run the challenges'
code hello-world.js
```

2. commit and push

```
git add hello-world.js
git commit -m "completed first challenge"
git push
```

## Markdown
> this is a quote
- list 
- list
### h3
_something_ __elase__
