import Card from '../Card/Card'

function Slider({ nro_slider }) {

    console.log();
    return (
        <>

            <div className="row">

                <div className="col">

                    <Card imagen={nro_slider[0].imagen} ciudad={nro_slider[0].ciudad} pais={nro_slider[0].pais} />

                    <Card imagen={nro_slider[1].imagen} ciudad={nro_slider[1].ciudad} pais={nro_slider[1].pais} />

                </div>

                <div className="col">

                    <Card imagen={nro_slider[2].imagen} ciudad={nro_slider[2].ciudad} pais={nro_slider[2].pais} />

                    <Card imagen={nro_slider[3].imagen} ciudad={nro_slider[3].ciudad} pais={nro_slider[3].pais} />

                </div>

            </div>

        </>
    )
}

export default Slider