# CN1-9/SPI0_RX: GPIO1_A6:198 , CN1-10/SPI0_TX:GPIO1_A7:199
echo $1 > /sys/class/gpio/export
echo $2 > /sys/class/gpio/export
echo "out" > /sys/class/gpio/gpio$1/direction
echo "out" > /sys/class/gpio/gpio$2/direction
echo 0 > /sys/class/gpio/gpio$1/value
echo 0 > /sys/class/gpio/gpio$2/value