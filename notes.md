Steps for updating the website:
1. Update Dev with updated angular code
2. Go to Dev Home directory
3. Generate `dist` content using `ng build`
4. Copy contents inside dist/omramastudio (all files in parallel with index.html) AND Paste the copied files with in docs folder
5. git add . && git commit -m 'updates' && git push


Bash Scripts
``` bash
cd dev/omramastudio/
ng build
cd ../../
cp -a dev/omramastudio/dist/omramastudio/. docs/
git add . && git commit -m 'updates' && git push
```
