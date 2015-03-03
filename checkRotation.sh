num=1
cat $1 | while read line
do
#  echo $num:$line
  if test $num -eq 2; then
    echo $line
    break
  fi
  num=$((num + 1))
done
