// noch interieren lassen und verkleinern
import me from "../assets/me.png";

export function AboutPage() {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm ">
        <figure>
          <img
            className="w-55 rounded avatar"
            src={me}
            alt="Professionelles Bewerbungsfoto von Josephine Mundt, einer Frontend- und Webentwicklerin in modernem Office-Setting mit Laptop, Monitor und sichtbarem Quellcode. Seriöse, selbstbewusste Ausstrahlung und zeitgemäßes Arbeitsumfeld."
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Hey, ich bin Josi 😊</h2>
          <p>
            Ich mache derzeit eine Weiterbildung beim DCI für Web- und
            Software-entwicklung.
          </p>
          <p>
            Früher habe ich für Amazon im technische Suport gearbeitet und auch
            eine Zeit lang <br />
            bei der TropperDataService AG als Assistentin für
            Dokumentenmanagement.
          </p>
          <p>
            Nun möchte ich meinen Weg in der IT Welt beschreiten, sicher fragen
            Sie sich warum?
          </p>
          <p>
            Der Grund ist an sich ganz simpel. Ich mag Herausforderungen und
            will in einem Beruf arbeiten für den ich brenne. <br />
            Ich möchte kein 9 to 5 Job. Ich möchte Probleme lösen, vor
            Herausforderungen stehen und stätig neue Sachen lernen. <br />
            Außerdem will ich etwas erschaffen und bin ein Fan des ersten Matrix
            Films.
          </p>
        </div>
      </div>
    </>
  );
}
