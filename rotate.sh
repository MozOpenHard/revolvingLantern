echo 0 > /sys/class/gpio/gpio$1/value
echo 0 > /sys/class/gpio/gpio$2/value
echo 1 > /sys/class/gpio/gpio$1/value
echo 0 > /sys/class/gpio/gpio$2/value
