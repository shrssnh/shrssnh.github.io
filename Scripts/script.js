// Canvas
const c = document.getElementById("webgl")

// Scene
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()

// Objects
const geometry = new THREE.BoxGeometry( 1,1,1 )

// Materials

const mat = [
    new THREE.MeshStandardMaterial({
        map: textureLoader.load("./Media/flop.jpg"),
    }),
    new THREE.MeshStandardMaterial({
        map: textureLoader.load("./Media/flop.jpg"),
    }),
    new THREE.MeshStandardMaterial({
        map: textureLoader.load("./Media/flop.jpg"),
    }),
    new THREE.MeshStandardMaterial({
        map: textureLoader.load("./Media/flop.jpg"),
    }),
    new THREE.MeshStandardMaterial({
        map: textureLoader.load("./Media/flop.jpg"),
    }),
    new THREE.MeshStandardMaterial({
        map: textureLoader.load("./Media/flop.jpg"),
    }),    
]

// Mesh
const sphere = new THREE.Mesh(geometry,mat)
scene.add(sphere)

// Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
camera.rotation.y = -0.5
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: c
})
renderer.setClearColor( 0x2e2e2e, 1 );
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()