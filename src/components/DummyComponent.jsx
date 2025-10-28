const DummyComponent = () => {
    return (
        //Returnerer en JS funktion/HTML-element?
        <button className="dummy-button">Klik på mig...</button>
    );

    //ELLER: return <button>Klik på mig...</button>;

    //Et komponent kan kun returnere ÉN ting! Så ingen nabo-elementer på samme niveau,
    // men børn er OK.
}

export default DummyComponent;