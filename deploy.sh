gulp build
git pull
git add .
git commit -m 'Deployment'
git push
git subtree push --prefix build origin gh-pages
