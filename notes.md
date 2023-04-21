Steps for updating the website:
1. Go to Dev Home directory
2. Update Dev with updated angular code
3. Check if the website is working as expected using `ng serve`
4. Generate `dist` content using `ng build`
5. Copy contents inside dist/omramastudio (all files in parallel with index.html) AND Paste the copied files with in docs folder
6. git add . && git commit -m 'updates' && git push


Bash Scripts
``` bash
cd dev/omramastudio/
ng serve
ng build
cd ../../
rm -rf docs/*
cp -a dev/omramastudio/dist/omramastudio/. docs/
git add . && git commit -m 'updates' && git push
```
