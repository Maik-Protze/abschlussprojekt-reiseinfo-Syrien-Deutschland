import React from 'react'

export default function Terms() {
    return (
        <div>
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    padding: 'var(--spacing-3xl) 0',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>
                        Allgemeine Geschäftsbedingungen (AGB)
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
                        Unsere Vertragsbedingungen für Reisebuchungen
                    </p>
                </div>
            </div>

            {/* Content */}
            <section>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2>§ 1 Geltungsbereich</h2>
                    <p>
                        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über
                        Reiseleistungen, die zwischen TravelDreams GmbH (nachfolgend "TravelDreams" genannt)
                        und dem Kunden (nachfolgend "Reisende" genannt) geschlossen werden.
                    </p>

                    <h2>§ 2 Vertragsschluss und Zahlungsbedingungen</h2>
                    <h3>2.1 Buchung</h3>
                    <p>
                        Mit der Buchung bietet der Reisende TravelDreams den Abschluss eines Reisevertrages
                        verbindlich an. Die Buchung kann schriftlich, telefonisch, per E-Mail oder über
                        unsere Website erfolgen.
                    </p>

                    <h3>2.2 Vertragsschluss</h3>
                    <p>
                        Der Vertrag kommt mit Zugang der Reisebestätigung zustande. Mit der Reisebestätigung
                        wird der Inhalt des Reisevertrages festgeschrieben.
                    </p>

                    <h3>2.3 Zahlung</h3>
                    <p>
                        Nach Vertragsschluss ist eine Anzahlung in Höhe von 20% des Reisepreises fällig.
                        Die Restzahlung wird 30 Tage vor Reisebeginn fällig.
                    </p>

                    <h2>§ 3 Leistungen</h2>
                    <p>
                        Art und Umfang der vertraglichen Leistungen ergeben sich aus der Leistungsbeschreibung
                        und den hierauf bezogenen Angaben in der Reisebestätigung.
                    </p>
                    <p>
                        Nebenabreden, die den vereinbarten Inhalt des Reisevertrages ändern, bedürfen der
                        schriftlichen Bestätigung durch TravelDreams.
                    </p>

                    <h2>§ 4 Rücktritt und Stornierung</h2>
                    <h3>4.1 Rücktritt durch den Kunden</h3>
                    <p>
                        Der Kunde kann jederzeit vor Reisebeginn vom Vertrag zurücktreten. Maßgeblich ist
                        der Zugang der Rücktrittserklärung bei TravelDreams.
                    </p>

                    <h3>4.2 Stornogebühren</h3>
                    <p>
                        Bei Rücktritt fallen folgende Stornogebühren an:
                    </p>
                    <ul>
                        <li>Bis 30 Tage vor Reisebeginn: 20% des Reisepreises</li>
                        <li>29-15 Tage vor Reisebeginn: 40% des Reisepreises</li>
                        <li>14-7 Tage vor Reisebeginn: 60% des Reisepreises</li>
                        <li>6-3 Tage vor Reisebeginn: 80% des Reisepreises</li>
                        <li>Weniger als 3 Tage vor Reisebeginn oder Nichtantritt: 95% des Reisepreises</li>
                    </ul>

                    <h3>4.3 Umbuchung</h3>
                    <p>
                        Umbuchungen sind bis 30 Tage vor Reisebeginn gegen eine Gebühr von 50€ pro Person möglich.
                    </p>

                    <h2>§ 5 Preisänderungen</h2>
                    <p>
                        TravelDreams behält sich vor, den im Reisevertrag vereinbarten Preis im Falle der
                        Erhöhung der Beförderungskosten, der Abgaben für bestimmte Leistungen oder der für
                        die Reise geltenden Wechselkurse zu erhöhen.
                    </p>

                    <h2>§ 6 Haftung</h2>
                    <p>
                        TravelDreams haftet im Rahmen der Sorgfaltspflicht eines ordentlichen Kaufmanns für:
                    </p>
                    <ul>
                        <li>Die gewissenhafte Reisevorbereitung</li>
                        <li>Die sorgfältige Auswahl und Überwachung der Leistungsträger</li>
                        <li>Die Richtigkeit der Leistungsbeschreibung</li>
                        <li>Die ordnungsgemäße Erbringung der vertraglich vereinbarten Reiseleistungen</li>
                    </ul>

                    <h2>§ 7 Pass-, Visa- und Gesundheitsvorschriften</h2>
                    <p>
                        TravelDreams informiert über allgemeine Pass- und Visaerfordernisse sowie gesundheitspolizeiliche
                        Formalitäten des Reiselandes. Für die Einhaltung aller für die Durchführung der Reise
                        wichtigen Vorschriften ist der Reisende selbst verantwortlich.
                    </p>

                    <h2>§ 8 Datenschutz</h2>
                    <p>
                        Die personenbezogenen Daten des Kunden werden von TravelDreams nur im Rahmen der
                        gesetzlichen Bestimmungen erhoben, verarbeitet und genutzt. Details entnehmen Sie
                        bitte unserer Datenschutzerklärung.
                    </p>

                    <h2>§ 9 Gerichtsstand und anwendbares Recht</h2>
                    <p>
                        Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten
                        aus oder im Zusammenhang mit diesem Vertrag ist Berlin, soweit der Kunde Kaufmann,
                        juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                    </p>

                    <h2>§ 10 Salvatorische Klausel</h2>
                    <p>
                        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die
                        Wirksamkeit der übrigen Bestimmungen nicht.
                    </p>

                    <p style={{ marginTop: 'var(--spacing-2xl)', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                        Stand: November 2025<br />
                        TravelDreams GmbH
                    </p>
                </div>
            </section>
        </div>
    )
}
