#!/bin/sh
content=`cat ./README.md`

mkdir -p exampleSite/content/tests

count=100
echo $count
if [ ! -z "$1" ]
  then count=$1
fi

for i in $( seq 1 $count ); do
    for j in en zh-hans zh-hant ar; do
        date=`date -d "$i day ago" '+%Y-%m-%d'`
        echo -e "---\n
title: '[$j] Test Post #$i'\n
date: $date\n
tags:\n
  - 'Tag #$i'\n
Categories:\n
  - Test\n
---\n
$content" > "exampleSite/content/tests/$i.$j.md"
    done 
done
