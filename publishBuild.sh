#!/bin/env sh

### LOCAL ###
commitMsg=`date`
serverHost="laohost"
distPath=build/

### REMOTE ###
publishPath=vapecalc.undg.xyz

echo "     ?> building react app"
npm run build

echo "     ?> cd $distPath"
cd $distPath

echo "     ?> add."
git add .

echo "     ?> git cm -m "$commitMsg""
git cm -m "$commitMsg"

echo "     ?> git push"
git push

echo "     ?> cd -"
cd -

echo "     ?> * all done"
