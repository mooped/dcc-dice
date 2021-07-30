import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as fs from 'fs'

const content = fs.readFileSync( 'd30_dsn.gltf' )

const loader = new GLTFLoader

import * as atob from 'atob'

global.atob = atob.default

loader.parse( trimBuffer( content ), '', ( gltf ) => {
  //console.log( gltf.scene.children[0].geometry.toJSON() )
  fs.writeFileSync( 'd30_dsn.json', JSON.stringify( gltf.scene.children[0].geometry.toJSON(), null, '\t' ) )
},
( e) => {
  console.error( e )
})

function trimBuffer ( buffer ) {
  const { byteOffset, byteLength } = buffer;
  return buffer.buffer.slice( byteOffset, byteOffset + byteLength );
}

