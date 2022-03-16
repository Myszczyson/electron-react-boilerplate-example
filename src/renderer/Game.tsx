import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: '/assets/Build/flappyBird.loader',
  dataUrl: '/assets/Build/flappyBird.data',
  frameworkUrl: '/assets/Build/flappyBird.framework.js',
  codeUrl: '/assets/Build/flappyBird.wasm',
});

function Game() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Unity unityContext={unityContext} />
    </div>
  );
}

export default Game;
