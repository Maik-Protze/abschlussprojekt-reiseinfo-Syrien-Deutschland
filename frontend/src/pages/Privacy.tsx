import React from 'react'

export default function Privacy() {
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
                        Datenschutzerklärung
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', color: 'white' }}>
                        Ihre Privatsphäre ist uns wichtig
                    </p>
                </div>
            </div>

            {/* Content */}
            <section>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                        personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                        Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3>Datenerfassung auf dieser Website</h3>
                    <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                        Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <h4>Wie erfassen wir Ihre Daten?</h4>
                    <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                        kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                        durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                        Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>

                    <h4>Wofür nutzen wir Ihre Daten?</h4>
                    <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
                        zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>

                    <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                        Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                    </p>

                    <h2>2. Hosting</h2>
                    <p>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                    </p>
                    <h3>Externes Hosting</h3>
                    <p>
                        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                        Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                    </p>

                    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3>Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                        gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3>Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <p>
                        TravelDreams GmbH<br />
                        Musterstraße 123<br />
                        10115 Berlin<br />
                        Deutschland
                    </p>
                    <p>
                        Telefon: +49 123 456 7890<br />
                        E-Mail: info@traveldreams.de
                    </p>

                    <h3>Speicherdauer</h3>
                    <p>
                        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                        wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                        Datenverarbeitung entfällt.
                    </p>

                    <h2>4. Datenerfassung auf dieser Website</h2>
                    <h3>Kontaktformular</h3>
                    <p>
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                        der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    </p>
                    <p>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                        sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                        vorvertraglicher Maßnahmen erforderlich ist.
                    </p>

                    <h3>Anfrage per E-Mail oder Telefon</h3>
                    <p>
                        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
                        daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
                        Ihres Anliegens bei uns gespeichert und verarbeitet.
                    </p>

                    <p style={{ marginTop: 'var(--spacing-2xl)', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                        Stand: November 2025
                    </p>
                </div>
            </section>
        </div>
    )
}
