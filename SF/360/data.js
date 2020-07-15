var APP_DATA = {
  "scenes": [
    {
      "id": "0-schnitt",
      "name": "schnitt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5751805005254944,
          "pitch": -0.07431510157689303,
          "rotation": 4.71238898038469,
          "target": "1-raumkonzept"
        },
        {
          "yaw": -0.2793972990415874,
          "pitch": 0.133607472933301,
          "rotation": 0,
          "target": "4-cave"
        },
        {
          "yaw": 0.10562781261876353,
          "pitch": 0.13825329552615173,
          "rotation": 0,
          "target": "5-mointain-top"
        },
        {
          "yaw": -0.18277180555295658,
          "pitch": -0.22531604447541298,
          "rotation": 3.141592653589793,
          "target": "6-pausenschnecke"
        },
        {
          "yaw": 0.5562140390606913,
          "pitch": -0.14518687428302357,
          "rotation": 1.5707963267948966,
          "target": "2-klassenraum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.485381568057889,
          "pitch": -0.2603118549408858,
          "title": "AEG der Zukunft<br>",
          "text": "<div>Am bestehenden Albert - Einstein - Gymnasium in Böblingen wird studienartig untersucht, wie neue Raumkonzepte kombiniert mit virtuellen Raumerfahrungen eine neue Form von Unterricht erzeugt. Als zeitgemäßer Ansatz wird kein kompletter Neubau für eine Schule vorgeschlagen, sondern minimal-invasive Eingriffe in die bestehende Struktur. Die Raum- und Unterrichtsqualität der bestehen Schule wird optimiert und für die Lehre der Zukunft umgewandelt.</div><div><br></div><div>Die bestehende Schule wird mit der Möglichkeit verschieden großer und skalierbaren Räumen bereichert. Dabei richten sich die neuen Raumgrößen nach dem Anforderungsprofil der 5 Grundelemente für Unterrichtsformen nach der Studie von David Thornburg:<br>Mountain Top - Cave - Campfire - Watering Hole - Hands on.<br>Verschiedene Unterrichtssituationen von Vorträgen vor Großgruppen über kleinere Arbeitsteams zu Einzelarbeit oder Taktiker Erfahrung durch experimentieren und bauen. <br> </div>"
        },
        {
          "yaw": 1.6441321714669428,
          "pitch": -0.16378229193285776,
          "title": "existing",
          "text": "<img src= images/existing.jpg>"
        },
        {
          "yaw": 2.8582476762667763,
          "pitch": -0.2311139643259157,
          "title": "blooms<br>",
          "text": "<img src= images/blooming.jpg>"
        }
      ]
    },
    {
      "id": "1-raumkonzept",
      "name": "raumkonzept",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6637786897475095,
          "pitch": 0.4047128266135793,
          "rotation": 0,
          "target": "0-schnitt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8559883526375103,
          "pitch": -0.2696650307947692,
          "title": "floor_2",
          "text": "<img src= images/floor_2.jpg>"
        },
        {
          "yaw": -0.2556539569429166,
          "pitch": -0.2874394632011459,
          "title": "raumkonzept<br>",
          "text": "An den bisherigen Raumstrukturen der heutigen Klassenzimmern wird jeweils eine massive Wand ersetzt durch mobile, aufziehbare Stoffwände. In den Pausen strömen die Schüler nicht länger auf die übervollen Flure mit zurück bleibenden leere Klassenzimmer. Die Klassenzimmer geben nun den Raum frei zur Pause - die neuen mobilen Stoff-Trennwände ermöglichen eine dichtere und skalierbare Raumnutzung. Dadurch kann die Grundstruktur der Schule neu erlebt und belebt werden. An einigen Stellen in der Schule werden die großen Klassenräume durch kleine, hinzu- und wegnehmbare Einzelarbeitsplätze ergänzt um eine flexiblere Grundstruktur für neue Lehrformen zu bieten. Auch sie werden von den schalldichten Stoffwänden umrahmt. Räumliche Beengung und Zwang wird aufgelöst.<br><br>"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "title": "<div>floor_2</div>",
          "text": "<img src= images/floor_2.jpg>"
        },
        {
          "yaw": -0.2566272486730625,
          "pitch": -0.5034576359878464,
          "title": "floor_1<br>",
          "text": "<img src= images/floor_1.jpg>"
        },
        {
          "yaw": 2.1658118470626775,
          "pitch": -0.24941808161836398,
          "title": "floor_3<br>",
          "text": "<img src= images/floor_3.jpg>"
        }
      ]
    },
    {
      "id": "2-klassenraum",
      "name": "klassenraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7602434960193207,
          "pitch": 0.37288391562033496,
          "rotation": 2.356194490192345,
          "target": "0-schnitt"
        },
        {
          "yaw": -0.3502457870085589,
          "pitch": -0.015587126247424976,
          "rotation": 0,
          "target": "3-var-klassenraum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1218622996593677,
          "pitch": -0.09065931190796306,
          "title": "klassenräume",
          "text": "Für den Unterricht sollen nicht nur reale Räume in der Schule errichtet werden. Jeder Raum wird zusätzlich mit der Verwendung der virtuellen Realität erweitert. Durch die Nutzung von VR-Brillen im Klassenraum erreicht die Schule der Zukunft eine bessere Vermittlung von Unterrichtsstoff. Dafür wurde eine virtuelle Nutzeroberfläche entworfen, in der&nbsp; verschiedene, von Schüler und Lehrer skalierbare Raumelemente angeboten werden. Raumschalen für die Gliederung von Arbeitsgruppen, skalierbare Screens auf denen Wissen projiziert werden kann oder Webcam-Bilder externer Benutzer, um eine neue Vernetzung zwischen verschiedenen Schulen anzubieten. Oder kleine virtuelle Schneckenhäuser, um sich für einen Moment zurück zu ziehen und ungestört reflektieren zu können. <br>"
        },
        {
          "yaw": 0.5867919057941009,
          "pitch": -0.17514710232387465,
          "title": "step out<br>",
          "text": "<img src= images/stepout.jpg>"
        }
      ]
    },
    {
      "id": "3-var-klassenraum",
      "name": "VAR klassenraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.008337590000003559,
        "pitch": 0,
        "fov": 1.588866992158666
      },
      "linkHotspots": [
        {
          "yaw": -2.4590576063684004,
          "pitch": 0.18768714533373654,
          "rotation": 0,
          "target": "2-klassenraum"
        },
        {
          "yaw": 0.9535604803996698,
          "pitch": 0.3390817675309119,
          "rotation": 1.5707963267948966,
          "target": "0-schnitt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9286182524154789,
          "pitch": 0.05961927153517621,
          "title": "scaleable landscape<br>",
          "text": "Die Skalierung der virtuellen Raumelemente wird&nbsp; von der Handbewegung der Benutzer gesteuert, indem die Bewegung durch den Leap - Motion Controller sensorisch erfasst wird. Die Skalierung der Objekte im Raum geschieht spiralförmig - entsprechend der Bewegung einer aufschwingenden Hand und Körper Drehung - von klein im Zentrum zu groß nach Außen."
        },
        {
          "yaw": 0.9160750695330293,
          "pitch": -0.18523081940787378,
          "title": "scaleable",
          "text": "<img src= images/scaleable.jpg>"
        }
      ]
    },
    {
      "id": "4-cave",
      "name": "cave",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9902453246766285,
          "pitch": 0.16906831185798055,
          "rotation": 1.5707963267948966,
          "target": "0-schnitt"
        },
        {
          "yaw": -0.2548807138827076,
          "pitch": 0.09262649870961326,
          "rotation": 5.497787143782138,
          "target": "5-mointain-top"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.16895517268599392,
          "pitch": -0.09542648915567042,
          "title": "VAR break<br>",
          "text": "<video controls><source src= video/VARbreak.mp4 type= video/mp4>Your browser does not support the video element.</video>"
        }
      ]
    },
    {
      "id": "5-mointain-top",
      "name": "mointain top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9272314546847227,
          "pitch": 0.1623302420688617,
          "rotation": 1.5707963267948966,
          "target": "0-schnitt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.44307661989861913,
          "pitch": -0.3252931400660337,
          "title": "<div>virtuelle Musik</div>",
          "text": "Für den Musikunterricht gibt es virtuelle `Orff Instrumente´ , die durch die sensorische Erfassung der Handbewegung zum klingen gebracht werden können. So kann eine sensuelle Lernerfahrung auch in der virtuellen Realität vermittelt werden. <br>"
        },
        {
          "yaw": 0.44130807784241277,
          "pitch": -0.46419060797331113,
          "title": "VAR music<br>",
          "text":  "<img src= images/VARmusic.jpg>"

        }
      ]
    },
    {
      "id": "6-pausenschnecke",
      "name": "Pausenschnecke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7372276066232075,
          "pitch": 0.4315189968308193,
          "rotation": 1.5707963267948966,
          "target": "0-schnitt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7226537173965788,
          "pitch": -0.07857309608268714,
          "title": "AEG der Zukunft",
          "text":  "<img src= images/AEGderZukunft.jpg>"

        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
