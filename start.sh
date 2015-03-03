mount -o remount, rm /
ln -s /system/bin /bin
busybox stty -F /dev/ttyS0 115200 raw -onlcr -echo
cd /etc/www/revolvingLantern/
busybox nohup node sensible-app.js &
