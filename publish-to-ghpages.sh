#!/bin/sh

# script to build and publish to github pages

npm run build;

git add dist -f;
git commit -m "Adding dist";
git subtree push --prefix dist origin gh-pages;


