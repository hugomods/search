#!/bin/sh
content=`cat ./README.md`

mkdir -p exampleSite/content/tests

count=100
if [ ! -z "$1" ]
  then count=$1
fi

for i in $( seq 1 $count ); do
    for j in en zh-hans zh-hant ar; do
        date=`date -d "$i day ago" '+%Y-%m-%d'`
        data=`cat <<- data
---
title: '[$j] Test Post #$i'
date: $date
tags:
  - 'Tag$i'
Categories:
  - Test
---

$content
data`
        echo "$data" > "exampleSite/content/tests/$i.$j.md"
    done 
done
