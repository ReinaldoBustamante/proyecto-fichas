import React from 'react'

export const MedicamentosEpilepsia = (props) => {
    const {datosFicha} = props
    return (
        <div>
            {datosFicha.epileptico === 1 ?
            <div className="card bg-card mb-3 text-dark" >
                <div className="card-header c-header">Medicamentos</div>
                <div className="card-body c-body">
                    <span className="">{datosFicha.medicamento_epilepcia}</span>
                </div>
            </div>
            :
            <div>
                
                {datosFicha.medicamento_epilepcia === ""?
                <div className="card bg-vacio mb-3 text-dark" >
                    <div className="card-header c-header">Medicamentos</div>
                    <div className="card-body c-body">
                        <span className="">Nada</span>
                    </div>
                </div>
                :
                <div className="card bg-vacio text-white mb-3 text-dark" >
                    <div className="card-header c-header">Medicamentos</div>
                    <div className="card-body c-body">
                        <span className="">{datosFicha.medicamento_epilepcia}</span>
                    </div>
                </div>
                }
            </div>
            
            }
        </div>
        
        
    )
}