(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_serial1.b8169d69.jpg"},359:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_serial2.9629e5a0.jpg"},360:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_Pilight_Digoo-DG-R8S.8a0f9d60.png"},394:function(e,t,a){"use strict";a.r(t);var o=a(33),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rf-gateways-433mhz-315mhz"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rf-gateways-433mhz-315mhz"}},[e._v("#")]),e._v(" RF gateways  (433mhz/315mhz)")]),e._v(" "),o("p",[e._v("Note that for the moment RF, RF2 and Pilight can not be activated on the same boards together.")]),e._v(" "),o("h2",{attrs:{id:"rcswitch-based-gateway"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rcswitch-based-gateway"}},[e._v("#")]),e._v(" RCSwitch based gateway")]),e._v(" "),o("h3",{attrs:{id:"receiving-data-from-rf-signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),o("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),o("p",[o("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),o("p",[e._v("Generate your RF signals by pressing a remote button or other and you should see :")]),e._v(" "),o("p",[o("code",[e._v('home/OpenMQTTGateway/433toMQTT {"value":1315156,"protocol":1,"length":24,"delay":317}')])]),e._v(" "),o("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"value":1315156}\'')])]),e._v(" "),o("p",[e._v("This command will send by RF the code 1315156 and use the default parameters (protocol 1, delay 350)")]),e._v(" "),o("p",[e._v("Arduino IDE serial data received when publishing data by MQTT")]),e._v(" "),o("p",[o("img",{attrs:{src:a(358),alt:""}})]),e._v(" "),o("p",[e._v('We see that the Arduino receive the value 1315156 on the MQTT subject "MQTTto433" and send the data by RF')]),e._v(" "),o("p",[e._v("Arduino IDE serial data received when receiving data by 433Mhz")]),e._v(" "),o("p",[o("img",{attrs:{src:a(359),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rf-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rf-parameters"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RF parameters")]),e._v(" "),o("p",[e._v('RF sending support three advanced parameters; bits length, RF protocol and RF pulselength\nif you want to use a different RCswitch protocol put inside your payload the protocol number 2, "protocol":2.')]),e._v(" "),o("p",[e._v('if you want to use a pulselength 315 put inside your topic "delay":315')]),e._v(" "),o("p",[e._v('if you want to use a bits number different than 24 put inside your topic "length":24 for example')]),e._v(" "),o("p",[e._v("Example:\n"),o("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"value":1315156,"protocol":2,"length":24,"delay":315}\'')]),e._v("\nwill make RCSwitch use the protocol 2 with a pulselength of 315ms and a bits number of 24")]),e._v(" "),o("h3",{attrs:{id:"repeat-the-rf-signal-openmqttgateway-receive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#repeat-the-rf-signal-openmqttgateway-receive"}},[e._v("#")]),e._v(" Repeat the RF signal OpenMQTTGateway receive")]),e._v(" "),o("p",[e._v("So as to repeat the RF signal received by the gateway once set the following parameter to true in config_RF.h")]),e._v(" "),o("p",[o("code",[e._v("#define repeatRFwMQTT true")])]),e._v(" "),o("h3",{attrs:{id:"repeat-the-rf-signal-several-times"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#repeat-the-rf-signal-several-times"}},[e._v("#")]),e._v(" Repeat the RF signal several times")]),e._v(" "),o("p",[e._v('You can add a "repeat" key/value to the MQTTto433 JSON message to override the default number of repeats.')]),e._v(" "),o("p",[e._v("Example:\n"),o("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"value":1315156,"protocol":1,"length":24,"delay":317, "repeat":10}')])]),e._v(" "),o("h2",{attrs:{id:"pilight-gateway"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pilight-gateway"}},[e._v("#")]),e._v(" Pilight gateway")]),e._v(" "),o("h3",{attrs:{id:"receiving-data-from-rf-signal-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal-2"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),o("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),o("p",[o("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),o("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see :")]),e._v(" "),o("p",[o("img",{attrs:{src:a(360),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal-2"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),o("p",[o("strong",[e._v("ON")])]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"message":"{\\"systemcode\\":12,\\"unitcode\\":22,\\"on\\":1}","protocol":"elro_400_switch"}\'')])]),e._v(" "),o("p",[o("strong",[e._v("OFF")])]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"message":"{\\"systemcode\\":12,\\"unitcode\\":22,\\"off\\":1}","protocol":"elro_400_switch"}\'')])]),e._v(" "),o("p",[e._v("Theses commands will send by RF the signals to actuate an elro_400 switch")]),e._v(" "),o("h2",{attrs:{id:"rf-with-sonoff-rf-bridge"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rf-with-sonoff-rf-bridge"}},[e._v("#")]),e._v(" RF with SONOFF RF BRIDGE")]),e._v(" "),o("h3",{attrs:{id:"receiving-data-from-rf-signal-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal-3"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),o("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),o("p",[o("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),o("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("The first parameter is the raw value extracted from the RF module of the Sonoff bridge. The data are in hexadecimal and correspond to the details below:\nhttps://www.itead.cc/wiki/images/5/5e/RF_Universal_Transeceive_Module_Serial_Protocol_v1.0.pdf\nOpenMQTTGateway process the raw value to extract the other decimal values that can be reused to reproduce a signal (raw value can also be reused).")]),e._v(" "),o("p",[e._v("NOTE: currently the device doesn't receive correct values from Switches remote control")]),e._v(" "),o("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal-3"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSRFB" -m \'{"value":1315156}\'')])]),e._v(" "),o("p",[e._v("This command will send by RF the code 1315156 and use the default parameters:\nRepeat = 1\nLow time= 320\nHigh time= 900\nSYNC = 9500")]),e._v(" "),o("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rf-parameters-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rf-parameters-2"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RF parameters")]),e._v(" "),o("p",[e._v('RF bridge sending support four advanced parameters; Repeat, Low time, High time & Sync\nif you want to repeat your signal sending put into your json payload "repeat":2, 2 means 2 repetitions of signal')]),e._v(" "),o("p",[e._v('if you want to use a low time of 315 put inside your json payload "Tlow":315')]),e._v(" "),o("p",[e._v('if you want to use a high time of 845 put inside your json payload "Thigh":845')]),e._v(" "),o("p",[e._v('if you want to use a sync time of 9123 put inside your json payload "Tsyn":9123')]),e._v(" "),o("p",[e._v("Example:\n"),o("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSRFB/Tlow_315/Thigh_845/Tsyn_9123 -m \'{"value":"33151562","delay":"9123","val_Thigh":"845","val_Tlow":"315"}\'')]),e._v("\nwill make RF Bridge send a signal with the use of listed parameters 315, 845, 9123...")]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSRFB/Raw -m \'{"raw":"267A013603B6140551"}\'')]),e._v("\nwill make RF Bridge send a signal with the use of advanced parameters defined in the raw string")]),e._v(" "),o("h2",{attrs:{id:"rf2-gateway-kaku"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rf2-gateway-kaku"}},[e._v("#")]),e._v(" RF2 gateway KAKU")]),e._v(" "),o("p",[e._v("RF2 gateway enables to send command to RF devices with the KAKU protocol. DIO chacon devices are an example.\nIt uses the same pinout as the RF gateway and both gateways can be used on the same setup.")]),e._v(" "),o("p",[e._v("Receiving RF codes with the KAKU protocol is not compatible with ZgatewayRF , so as to get the code of your remotes you should comment ZgatewayRF in user_config.h.\nTransmitting can be done with both ZgatewayRF and ZgatewayRF2")]),e._v(" "),o("h3",{attrs:{id:"receiving-data-from-kaku-signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-kaku-signal"}},[e._v("#")]),e._v(" Receiving data from KAKU signal")]),e._v(" "),o("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),o("p",[o("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),o("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see :")]),e._v(" "),o("p",[o("code",[e._v('home/OpenMQTTGateway/RF2toMQTT {"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":0}')])]),e._v(" "),o("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-kaku-signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-kaku-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on KAKU signal")]),e._v(" "),o("p",[e._v("Once you get the infos publish the parameters with mqtt like that for off:")]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRF2 -m "{"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":0}"')])]),e._v(" "),o("p",[e._v("for on:")]),e._v(" "),o("p",[o("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRF2 -m "{"unit":0,"groupBit":0,"period":273,"adress":8233228,"switchType":1}"')])])])}),[],!1,null,null,null);t.default=s.exports}}]);