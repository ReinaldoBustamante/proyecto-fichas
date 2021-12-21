import React from 'react'

export const Formulario = (props) => {

    const {setdatosOdontograma, datosOdontograma, setregistroOdontograma, registroOdontograma,carga, setcarga} = props
    
    const handleOnChange = (e) =>{
        if (e.target.name ==="pieza"){
            setdatosOdontograma({
                ...datosOdontograma,
                pieza: e.target.value
            })
        }
        if (e.target.name ==="cara"){
            setdatosOdontograma({
                ...datosOdontograma,
                cara: e.target.value
            })
        }
        if (e.target.name ==="diagnostico"){
            setdatosOdontograma({
                ...datosOdontograma,
                diagnostico: e.target.value
            })
        }
        if (e.target.name ==="procedimiento"){
            setdatosOdontograma({
                ...datosOdontograma,
                procedimiento: e.target.value
            })
        }
    }
    const handleOnClick = () =>{
        setregistroOdontograma([
            ...registroOdontograma,
            datosOdontograma
        ]    
        )
        setdatosOdontograma({
            ...datosOdontograma,
            diagnostico:"",
            procedimiento:""
        })
        setcarga(carga+1)
    }
   
 
    return (
        <div className='row'>
            <div className='col-12 h4'>
                Añadir Registro
            </div>
                <div className='row'>
                    <div className="col-6 mt-3">
                    
                    <select className="form-select" name="pieza" size="4" aria-label="size 3 select example" onChange={handleOnChange}>
                        <option value="">Pieza</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        

                    </select>
                </div>
                <div className='col-6 mt-3' >
                    <select className="form-select"  aria-label="Default select example" name="cara" onChange={handleOnChange}>
                        <option value="">Seleccione Cara</option>
                        <option value="oclusal">Oclusal</option>
                        <option value="mesial">Mesial</option>
                        <option value="distal">Distal</option>
                        <option value="vestibular">Vestibular</option>
                        <option value="lingual">Lingual</option>
                    </select>
                </div>

                <div className="col-6 mt-3">
                <select className="form-select" name="diagnostico" size="4" aria-label="size 3 select example" onChange={handleOnChange}>
                        <option value="">Diagnostico</option>
                        <option value="diente faltante">Diente faltante</option>
                        <option value="diente extraido">Diente extraido</option>
                        <option value="caries activa">Caries activa</option>
                        <option value="sellante mal estado">Sellante mal estado</option>
                        <option value="sellante buen estado">Sellante buen estado</option>
                        <option value="fractura">Fractura</option>
                        <option value="requiere endodoncia">Requiere endodoncia</option>
                        
                        
                    
                    </select>
                </div>
                <div className="col-6 mt-3">
                        <div class="form-floating">
                            <input type = "text" class="form-control" name="procedimiento" onChange={handleOnChange} value={datosOdontograma.procedimiento}/>
                            <label htmlFor= "razon_ingreso" >
                                Procedimiento
                            </label>
                        </div>
                </div>
            </div>
            <button type='button' onClick={handleOnClick} className='btn color-1 mt-3 text-white'>Registrar</button>

            
        </div>
    )
}
