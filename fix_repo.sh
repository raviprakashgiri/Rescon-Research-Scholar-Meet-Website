#!/bin/sh

git filter-branch --env-filter '

am="$raviprakashgiri@gmail.com"
cm="$raviprakashgiri@gmail.com"

if [ "$GIT_COMMITTER_EMAIL" = "none@none" ]
then
    cm="raviprakashgiri@gmail.com"
fi
if [ "$GIT_AUTHOR_EMAIL" = "none@none" ]
then
    am="raviprakashgiri@gmail.com"
fi

export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_EMAIL="$cm"
'