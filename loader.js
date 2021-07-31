import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as fs from 'fs'
import * as atob from 'atob'
import { XMLHttpRequest } from 'xmlhttprequest'

global.atob = atob.default
global.XMLHttpRequest = XMLHttpRequest

const dice_models = [
  {
    in: 'models/d30_dsn.gltf',
    out: 'output/d30_dsn.json'
  }
]

for (var options of dice_models) {
  console.log(`${options.in} => ${options.out}`)
  convert_model( options )
}

function convert_model ( options ) {
  const content = fs.readFileSync( options.in )
  
  const loader = new GLTFLoader
  
  loader.parse( trimBuffer( content ), '', ( gltf ) => {
    fs.writeFileSync( options.out, JSON.stringify( gltf.scene.children[0].geometry.toJSON(), null, '\t' ) )
  },
  ( e) => {
    console.error( e )
  })
}

function trimBuffer ( buffer ) {
  const { byteOffset, byteLength } = buffer;
  return buffer.buffer.slice( byteOffset, byteOffset + byteLength );
}

