import React from 'react'

export default function Home() {
  return (
    <section>
      <h2>Willkommen</h2>
      <p>Dieses Demo‑Frontend zeigt Reiseinformationen für Syrien und Deutschland.</p>
      
      <div>
        <h3>Berlin - Die deutsche Hauptstadt</h3>
        <img src="/germany/berlin.jpg" alt="Berlin" />
        <p>
          Berlin ist die Hauptstadt und größte Stadt Deutschlands mit etwa 3,7 Millionen Einwohnern. 
          Als politisches, kulturelles und wirtschaftliches Zentrum des Landes bietet Berlin eine 
          einzigartige Mischung aus Geschichte und Moderne.
        </p>
        <p>
          <strong>Sehenswürdigkeiten:</strong> Brandenburger Tor, Reichstagsgebäude, Museumsinsel, 
          East Side Gallery, Checkpoint Charlie
        </p>
        <p>
          Berlin verbindet auf einzigartige Weise Vergangenheit und Zukunft und ist ein Muss für 
          jeden Deutschland-Besucher.
        </p>
      </div>
      
      <div>
        <h3>Damascus - Die Perle des Orients</h3>
        <img src="/syria/damascus.jpg" alt="Damascus" />

        <p>
          Damascus ist die Hauptstadt Syriens und eine der ältesten kontinuierlich bewohnten Städte der Welt. 
          Mit einer Geschichte von über 4.000 Jahren ist Damascus ein wahres kulturelles und historisches Juwel 
          des Nahen Ostens.
        </p>
        <p>
          <strong>Sehenswürdigkeiten:</strong> Umayyaden-Moschee, Altstadt (UNESCO-Weltkulturerbe), 
          Saladin-Grab, Souks von Damascus, Azem-Palast
        </p>
        <p>
          Damascus war einst das Zentrum des islamischen Kalifats und beherbergt einige der wichtigsten 
          islamischen Monumente der Welt. Die Stadt ist berühmt für ihre traditionellen Handwerke, 
          insbesondere den Damaszener Stahl.
        </p>
      </div>
    </section>
  )
}
