import "./styles.css";
import Particles from "./components/particles/particles";
export default function BreathingBlob() {
  return (
    <>
      <h1>Visualizing Mindfulness</h1>
      <code>
        The body... will gradually start to disintegrate until one reaches the
        stage where one can feel the entire body to be subatomic particles
        arising and passing away, arising and passing away in the form of
        wavelets &emsp;&emsp;&emsp;- S.E. Goenka
      </code>
      <br />
      <br />

      <form>
        <input type="text" placeholder="set breath interval" />
        <input type="submit" text="interval" />
      </form>
      <div className="blob">
        <br />
        <Particles />
      </div>
    </>
  );
}
