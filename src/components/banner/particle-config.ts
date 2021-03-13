import vector1 from "images/vector-1.svg"
import vector2 from "images/vector-2.svg"
import vector3 from "images/vector-3.svg"
import vector4 from "images/vector-4.svg"

export const config = {
  "particles": {
      "number": {
          "value": 10,
          "density": {
              "enable": true,
              "value_area": 1600
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          enable: true,
          "speed": 2,
          "out_mode": "out",
          random: true,
      },
      "shape": {
          "type": [
              "image",
          ],
          "image": [
              {
                  "src": vector1,
                  "height": 400,
                  "width": 300
              },
              {
                  "src": vector2,
                  "height": 500,
                  "width": 600
              },
              {
                  "src": vector3,
                  "height": 500,
                  "width": 600
              },
              {
                  "src": vector4,
                  "height": 500,
                  "width": 600
              },
          ]
      },
      opacity: {
        value: 0.5,
        anim: {
          enable: false,
          speed: 0.2
        }
      },
      "size": {
          "value": 800,
          "random": true,
          "anim": {
              "enable": true,
              "size_min": 300,
          }
      }
  },
  "retina_detect": false
}