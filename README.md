# Elko SmartHome
Add support for Elko SmartHome to the Athom Homey

# Supports:
- **ESH 316GLED RF PH** - Dimmer (Still some bugs with forced_timeouts)
  http://proff.elko.no/elko-smart-home-316gled/esh-rs16-316gled-dimmer-rf-ph-article2622-1781.html
  - *Known bugs*:
    - forced_timeouts when multiple commands are sent from Homey app or Web app
- **ESH Super TR RF PH** - Thermostat
  http://proff.elko.no/elko-smart-home-super-termostat/esh-plus-super-tr-rf-ph-article2629-1779.html
  - Reads floor and air temp
  - Reads Thermostat set temp
  - Thermostat set temp is editable
  - Icons for Heating status og toggle for childlock is present for later update (But do not work)

## Plan for support:
  - **ESH Super TR RF PH**
    - Set child lock status
    - See if Thermostat is active/inactive
    - See if air or floor temperature is active thermostat source

  - **New Elko SmartHome products - Late 2018 / early 2019 release**
    - ESH Plus wall Switch - 4 button Zigbee switch (Battery)
    - ESH Plus wall Switch with PIR - 4 button Zigbee switch (Battery)
    - ESH Plus wall Switch with dimmer - 5 button with dimmer wheel Zigbee switch (Battery)
    - ESH Socket relay - Zigbee
    - ESH Relay Puck - In wall Zigbee relay
    - ESH Dimmer Puck - in wall Zigbee dimmer

# Donate
 If you like the app, please donate so I can keep improving it!
 https://paypal.me/prj84

# Changelog
## Version: 0.0.1
- First beta
- Includes support for ESH 316GLED RF PH - Dimmer
- Includes support for ESH Super TR RF PH - Thermostat
